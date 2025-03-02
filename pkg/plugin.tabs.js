
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-tabs',
        _search = '.waxed-beer-tabs',
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
      this.tabs = [];
      this.pages = [];
      this.value = null;

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);

        if (typeof rec == 'string') {
            this.setval(rec); 
        } else if (typeof rec == 'number') { 
            this.setval(rec); 
        } else if (typeof rec != 'object') { return; };

        if (typeof rec.value == 'string') {
            this.setval(rec.value); 
        } else if (typeof rec.value == 'number') { 
            this.setval(rec.value); 
        };
      },

      this.free = function() {

      },
      this.setval = function(val) {
        var p = Number(val);
        for(var i=0;i<that.pages.length;i++) {
          if (i==p) {
            $(that.pages[i]).addClass('active');
            if (typeof that.tabs[i] != 'undefined') 
              $(that.tabs[i]).addClass('active');
          } else {
            $(that.pages[i]).removeClass('active');
            if (typeof that.tabs[i] != 'undefined') 
              $(that.tabs[i]).removeClass('active');
          }
        };
      },
      
      this.changed = function(ev) {
        var p = $(ev.currentTarget).data('page');
        //console.log(p);
        if (p>that.pages.length) return;
        for(var i=0;i<that.pages.length;i++) {
          if (i==p) {
            $(that.pages[i]).addClass('active');
            if (typeof that.tabs[i] != 'undefined') 
              $(that.tabs[i]).addClass('active');
          } else {
            $(that.pages[i]).removeClass('active');
            if (typeof that.tabs[i] != 'undefined') 
              $(that.tabs[i]).removeClass('active');
          }
        };
        that.value = p;

        if ((typeof that.dd.url == 'string')&&(typeof that.dd.action == 'string')) {
          var o = {
            'action' : that.dd.action
          };
          o[that.dd.name] = that.value;
          that.pluggable.sendData(o,that.dd.url,that);
        };
        
      },

      this.init=function() {
        
        //console.log(pluginName);
        $(this.element).find('div.page').each(function(i,a) {
          that.pages.push(a);
        });
        $(this.element).find('div.tabs a').each(function(i,a) {
          $(a).data('page',i);
          that.tabs.push(a);
          $(a).on('click', that.changed);
        });
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
