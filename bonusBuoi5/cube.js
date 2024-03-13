class square {
  constructor(width) {
    this.width = width;
  }

  getArea() {
    return this.width * this.width;
  }
}
class cube extends square {
  constructor(width) {
    super(width);
  }
  squareArea = this.getArea();
  getVolume() {
    return this.squareArea * this.width;
  }
}

var myCube = new cube(5);
console.log(myCube.getVolume());
