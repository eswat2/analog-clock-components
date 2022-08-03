import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
  styleUrl: 'analog-clock.css',
  shadow: true,
})
export class AnalogClock {
  @Prop() size: number = undefined;
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

  hourToDegrees(): number {
    const hour = this.hour + this.timeZone;
    return Math.floor(this.minute / 2) + hour * 30;
  }

  minuteToDegrees(): number {
    return Math.floor(this.second / 10) + this.minute * 6;
  }

  secondToDegrees(): number {
    return this.second * 6;
  }

  render() {
    return (
      <svg class="clock" viewBox="0 0 200 200" width={this.size} height={this.size}>
        <circle id="circle" cx="100" cy="100" r="95" stroke-width="10" fill="transparent" />
        <line id="hour" transform={`rotate(${this.hourToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="60" stroke-width="10" stroke-linecap="round" />
        <line id="minute" transform={`rotate(${this.minuteToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="30" stroke-width="8" stroke-linecap="round" />
        <line id="second" transform={`rotate(${this.secondToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="20" stroke-width="2" stroke-linecap="round" />
      </svg>
    );
  }
}
