class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  saudacao(): void {
    console.log(`Olá, meu nome é ${this.name}!`);
}
}

const person1 = new Person("Emily", 28);
const person2 = new Person("Gustavo", 25);
const person3 = new Person("Henrique", 35);

person1.saudacao();
person2.saudacao();
person3.saudacao();
