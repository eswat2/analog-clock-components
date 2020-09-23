# analog-clock



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `timezone` | `timezone` |             | `boolean` | `undefined` |


## Dependencies

### Depends on

- [clock-face](../clock-face)
- [time-zone-slider](../time-zone-slider)

### Graph
```mermaid
graph TD;
  analog-clock --> clock-face
  analog-clock --> time-zone-slider
  time-zone-slider --> ion-range
  style analog-clock fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
