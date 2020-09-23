import { Component, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
})
export class AnalogClock {
  get hour(): number {
    let h: any = new Date().getHours();
    return h;
  }

  get minute(): number {
    let m: any = new Date().getMinutes();
    return m;
  }

  get second(): number {
    let s: any = new Date().getSeconds();
    return s;
  }

  render() {
    return (
      <div>
        <clock-face hour={this.hour} minute={this.minute} second={this.second} />
      </div>
    );
  }
}
