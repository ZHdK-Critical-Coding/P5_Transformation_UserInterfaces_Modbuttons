# P5.js: Modbuttons

[English](readme.md)

Zeigt [Modbuttons](https://github.com/yetyeeter1337/Modbuttons), ein
einfaches, modulares Button-System für p5.js: einen selbst gezeichneten
Knopf, einen gestuften Slider und einen gestuften Drehregler; ihr aktueller
Zustand wird auf der Zeichenfläche angezeigt. Nützlich für Oberflächen, die
direkt auf die Zeichenfläche gezeichnet werden statt mit HTML-Elementen.

## Installation

Voraussetzungen: ein aktueller Browser.

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Mit der Maus über den Knopf **INITIALIZE** fahren und ihn drücken,
   Slider und Drehregler ziehen.

Um Modbuttons in einem anderen Projekt zu verwenden,
`libraries/p5.modbuttons.js` kopieren und in `index.html` nach p5.js und
vor dem Sketch laden:

```html
<script src="./libraries/p5.modbuttons.js"></script>
```

Vollständige Dokumentation: [Modbuttons-Wiki](https://github.com/yetyeeter1337/Modbuttons/wiki),
Online-Beispiel: [p5.js-Editor](https://editor.p5js.org/7vector/sketches/7DXk4U_iW).

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.modbuttons.js
(Modbuttons V2 von 7vector), p5.sound 1.0.1 (vorhanden, nicht geladen).

## Coding-Hilfe

- **`sketch.js` → oberste Ebene**: Die Elemente werden ausserhalb von
  `setup()` erstellt und über ihre Eigenschaften konfiguriert:
  - `new Dial(continuous, x, y)` – `radius`, `segments` (Stufen; 0 =
    stufenlos), `minAngle` / `maxAngle` (ignoriert, wenn `continuous` wahr
    ist).
  - `new Slider(type, vertical, x, y)` – `type` "box" oder "circle",
    `Slength` (Länge der Bahn), `smooth` und `segments`.
  - `new Button(type, x, y)` – `width`, `height`, `fill`, `stroke`,
    `strokeWeight` sowie eigene Eigenschaften wie `text` und `textSize`.
- **Eigenes Aussehen und Verhalten**: `render()` überschreiben, um das
  Element selbst zu zeichnen (wie beim Knopf), sowie die Event-Hooks
  `onHoverBegin()`, `onHoverEnd()`, `onPressBegin()`, `onPressEnd()` (auch
  `onHover()`, `onPress()`, `onValueChange()`).
- **`draw()`**: zeichnet nur den Hintergrund und liest den Zustand aus:
  `testButton.pressed`, `testButton.hover`, `testSlider.value`,
  `testDial.value`. Die Elemente aktualisieren und zeichnen sich nach
  `draw()` selbst, über einen p5-`post`-Hook in der Bibliothek.
- **`libraries/p5.modbuttons.js`**: bietet neben den Klassen
  `disableAllButtons()`, `saveButtonStatus()` / `loadButtonStatus()` und
  pro Element `enable()` / `disable()`. `Dial` stellt p5 global auf
  `angleMode(DEGREES)` um.
