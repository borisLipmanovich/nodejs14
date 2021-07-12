'use strict';

class ColorFinder {
    static #red = "#ff0000";
    static #green = "#00ff00";
    static #blue = "#0000ff";

    static colorName(name) {
        switch (name) {
            case "red": return ColorFinder.#red;
            case "blue": return ColorFinder.#blue;
            case "green": return ColorFinder.#green;
            default: throw new RangeError("unknown color");
        }
    }
}

console.log(ColorFinder.colorName('red'));
