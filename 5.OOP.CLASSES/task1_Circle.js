/*
Write class Circle with next functional:

The constructor takes as input center point {x:number, y:number} and radius.
Method getLength for obtain length of circle (L = 2 * Pi * R).
Static method getLengthFromRadius for obtain length of circle with corresponding radius r (L = 2 * Pi * r).
Method getCopy which return copy of this object.
Static method createCircle(x, y, r) which obtain as input x, y - coordinates of center and r - circle radius, create and return new Circle with this parameters.
Method checkPointInside(point) which obtain as parametes point = {x:namber, y:number} and return bollean response of whether the point is inside the circle.
Override method toString to return description of circle object as string as in examples.
*/

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  static getLengthFromRadius(radius) {
    return (2 * Math.PI * radius).toFixed(2);
  }

  static createCircle(x, y, r) {
    return new Circle({ x, y }, r);
  }

  getLength() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  checkPointInside(point) {
    return (
      (point.x - this.center.x) ** 2 + (point.y - this.center.y) ** 2 <=
      this.radius ** 2
    );
  }

  toString() {
    return `Circle with center at (${this.center.x}, ${this.center.y}) and radius ${this.radius}`;
  }
}

const circle = new Circle({ x: 0, y: 0 }, 6);
const circleCopy = circle.getCopy();

console.log(circle.getLength()); // 37.70
console.log(Circle.getLengthFromRadius(6)); // 37.70

console.log(circleCopy); // Circle { center: { x: 0, y: 0 }, radius: 6 }

console.log(Circle.createCircle(1, 1, 8)); // Circle { center: { x: 1, y: 1 }, radius: 8 }

console.log(circle.checkPointInside({ x: 4, y: 4 })); // true
console.log(circle.checkPointInside({ x: 5, y: 4 })); // false

console.log(circle.toString()); // Circle with center at (0, 0) and radius 6
