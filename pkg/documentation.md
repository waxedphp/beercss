# Beer CSS

Build material design in record time without stress for devs.

[https://www.beercss.com/]

MIT license

---
### PHP:

```php
use \Waxedphp\Beercss\SlideSetter as BeerSlide;
use \Waxedphp\Beercss\SwitchesSetter as BeerSwitches;
use \Waxedphp\Beercss\RadiosSetter as BeerRadios;
use \Waxedphp\Beercss\TabsSetter as BeerTabs;

$tabs = new BeerTabs($this->waxed);
$switches = new BeerSwitches($this->waxed);
$radios = new BeerRadios($this->waxed);
$slide = new BeerSlide($this->waxed);

$this->waxed->pick('section1')->display([
  'mixpult1' => [
    ['channelVolume' => $slide->value(70), 
     'radios' => $radios->value('a'),
     'switches' => $switches->value(1|2)],
    ['channelVolume' => $slide->value(72),
     'radios' => $radios->value('b'),
     'switches' => $switches->value(1|4)],
    ['channelVolume' => $slide->value(75),
     'radios' => $radios->value('c'),
     'switches' => $switches->value(1|2|4)],
    ['channelVolume' => $slide->value(75),
     'radios' => $radios->value('a'),
     'switches' => $switches->value(4)],
    ['channelVolume' => $slide->value(70),
     'radios' => $radios->value('b'),
     'switches' => $switches->value(1|2)],
    ['channelVolume' => $slide->value(71),
     'radios' => $radios->value('c'),
     'switches' => $switches->value(1|2)],
    ['channelVolume' => $slide->value(69),
     'radios' => $radios->value('a'),
     'switches' => $switches->value(1|2)],
    ['channelVolume' => $slide->value(70),
     'radios' => $radios->value('b'),
     'switches' => $switches->value(1|2)],
    ['channelVolume' => $slide->value(72),
     'radios' => $radios->value('a'),
     'switches' => $switches->value(1|2)],
     // ...
  ],
  'tabs' =>  $tabs->value(0),
], 'template');


```


---

### HTML:

```html

<div class="grid equalizer" style="margin-top:50px;margin-bottom:50px;" >
  <div class="s12">
    <div class="waxed-beer-tabs" 
      data-url="{{:ajax}}" data-action="changed" data-name="tabs" >
      <div class="tabs min right-align">
        <a class="vertical active">Panel 1</a>
        <a class="vertical">Panel 2</a>
        <a class="vertical">Panel 3</a>
      </div>
      <div class="page padding right active">
        <h5>Panel 1</h5>

        <div class="grid equalizer">
          {{#mixpult1}}
          <div class="s1">
            {{$$}}
            <hr>
            {{@path}}
            <hr>
            <article class="small-width small-height round">
              <label class="slider max vertical waxed-beer-slider" 
                data-name="{{@path}}.channelVolume" data-url="{{:ajax}}"
                data-action="changed" >
                <input type="range" value="30" 
                  max="100" name="channelvolume[{{$}}]" >
                <span></span>
              </label>
            </article>
            <hr>
            <!--[]-->
            <div class="waxed-beer-radios" data-name="{{@path}}.radios" 
              data-url="{{:ajax}}" data-action="changed" >
              <label class="radio icon">
                <input type="radio" name="radio[{{@path}}]" value="a" >
                <span>
                  <i>close</i>
                  <i>done</i>
                </span>
                <span>A</span>
              </label>
              <label class="radio icon">
                <input type="radio" name="radio[{{@path}}]" value="b" >
                <span>
                  <i>close</i>
                  <i>done</i>
                </span>
                <span>B</span>
              </label>
              <label class="radio icon">
                <input type="radio" name="radio[{{@path}}]" value="c" >
                <span>
                  <i>close</i>
                  <i>done</i>
                </span>
                <span>C</span>
              </label>
            </div>    
            <hr>
            <!--[]-->
            <div class="waxed-beer-switches" data-name="{{@path}}.switches" 
              data-url="{{:ajax}}" data-action="changed" >
              <button 
                class="border small-round large-elevate vertical tertiary-border small responsive" 
                value="1" >
                <i>home</i>
                <span>Button</span>
              </button>
              <hr>
              <!--[]-->
              <label class="switch icon" >
                <input type="checkbox" value="2">
                <span>
                  <i>wifi</i>
                </span>
              </label>
              <hr>
              <!--[]-->
              <button 
                class="border small-round large-elevate vertical tertiary-border small responsive" 
                value="4" >
                <i>home</i>
                <span>Button</span>
              </button>
              <hr>
            </div>
            <!--[]-->
          </div>
          {{/mixpult1}}
        </div>

      </div>
      <div class="page padding right">
        <h5>Panel 2</h5>


      </div>
      <div class="page padding right">
        <h5>Panel 3</h5>

      </div>
    </div>
  </div>
</div>


```

---
---

### PHP methods:

```php
use \Waxedphp\Beercss\TabsSetter as Tabs;

$obj = new Tabs($this->waxed);

$obj->value(0);
// switch to tab 1


```

```php
use \Waxedphp\Beercss\SlideSetter as Slide;

$obj = new Slide($this->waxed);

$obj->value(50);
// slide to 50%

$obj->value([20,50]);
// slide double to range between 20% and 50%

```

```php
use \Waxedphp\Beercss\SwitchesSetter as Switches;

$obj = new Switches($this->waxed);

$obj->value(1|2|8);
// Switch on bitwise buttons with values 1, 2 and 8

```

```php
use \Waxedphp\Beercss\RadiosSetter as Radios;

$obj = new Radios($this->waxed);

$obj->value('b');
// Switch on radios to value 'b'

```
