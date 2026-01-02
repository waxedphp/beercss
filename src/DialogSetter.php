<?php
namespace Waxedphp\Beercss;

class DialogSetter extends Setter {

  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];

  private array $commands = [
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

  function open(int $onTime = 0) {
    $cmd = [
      'open' => true,
    ];
    if ($onTime > 0) $cmd['ontime'] = $onTime;
    $this->commands[] = $cmd;
    return $this;
  }

  function close(int $onTime = 0) {
    $cmd = [
      'open' => false,
    ];
    if ($onTime > 0) $cmd['ontime'] = $onTime;
    $this->commands[] = $cmd;
    return $this;
  }

  function dialog(array $data, string $template, int $onTime = 0, string $mod = '') {
    $data['ajax'] = 
    $cmd = [
      'RECORD' => array_merge($this->base->getDefaults(),$data),
      'template' => $this->base->design->getRoute($template),
      'open' => true,
      'action' => 'display',
    ];
    if ($onTime > 0) $cmd['ontime'] = $onTime;
    if ($mod) $cmd['mod'] = $mod;
    $this->commands[] = $cmd;
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
    if (!empty($this->commands)) {
      $a['commands'] = $this->commands;
    };
    return $a;
  }

}
