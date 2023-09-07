class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }

  calculateTotalValue(): number {
      return this.price * this.quantity;
  }

  getProductDetails(): string {
      return `Nome: ${this.name}, Preço: ${this.price}, Quantidade: ${this.quantity}, Valor Total: ${this.calculateTotalValue()}`;
  }
}

const product1 = new Product("Camiseta", 20.0, 3);
const productDetails = product1.getProductDetails();

console.log(productDetails);
