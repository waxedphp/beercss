
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

        that.threshold = 1;
        if (typeof that.dd.cnt == 'number') {
          that.threshold = that.dd.cnt;
        }

        //console.log('EXPANSION!');
        if (typeof that.dd.img == 'number') {
          var imb = $(that.element).closest('.waxed-beer-expansion-box');
          var ime = $(imb).find('.waxed-beer-expansion-img')[0];
          console.log(ime);

          var im = $(that.element).find('img');
          $(im).each(function(i,a){
            var p = $(a).parent();
            $(a).detach().appendTo(ime).addClass('responsive');
            if ($(p).is(':empty')) {
              $(p).detach();
            }
          });
        };

        if (typeof that.dd.tag == 'number') {
          var imb = $(that.element).closest('.waxed-beer-expansion-box');
          var ime = $(imb).find('.waxed-beer-expansion-tag')[0];
          console.log(ime);

          var ul = $(that.element).find('ul');
          ul = ul[ul.length-1];

          var li = $(ul).find('li');
          var s = '';
          $(li).each(function(i,a){
            s = s+$(a).text()+' ';
            var span = $('<span>').appendTo(ime);
            $(span).text($(a).text());
            $(a).detach();

          });
          $(ul).detach();
          $(imb).data('cat', s);
          //$(ime).text(s);
        };

        var ee = $(that.element).find('h1, h2, h3, h4, p');
        var len = ee.length;
        if (len>that.threshold) {

          var sum = $('<summary></summary>').prependTo(that.element);

          $(ee).each(function(i,a){
            //console.log(ee);
            if (i==(that.threshold-1)) {
              this.moreLabel = $('<span class="waxed-more-label" > ▼ </span>').appendTo(a);
              this.lessLabel = $('<span class="waxed-less-label" > ▲ </span>').appendTo(a);
            };
            if (i==(len-1)) {
              //this.lessLabel2 = $('<span class="waxed-less-label" > ▲ </span>').appendTo(a);
            };
            if (i<that.threshold) {
              $(a).detach().appendTo(sum);
            };


            //console.log(i,a);
          });
          $(that.element).wrapInner('<details></details>');

        };


        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
