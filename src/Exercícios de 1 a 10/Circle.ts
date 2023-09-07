class Circle {
  radius: number;

  constructor(radius: number) {
      this.radius = radius;
  }

  calculateArea(): number {
      return Math.PI * this.radius * this.radius;
  }
}

// Instanciando objetos da classe Circle
const circle1 = new Circle(5);
const circle2 = new Circle(3);

// Calculando a área dos círculos
const area1 = circle1.calculateArea();
const area2 = circle2.calculateArea();

console.log("Área do círculo 1:", area1);
console.log("Área do círculo 2:", area2);