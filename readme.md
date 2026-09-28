# P5.js: Modbuttons

[Deutsch](README_DE.md)

Shows [Modbuttons](https://github.com/yetyeeter1337/Modbuttons), a simple
and modular button system for p5.js: a custom-drawn button, a stepped
slider and a stepped dial, with their current state printed on the canvas.
Useful for building interfaces that are drawn directly on the canvas
instead of using HTML elements.

## Installation

Requirements: a current browser.

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Hover and press the **INITIALIZE** button, drag the slider and the dial.

To use Modbuttons in another project, copy `libraries/p5.modbuttons.js` and
load it in `index.html` after p5.js and before your sketch:

```html
<script src="./libraries/p5.modbuttons.js"></script>
```

Full documentation: [Modbuttons wiki](https://github.com/yetyeeter1337/Modbuttons/wiki),
online example: [p5.js editor](https://editor.p5js.org/7vector/sketches/7DXk4U_iW).

Libraries (in `libraries/`): p5.js 1.10.0, p5.modbuttons.js (Modbuttons
V2 by 7vector), p5.sound 1.0.1 (included, not loaded).

## Coding Help

- **`sketch.js` → top level**: the widgets are created outside of
  `setup()` and configured through their properties:
  - `new Dial(continuous, x, y)` – `radius`, `segments` (steps; 0 =
    smooth), `minAngle` / `maxAngle` (ignored when `continuous` is true).
  - `new Slider(type, vertical, x, y)` – `type` "box" or "circle",
    `Slength` (track length), `smooth` and `segments`.
  - `new Button(type, x, y)` – `width`, `height`, `fill`, `stroke`,
    `strokeWeight`, plus own properties such as `text` and `textSize`.
- **Custom look and behaviour**: override `render()` to draw the widget
  yourself (as done for the button) and the event hooks `onHoverBegin()`,
  `onHoverEnd()`, `onPressBegin()`, `onPressEnd()` (also `onHover()`,
  `onPress()`, `onValueChange()`).
- **`draw()`**: only draws the background and reads the state:
  `testButton.pressed`, `testButton.hover`, `testSlider.value`,
  `testDial.value`. The widgets update and draw themselves after `draw()`
  through a p5 `post` hook in the library.
- **`libraries/p5.modbuttons.js`**: besides the classes it offers
  `disableAllButtons()`, `saveButtonStatus()` / `loadButtonStatus()` and
  `enable()` / `disable()` per widget. `Dial` switches p5 to
  `angleMode(DEGREES)` globally.
