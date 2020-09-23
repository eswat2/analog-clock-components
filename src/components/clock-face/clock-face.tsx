<script src="https://gist.github.com/leetheguy/8d3e5686ca097353d1fdf09ee1bbdc33.js"></script>;

import { Component, h } from '@stencil/core';

@Component({
  tag: 'clock-face',
})
export class ClockFace {
  render() {
    return (
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" stroke-width="10px" stroke="black" fill="transparent" />
        <line id="hour-hand" x1="100" y1="100" x2="100" y2="60" stroke="black" stroke-width="10" stroke-linecap="round" />
        <line id="minute-hand" x1="100" y1="100" x2="100" y2="30" stroke="black" stroke-width="8" stroke-linecap="round" />
        <line id="second-hand" x1="100" y1="100" x2="100" y2="30" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>
    );
  }
}
