import TransactionService from "../service/TransactionService";
import Transaction from "../model/Transaction";

export default class TransactionController {
  
  constructor(private service: TransactionService) {}

  public addTransaction(transaction: Transaction): void {
    this.service.addTransaction(transaction);
  }

  public list(): Transaction[] {
    return this.service.getAll().sort((a, b) => b.getAmount() - a.getAmount());
  }

  public showBalance(): number {
    return this.service.calculateBalance();
  }

  public search(term: string): any {
    return this.service.search(term);
  }


}