import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
})
export class AnalogClock {
  @Prop({ attribute: 'time-zone' }) timeZone: number = 0;
  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 250);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  get hour(): number {
    return new Date(this.time).getHours();
  }

  get minute(): number {
    return new Date(this.time).getMinutes();
  }

  get second(): number {
    return new Date(this.time).getSeconds();
  }

  render() {
    return <clock-face id="clock" hour={this.hour + this.timeZone} minute={this.minute} second={this.second} />;
  }
}
