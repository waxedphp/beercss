
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-dialog',
        _search = '.waxed-beer-dialog',
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
      this.overlayElement = null;

      this.invalidate = function(RECORD) {
      },
      
      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.commands == 'object') { 
          for(var i=0;i<rec.commands.length;i++) {
            if (typeof rec.commands[i] == 'object') {
              //console.log(rec.commands[i]);

              if (typeof rec.commands[i].mod == 'string') {
                that.mod(rec.commands[i]);
              }
              if (typeof rec.commands[i].template == 'string') {
                that.template(rec.commands[i]);
              }
              if (typeof rec.commands[i].open == 'boolean') {
                that.open(rec.commands[i]);
              }

            }
          }
        };

      },

      this.template = function(cmd) {
        cmd.element = that.element;
        that.pluggable.trigger(cmd);
      },

      this.open = function(cmd) {
        //console.log('OPEN DIALOG', cmd);
        if (cmd.open) {
          $(that.element).addClass('active');
        } else {
          $(that.element).removeClass('active').removeClass('max')
          .removeClass('left').removeClass('right').removeClass('top').removeClass('bottom')
          .removeClass('blur').removeClass('overlay');
          if (that.overlayElement) {
            $(that.overlayElement).removeClass('active');
          };
        }
      },

      this.mod = function(cmd) {
        //console.log('OPEN DIALOG', cmd);
        var a = cmd.mod.split(' ');
        for (var i=0;i<a.length;i++) {
          if (a[i] == 'modal') {
            $(that.overlayElement).addClass('active');
          }
          $(that.element).addClass(a[i]);
        };
      },

      this.free = function() {

      },
      
      this.changed = function(ev) {
        
      },

      this.mouseup = function(ev) {

      },

      this.init=function() {
        var a = $(that.element).data('overlay');
        if (typeof a == 'string') that.overlayElement = $('#'+a);
        if (!that.overlayElement) {
          that.overlayElement = $('<div class="overlay blur" ></div>');
          $(that.overlayElement).insertBefore(that.element);
          $(that.element).data('overlay', that.pluggable.getDomId(that.overlayElement));
        };
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
