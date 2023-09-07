class Employee {
  name: string;
  role: string;
  salary: number;

  constructor(name: string, role: string, salary: number) {
      this.name = name;
      this.role = role;
      this.salary = salary;
  }

  increaseSalary(percent: number): void {
      if (percent > 0) {
          const increaseAmount = (percent / 100) * this.salary;
          this.salary += increaseAmount;
          console.log(`Aumento de salário de ${percent}% aplicado. Novo salário: ${this.salary}`);
      } else {
          console.log("A porcentagem de aumento deve ser maior que zero.");
      }
  }
}

const employee1 = new Employee("Alice", "Desenvolvedora", 50000);
employee1.increaseSalary(10);

console.log(`Nome do funcionário: ${employee1.name}`);
console.log(`Cargo do funcionário: ${employee1.role}`);
console.log(`Salário atual: ${employee1.salary}`);
