// Caminho: src/service/TransactionService.ts

import Database from "../database/Database";
import Transaction from "../model/Transaction";
import { TransactionType } from "../enums/TransactionType";
import TransactionError from "../exceptions/TransactionError"; // Importação nova!

export default class TransactionService {

  constructor(private database: Database) {}

  public addTransaction(transaction: Transaction): void {
    if (isNaN(transaction.getAmount())){
      throw new TransactionError("Apenas números são válidos!"); // Usando o erro personalizado
    }

    if (transaction.getAmount() <= 0) {
      throw new TransactionError("Valores negativos não são válidos!"); // Usando o erro personalizado
    }

    if (transaction.getDescription().length < 3) {
      throw new TransactionError("Descrição inválida"); // Usando o erro personalizado
    }

    if (transaction.getType() === TransactionType.OUTFLOW) {
      const saldoAtual = this.calculateBalance();

      if (transaction.getAmount() > saldoAtual) {
        throw new TransactionError("Saldo insuficiente"); // Usando o erro personalizado
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