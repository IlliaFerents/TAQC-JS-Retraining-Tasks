/*
Write class Marker that describes a simple marker. The instances of this class should have the following components:

Private field that stores the color of the marker and only getter color for this field, we set color by parameter in constructor.
Private field that stores the amount of ink in the marker (in percentage), marker creating with 100% of ink and only getter ink for this field.
Public method print(text) that call console.log with letters from text one by one, and write in console as long as there is ink in the marker; one non-whitespace character is 10% of the ink in the marker.

Implement a class that describes a RefillableMarker inherited from a Marker and adding a method refill which add ink to 100%.
*/

class Marker {
  #inkAmount = 100;
  #color;

  constructor(color) {
    this.#color = color;
  }

  getColor() {
    return this.#color;
  }

  getInkAmount() {
    return `${this.#inkAmount}%`;
  }

  print(text) {
    for (let letter of text) {
      if (letter !== " " && this.#inkAmount > 0) {
        console.log(letter);
        this.#inkAmount -= 10;
      }
    }

    if (!this.#inkAmount) {
      console.log("Out of ink!");
    }
  }
}

const blueMarker = new Marker("blue");

console.log(blueMarker.getColor()); // blue
console.log(blueMarker.getInkAmount()); // 100%

blueMarker.print("Abc    d"); // A, b, c, d
console.log(blueMarker.getInkAmount()); // 60%

class RefillableMarker extends Marker {
  #inkAmount;

  refill() {
    this.#inkAmount = 100;
  }
}

const refillableMarker = new RefillableMarker("green");
console.log(refillableMarker.getColor()); // green
console.log(refillableMarker.getInkAmount()); // 100%

refillableMarker.print("Hello");
console.log(refillableMarker.getInkAmount()); // 50%

refillableMarker.refill();
console.log(refillableMarker.getInkAmount()); //? 50%
