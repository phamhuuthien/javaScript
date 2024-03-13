class Pet {
  constructor(name, cry) {
    this.name = name;
    this.cry = cry;
  }
  talk() {
    console.log(this.cry);
  }
  introduce() {
    console.log(`Tôi là ${this.name}`);
  }
}

class Dog extends Pet {
  constructor(name, cry, animals) {
    super(name, cry);
    this.animals = animals;
  }
  isAnimals() {
    console.log(`Tôi là động vật thuộc loài ${this.animals}`);
  }
}

var dog = new Dog("chó mực", "gâu gâu", "chó");
dog.introduce();
dog.talk();
dog.isAnimals();
