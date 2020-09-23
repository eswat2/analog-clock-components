import { Component, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'analog-clock',
})
export class AnalogClock {
  timer: number;

  @State() time: number = Date.now();
  @State() timeZone: number = 0;
  @Listen('timeZoneChanged')
  timeZoneChangedHandler(event: CustomEvent) {
    this.timeZone = event.detail;
  }

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
    return (
      <div>
        <clock-face hour={this.hour + this.timeZone} minute={this.minute} second={this.second} />
        <time-zone-slider offset={this.timeZone} />
      </div>
    );
  }
}
