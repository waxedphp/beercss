
;(function ( $, window, document, undefined ) {

    var pluginName = 'beer-expansion',
        _search = '.waxed-beer-expansion',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    const expandCollapseLabels = {
      en: {
        more: { label: 'More', text: 'Show more', icon: '▼' },
        less: { label: 'Less', text: 'Show less', icon: '▲' }
      },
      sk: {
        more: { label: 'Viac', text: 'Zobraziť viac', icon: '▼' },
        less: { label: 'Menej', text: 'Zobraziť menej', icon: '▲' }
      },
      pl: {
        more: { label: 'Więcej', text: 'Pokaż więcej', icon: '▼' },
        less: { label: 'Mniej', text: 'Pokaż mniej', icon: '▲' }
      },
      hu: {
        more: { label: 'Több', text: 'Több megjelenítése', icon: '▼' },
        less: { label: 'Kevesebb', text: 'Kevesebb megjelenítése', icon: '▲' }
      },
      uk: {
        more: { label: 'Більше', text: 'Показати більше', icon: '▼' },
        less: { label: 'Менше', text: 'Показати менше', icon: '▲' }
      }
    };

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

      },

      this.free = function() {

      },

      this.init=function() {

        $(that.element).find('p').each(function(i,a){
          if (i==0) {
            this.moreLabel = $('<span class="waxed-more-label" >▼ </span>').prependTo(a);
            this.lessLabel = $('<span class="waxed-less-label" >▲ </span>').prependTo(a);

            $(a).wrap('<summary></summary>');
          };
          //console.log(i,a);
        });
        $(that.element).wrapInner('<details></details>');



        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
