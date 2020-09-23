import { Component, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
})
export class AnalogClock {
  render() {
    return [
      <div>
        <clock-face />
      </div>,
    ];
  }
}
