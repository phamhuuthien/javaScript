function square(width) {
  var squareObject = {};

  squareObject.getArea = function () {
    if (width > 0) return width * width;
  };

  return squareObject;
}

function cube(width) {
  var cubeObject = square(width);
  var squareArea = cubeObject.getArea;

  cubeObject.getVolume = function () {
    if (width > 0) return squareArea() * width;
  };

  cubeObject.getArea = function () {
    if (width > 0) return squareArea() * 6;
  };

  return cubeObject;
}

// console.log(cube(5).getVolume());
// console.log(cube(5).getArea());

function Rect(x, y, w, h) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
}
var rect = new Rect(5, 5, 1, 1);

// console.log(rect.constructor.name + " " + rect.w);
// console.log(rect.constructor.prototype);
