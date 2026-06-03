import Database from "../database/Database";
import Transaction from "../model/Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class TransactionService {

  constructor(private database: Database) {}

  public addTransaction(transaction: Transaction): void {
    if (isNaN(transaction.getAmount())){
      throw new Error("Apenas números são validos!");
    }

    if (transaction.getAmount() <= 0) {
      throw new Error("Valores negativos não são validos!");
    }

    if (transaction.getDescription().length < 3) {
      throw new Error("Descrição inválida");
    }

    // VERIFICAÇÃO DE SALDO

    if (transaction.getType() === TransactionType.OUTFLOW) {
      const saldoAtual = this.calculateBalance();

      if (transaction.getAmount() > saldoAtual) {
        throw new Error("Saldo insuficiente");
      }
    }

    this.database.save(transaction);
  }

  public getAll(): Transaction[] {
    return this.database.getAll();
  }

  public calculateBalance(): number {
    return this.database
      .getAll()
      .reduce((total, item) => total + item.calculateImpact(), 0);
  }

  public search(termo: string): any {
    return this.database.search(termo);
  }
}