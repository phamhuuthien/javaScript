// bai 1

var student = {
  name: "pham huu thien",
  getName: function () {
    console.log(this.name);
    return this.name;
  },
};

var _deStudent = student.getName();
// bai 2
var person1 = { name: "nhat minh", age: 28 };
var person2 = { name: "huu thien", age: 18 };

sayHello = function () {
  console.log("hello " + this.name);
};
sayGoodbye = function () {
  console.log("goodbye " + this.name);
};

// sayGoodbye()

sayHello.call(person1);
// sayHello.apply(person1);

// bai 3
function step1() {
  console.log(te);
}

function step2() {
  te = 1;
  //   var te = 1;

  step1();
}

var te = " global variable";
step2();

//  bai 4 5
var checkNumericRange = function (value) {
  if (typeof value !== "number") {
    return false;
  } else return value >= this.minimum && value <= this.maximum;
};

var range = { minimum: 10, maximum: 20 };
var range1 = { minimum: 15, maximum: 20 };

var boundCheckNumericRange = checkNumericRange.bind(range);

var boundCheckNumericRange1 = checkNumericRange.bind(range1);

var result = boundCheckNumericRange(12);
var result1 = boundCheckNumericRange1(12);

console.log(result);
console.log(result1);

// bai 6

function add(v1, v2) {
  return v1 + v2;
}
function curriedAdd(v2) {
  return add(5, v2);
}

console.log(curriedAdd(10));

//  bai 7

function fOuter() {
  var x = "hello";

  function fInner() {
    x = "world";
  }

  fInner();
  return x;
}

console.log(fOuter());

// bai 8

function outerF() {
  var x = "word";
  function innerF(val) {
    x = val;
  }
  return innerF;
}

var a = outerF();
console.log(a("hello"));

var registration = {
  class: "Database",
  students: [{ studentId: "001", name: "thien" }],
  clickHandler: function () {
    _this = this;
    this.students.forEach(function (student) {
      console.log(student.name + _this.class);
    });
  },
};

registration.clickHandler();

// code silde 51 code theo class
