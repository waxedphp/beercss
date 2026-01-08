
;(function ( $, window, document, undefined ) {

    var pluginName = 'select',
        _search = '.waxed-beer-select',
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
      this.t = 'select';
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec == 'string') { rec = {value:rec}; };
        if (typeof rec == 'number') { rec = {value:rec}; };
        if (typeof rec != 'object') { return; };
        if ((typeof rec.value == 'string')||(typeof rec.value == 'number')) {
          //console.log('SELECT', rec.value);
          if ($(this.element).is('select')) {
            $(this.element).find('option').each(function(i,a){
              $(a).prop('selected', false);
            });
            if ($(this.element).hasClass('canAddMissingOption')) {
              if ($(this.element).find('option[value=\'' + rec.value + '\']').length<1) {
                $('<option value="' + rec.value + '" >' + rec.value + '</option>').appendTo(this.element);
              };
            };
            $(this.element).find('option[value=\'' + rec.value + '\']').prop('selected', true);
          };
          if ($(this.element).is('label')) {
            $(this.element).text(rec.value);
          };
          if ($(this.element).is('input')) {
            $(this.element).val(rec.value);
          };
        };
      },
      
      this.sendData = function(value) {
        if ((typeof that.dd.url == 'string')&&(typeof that.dd.action == 'string')) {
          var o = {
            'action' : that.dd.action
          };
          o[that.dd.name] = value;
          that.pluggable.sendData(o,that.dd.url,that);
        };        
      },


      this.free = function() {

      },

      this.init=function() {

        var w = $(this.element).data(pluginName);
        if (typeof w != 'undefined') return;

        if(typeof(this.dd.value)=='string'){
          if ($(this.element).is('select')) {
            $(this.element).find('option').each(function(i,a){
              $(a).prop('selected', false);
            });
            $(this.element).find('option[value=\'' + this.dd.value + '\']').prop('selected', true);
          };
          if ($(this.element).is('label')) {
            $(this.element).text(this.dd.value);
          };
          if ($(this.element).is('input')) {
            $(this.element).val(this.dd.value);
          };
        };

        $(this.element).on('change', function() {
          //console.log( this.value );
          that.sendData(this.value);
        });
        
        $(this.element).data(pluginName, 'yes');

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
