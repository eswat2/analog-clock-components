/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnalogClock {
    }
    interface ClockFace {
        "hour": number;
        "minute": number;
        "second": number;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAnalogClockElement extends Components.AnalogClock, HTMLStencilElement {
    }
    var HTMLAnalogClockElement: {
        prototype: HTMLAnalogClockElement;
        new (): HTMLAnalogClockElement;
    };
    interface HTMLClockFaceElement extends Components.ClockFace, HTMLStencilElement {
    }
    var HTMLClockFaceElement: {
        prototype: HTMLClockFaceElement;
        new (): HTMLClockFaceElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "analog-clock": HTMLAnalogClockElement;
        "clock-face": HTMLClockFaceElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AnalogClock {
    }
    interface ClockFace {
        "hour"?: number;
        "minute"?: number;
        "second"?: number;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "analog-clock": AnalogClock;
        "clock-face": ClockFace;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "analog-clock": LocalJSX.AnalogClock & JSXBase.HTMLAttributes<HTMLAnalogClockElement>;
            "clock-face": LocalJSX.ClockFace & JSXBase.HTMLAttributes<HTMLClockFaceElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
