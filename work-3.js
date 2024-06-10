// * Node.js 버전

class Person {
  constructor(YS) {
    this.name = YS;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person('Otto');

otto.introduce();

// * Javascript 버전

const person = (a) => {
  let names = a;
  return `hello, my name is ${names}`;
};

console.log(person('이연승'));
