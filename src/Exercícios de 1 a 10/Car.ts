class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  getDescription(): string {
      return `Carro: ${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Camry", 2022);
const carDescription = myCar.getDescription();

console.log(carDescription);
