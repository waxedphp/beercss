
# DialogSetter

Driving dialog in BeerCss framwork.

Recommended HTML template:

```html

<div id="dialogs" >
  <dialog

    class="waxed-beer-dialog"
    data-name="dialogCommandChannel"

  >
  </dialog>
</div>



```


## Instantiate:

```php

use \Waxedphp\Beercss\DialogSetter as Dialog;

```

Dont forget:

```php

$this->waxed->plugin->uses('base', 'beercss')
->inMethod(__CLASS__, __FUNCTION__);

```

Finally:

```php

$dialog = new Dialog($this->waxed);


```

## Methods:

#### Put template and data inside:

```php

$dataToDisplay = [];
$template = 'skin/settings-dialog';
$onTime = 0;
$modifiers = 'right modal';

$dialog->dialog($dataToDisplay, $template, $onTime, $modifiers);


```

Supported modifiers are:

- 'max',
- 'left',
- 'right',
- 'top',
- 'bottom',
- 'blur',
- 'overlay',
- 'modal'


#### Open it:

```php

$onTime = 0;
$dialog->open($onTime);


```

#### Close it:

```php

$onTime = 0;
$dialog->open($onTime);


```

#### Send it:

Send prepared commands within some load to browser:

```php

$this->waxed->pick('dialogs')->inspire([
  'dialogCommandChannel' => $dialog->value()
]);


```
assuming this is in index HTML template:

```html

<div id="dialogs" >
  <dialog

    class="waxed-beer-dialog"
    data-name="dialogCommandChannel"

  >
  </dialog>
</div>



```

## Beer CSS

Build material design in record time without stress for devs.

[https://www.beercss.com/]

MIT license
