class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
      this.title = title;
      this.author = author;
      this.year = year;
  }

  getBookDetails(): string {
      return `Título: ${this.title}, Autor: ${this.author}, Ano: ${this.year}`;
  }
}

const book1 = new Book("Dom Casmurro", "Machado de Assis", 1899);
const bookDetails = book1.getBookDetails();

console.log(bookDetails);