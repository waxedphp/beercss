
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-pagination',
        _search = '.waxed-beer-pagination',
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
        if (typeof rec.page == 'object') {
          if (typeof rec.page.count == 'number') {
            this.count = rec.page.count;
          };
          if (typeof rec.page.limit == 'number') {
            this.limit = rec.page.limit;
          };
          if (typeof rec.page.offset == 'number') {
            this.offset = rec.page.offset;
          };
          this.build();
        };
      },
      
      this.click = function(ev,el) {
        //console.log(ev,$(el).data('pg'));
        if (typeof that.dd.action == 'undefined') return;
        
        var pg = 0;
        switch($(el).data('pg')) {
          case 'first':
            pg = 0;
          break;
          case 'last':
            pg = this.high;
          break;
          case 'prev':
            pg = Math.max(this.page-1,0);
          break;
          case 'next':
            pg = Math.min(this.page+1,this.high);
          break;
          default:
            pg = parseInt($(el).data('pg'));
          break;      
        }
        if (isNaN(pg)) pg = 0;
        var offset = pg * this.limit;
        
        var o = {
          'page': pg,
          'limit': this.limit,
          'offset': offset,
          'action': that.dd.action
        };
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
        
        var high = Math.floor(this.count / this.limit);
        var pos = Math.floor(this.offset / this.limit);
        pos = Math.min(high, pos);
        this.page = pos;
        this.high = high;
        var min = Math.max(0, pos - 2);
        var max = Math.min(high, pos + 2);
        //console.log(high,pos,min,max);
        //console.log(this.limit);
        //console.log(this.offset);
        
        var a = $('<nav class="group connected"></nav>').appendTo(o);
        var b = $('<button class="page-link left-round large" href="#" data-pg="first" aria-label="First"></button>')
        .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev,this);});
        var c = $('<i>keyboard_tab_rtl</i>').appendTo(b);
        var b = $('<button class="page-link no-round large" href="#" data-pg="prev" aria-label="Prev"></button>')
        .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev,this);});
        var c = $('<i>keyboard_arrow_left</i>').appendTo(b);
        for (var i=min;i<=max;i++) {
          var b = $('<button class="page-link no-round large" href="#" data-pg="'+i+'" >&nbsp;'+(i+1)+'&nbsp;</button>')
          .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev, this);});
          if (i==pos) $(b).addClass('primary');
        }
        var b = $('<button class="page-link no-round large" href="#" data-pg="next" aria-label="Next"></button>')
        .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev,this);});
        var c = $('<i>keyboard_arrow_right</i>').appendTo(b);
        var b = $('<button class="page-link right-round large" href="#" data-pg="last" aria-label="Last"></button>')
        .appendTo(a).on('click', function(ev){ev.preventDefault();that.click(ev,this);});
        var c = $('<i>keyboard_tab</i>').appendTo(b);
        
      },

      this.free = function() {

      },

      this.init=function() {

        this.count = 0;if (typeof that.dd.count != 'undefined') this.count = parseInt(that.dd.count);
        this.limit = 10;if (typeof that.dd.limit != 'undefined') this.limit = parseInt(that.dd.limit);
        this.offset = 0;if (typeof that.dd.offset != 'undefined') this.offset = parseInt(that.dd.offset);
        if (isNaN(this.count)) this.count = 0;
        if (isNaN(this.limit)) this.limit = 10;
        if (isNaN(this.offset)) this.offset = 0;

        this.build();

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
