import IRepository from "../interfaces/IRepository";
import Transaction from "../model/Transaction";

export default class Database implements IRepository<Transaction> {
  private transactions: Transaction[] = [];

  public save(item: Transaction): void {
    this.transactions.push(item);
  }

  public getAll(): Transaction[] {
    return this.transactions;
  }

  public search(indice: number): Transaction | undefined;

  public search(descricao: string): Transaction[];

  public search(valor: any): any {
    if (typeof valor === "number") {
      return this.transactions[valor];
    }

    return this.transactions.filter((item) =>
      item.getDescription().toLowerCase().includes(valor.toLowerCase()),
    );
  }
}