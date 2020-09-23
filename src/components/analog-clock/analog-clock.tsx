import { Component, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
})
export class AnalogClock {
  render() {
    return [
      <div>
        <clock-face hour={12} minute={34} second={56} />
      </div>,
    ];
  }
}
