import TransactionService from "../service/TransactionService";
import Transaction from "../model/Transaction";

export default class TransactionController {
  
  constructor(private service: TransactionService) {}

  public cadastrar(transaction: Transaction): void {
    this.service.adicionar(transaction);
  }

  public listar(): Transaction[] {
    return this.service.listar();
  }

  public saldo(): number {
    return this.service.calcularSaldo();
  }
}