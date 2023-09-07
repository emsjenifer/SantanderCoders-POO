class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
  }

  calculateArea(): number {
      return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(8, 12);
const area3 = rectangle1.calculateArea();
const area4 = rectangle2.calculateArea();

console.log("Área do retângulo 1:", area3);
console.log("Área do retângulo 2:", area4);
