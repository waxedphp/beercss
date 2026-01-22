
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-rating',
        _search = '.waxed-beer-rating',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){ 
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };
      this.count = 0;
      this.page = 0;
      this.limit = 0;

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };

        if (typeof rec.rating == 'number') {
          this.rating = parseInt(rec.rating);
        };
        if (typeof rec.reviews == 'number') {
          this.reviews = parseInt(rec.reviews);
        };
      },
      
      this.click = function(ev,el) {
        //console.log(ev,$(el).data('value'));
        if (typeof that.dd.action == 'undefined') return;
        
        var r = 0;
        var o = {
          'action': that.dd.action
        };
        switch($(el).data('value')) {
          case 'reviews':
            o.reviews = true;
          break;
          default:
            r = parseInt($(el).data('value'));
            if (isNaN(r)) r = 0;
            o.rating = r;
          break;      
        }
        if (typeof that.dd.slug != 'undefined') {
          o.slug = that.dd.slug;
        }
        var url = '';
        if (typeof that.dd.url != 'undefined') {
          url = that.dd.url;
        } else {
          url = that.pluggable.getAjaxUrl();
        };
        
        if (typeof that.dd.elemid != 'undefined') {
          o.ELEMID = that.dd.elemid;
        };
        
        that.pluggable.sendData(o,url,that);
        
      },
      
      this.build = function() {
        var o = $(that.element);
        o.empty();
        var min=1;
        var max=5;

        var a = $('<div class="rating"></div>').appendTo(o);
        for (var i=min;i<=max;i++) {
          var b = $('<i class="" data-value="'+i+'" >star</i>')
          .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev, this);});
          if (i<=this.rating) {
            $(b).addClass('orange-text');
          } else {
            $(b).addClass('secondary-text');
          }
        }
        if (typeof that.dd.reviews != 'undefined') {
          var a = $('<div class="reviews text-sm text-secondary" style="clear:both;" data-value="reviews" ></div>')
          .appendTo(o).on('click', function(ev){ev.preventDefault();that.click(ev, this);});
          a.text('('+this.reviews+' recenzii)');
        }
        
      },

      this.free = function() {

      },

      this.init=function() {

        this.rating = 0;if (typeof that.dd.rating != 'undefined') this.rating = parseInt(that.dd.rating);
        if (isNaN(this.rating)) this.rating = 0;
        this.reviews = 0;if (typeof that.dd.reviews != 'undefined') this.reviews = parseInt(that.dd.reviews);
        if (isNaN(this.reviews)) this.reviews = 0;
        
        this.build();

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
