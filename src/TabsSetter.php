<?php
namespace Waxedphp\Beercss;

class TabsSetter extends Setter {

  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
  ];

  function setMode($mode) {
    $this->setup['mode'] = $mode;
    return $this;
  }

  function setTheme($theme) {
    $this->setup['theme'] = $theme;
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = null): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      $a['config'] = $b;
    };
    if (!is_null($value)) {
      $a['value'] = $value;
    };
    return $a;
  }

}
