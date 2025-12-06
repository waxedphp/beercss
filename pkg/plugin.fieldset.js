
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-fieldset',
        _search = '.waxed-beer-fieldset',
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

      this.invalidate = function(RECORD) {
        console.log('INVALIDATE FIELDSET', RECORD);
        $(that.element).find('input').each(function(i, e){
          that._resetInvalidationInput(e);
        });
        $(that.element).find('select').each(function(i, e){
          that._resetInvalidationInput(e);
        });
        $(that.element).find('textarea').each(function(i, e){
          that._resetInvalidationInput(e);
        });
        
        for(var x in RECORD){
          $(that.element).find('input[name='+x+']').each(function(i, e){
            that._invalidateInput(x, e, RECORD[x]);
          });
          $(that.element).find('select[name='+x+']').each(function(i, e){
            that._invalidateInput(x, e, RECORD[x]);
          });
          $(that.element).find('textarea[name='+x+']').each(function(i, e){
            that._invalidateInput(x, e, RECORD[x]);
          });
        };
      },
      
      this._resetInvalidationInput = function(e) {
        if($(e).attr('type')=='hidden') return;
        var div =  $(e).closest('div.field');
        var lbl =  $(div).find('label').first();
        var ems =  $(div).find('span.error').first();
        if (ems.length>0) {
          $(ems).remove();
        };
        $(div).removeClass('invalid');
      },
      
      this._invalidateInput = function(x,e,s) {
        if($(e).attr('type')=='hidden') return;
        var div =  $(e).closest('div.field');
        var lbl =  $(div).find('label').first();
        var ems =  $(div).find('span.error').first();
        if (ems.length<1) {
          ems = $('<span class="error"></span>').appendTo(div);
        };
        $(ems).text(s);
        $(div).addClass('invalid');
      },


      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };

      },

      this.free = function() {

      },
      
      this.changed = function(ev) {
        
      },

      this.mouseup = function(ev) {

      },

      this.init=function() {
        


        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
