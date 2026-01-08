
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-slider',
        _search = '.waxed-beer-slider',
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
      this.ranges = [];
      this.values = [];

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        
        if (typeof rec.value == 'object') { 
          for(var i=0;i<that.ranges.length;i++) {
            if (typeof rec.value[i] == 'number') {
              $(that.ranges[i]).val(rec.value[i]);
            };
          }
        };
        if ((typeof rec.value == 'number')
          &&(that.ranges.length>0)) { 
          $(that.ranges[that.ranges.length-1]).val(rec.value);
        };
      },

      this.free = function() {

      },
      
      this.changed = function(ev) {
        //console.log(ev);
        for(var i=0;i<that.ranges.length;i++) {
          that.values[i] = $(that.ranges[i]).val();
        };
        //console.log(that.values);
        
      },

      this.mouseup = function(ev) {
        //console.log(this.values);
        if ((typeof that.dd.url == 'string')&&(typeof that.dd.action == 'string')) {
          var o = {
            'action' : that.dd.action
          };
          o[that.dd.name] = that.values;
          that.pluggable.sendData(o,that.dd.url,that);
        };
      },

      this.init=function() {
        
        var w = $(this.element).data(pluginName);
        if (typeof w != 'undefined') return;
        
        //console.log(pluginName);
        $(this.element).find('input[type=range]').each(function(i,a) {
          that.ranges.push(a);
          $(a).on('input', that.changed);
          $(a).on('mouseup', function(ev){that.mouseup(ev)});
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
