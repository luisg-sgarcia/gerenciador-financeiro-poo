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

  public search(description: string): Transaction[];
  public search(value: number): Transaction[];

  public search(value: any): Transaction[] {
    if (typeof value === "number") {
      return this.transactions.filter(
        (transaction) => transaction.getAmount() === value
      );
    }

    const term = String(value).trim().toLowerCase();
    if (!term) return [];

    return this.transactions.filter((transaction) =>
      transaction.getDescription().toLowerCase().includes(term)
    );
  }

}