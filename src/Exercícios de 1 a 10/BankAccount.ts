class BankAccount {
  balance: number;
  owner: string;

  constructor(owner: string, initialBalance: number = 0) {
      this.owner = owner;
      this.balance = initialBalance;
  }

  deposit(amount: number): void {
      if (amount > 0) {
          this.balance += amount;
          console.log(`Depósito de ${amount} realizado. Novo saldo: ${this.balance += amount}`);
      } else {
          console.log("O valor do depósito deve ser maior que zero.");
      }
  }

  withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`Saque de ${amount} realizado. Novo saldo: ${this.balance}`);
      } else if (amount > this.balance) {
          console.log("Saldo insuficiente para realizar o saque.");
      } else {
          console.log("O valor do saque deve ser maior que zero.");
      }
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(1500);
account.deposit(-100); 

console.log(`Titular da conta: ${account.owner}`);
console.log(`Saldo atual: ${account.balance}`);
