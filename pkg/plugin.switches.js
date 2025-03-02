
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-switches',
        _search = '.waxed-beer-switches',
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
      this.checkboxes = [];
      this.buttons = [];
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
        if ((that.checkboxes.length<1)&&(that.buttons.length<1)) return;
        for(var i=0;i<that.checkboxes.length;i++) {
          var v = $(that.checkboxes[i]).val();
          if (val&v) {
            $(that.checkboxes[i]).prop( "checked", true );
          } else {
            $(that.checkboxes[i]).prop( "checked", false );
          }
        };
        for(var i=0;i<that.buttons.length;i++) {
          var v = $(that.buttons[i]).val();
          if (val&v) {
            $(that.buttons[i]).removeClass('border');
          } else {
            $(that.buttons[i]).addClass('border');
          }
        };
      },
      
      this.changed = function(ev) {
        //console.log(ev);
        if ($(ev.currentTarget).is('button')) {
          if ($(ev.currentTarget).hasClass('border')) {
            $(ev.currentTarget).removeClass('border');
          } else {
            $(ev.currentTarget).addClass('border');
          };
          //console.log('button');
        } else if ($(ev.currentTarget).is('input')) {
          if ($(ev.currentTarget).is(':checked')) {
            
          };
        }
        var val = 0;
        for(var i=0;i<that.checkboxes.length;i++) {
          if ($(that.checkboxes[i]).is(':checked')) {
            var v = Number($(that.checkboxes[i]).val());
            //console.log(v);
            val = val|v;
          }
        }
        for(var i=0;i<that.buttons.length;i++) {
          if ($(that.buttons[i]).hasClass('border')) {
            
          } else {
            var v = Number($(that.buttons[i]).val());
            //console.log(v);
            val = val|v;
          }
        }
        
        that.value = val;
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
        
        //console.log(pluginName);
        $(this.element).find('input[type=checkbox]').each(function(i,a) {
          that.checkboxes.push(a);
          $(a).on('input', that.changed);
        });
        $(this.element).find('button').each(function(i,a) {
          that.buttons.push(a);
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
