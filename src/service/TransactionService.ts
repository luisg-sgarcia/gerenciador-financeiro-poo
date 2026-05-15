import Database from "../database/Database";
import Transaction from "../model/Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class TransactionService {

  constructor(private database: Database) {}

  public adicionar(transaction: Transaction): void {
    if (transaction.getValor() <= 0) {
      throw new Error("Valor inválido");
    }

    if (transaction.getDescricao().length < 3) {
      throw new Error("Descrição inválida");
    }

    // VERIFICAÇÃO DE SALDO

    if (transaction.getTipo() === TransactionType.DESPESA) {
      const saldoAtual = this.calcularSaldo();

      if (transaction.getValor() > saldoAtual) {
        throw new Error("Saldo insuficiente");
      }
    }

    this.database.salvar(transaction);
  }

  public listar(): Transaction[] {
    return this.database.listarTodos();
  }

  public calcularSaldo(): number {
    return this.database
      .listarTodos()
      .reduce((total, item) => total + item.calcularImpacto(), 0);
  }
}