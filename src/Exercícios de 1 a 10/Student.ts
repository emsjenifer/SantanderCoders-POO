class Student {
  name: string;
  grades: number[];

  constructor(name: string, grades: number[]) {
      this.name = name;
      this.grades = grades;
  }

  calculateAverageGrade(): number {
      if (this.grades.length === 0) {
          return 0;
      }

      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return total / this.grades.length;
  }
}

const student1 = new Student("Alice", [85, 90, 78, 92, 88]);
const averageGrade = student1.calculateAverageGrade();

console.log(`Nome do estudante: ${student1.name}`);
console.log(`Notas do estudante: ${student1.grades.join(', ')}`);
console.log(`Média das notas: ${averageGrade}`);
