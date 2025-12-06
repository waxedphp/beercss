
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-radios',
        _search = '.waxed-beer-radios',
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
      this.radios = [];
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
        if (that.radios.length<1) return;
        for(var i=0;i<that.radios.length;i++) {
          if ($(that.radios[i]).val() == val) {
            $(that.radios[i]).attr('checked', true);
          }
        }
      },
      
      this.changed = function(ev) {
        //console.log(ev);
        that.value = $(ev.currentTarget).val();
        console.log(that.value);

        if ((typeof that.dd.url == 'string')&&(typeof that.dd.action == 'string')) {
          var o = {
            'action' : that.dd.action
          };
          o[that.dd.name] = that.value;
          that.pluggable.sendData(o,that.dd.url,that);
        };
        
      },

      this.init=function() {

        var w = $(this.element).data(pluginName);
        if (typeof w != 'undefined') return;
                
        //console.log(pluginName);
        $(this.element).find('input[type=radio]').each(function(i,a) {
          that.radios.push(a);
          $(a).on('input', that.changed);
        });
        
        $(this.element).data(pluginName, 'yes');

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
