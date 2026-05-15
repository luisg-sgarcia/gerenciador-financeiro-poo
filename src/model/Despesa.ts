import Transaction from "./Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class Despesa extends Transaction {
  
  constructor(descricao: string, valor: number) {
    super(descricao, valor, TransactionType.DESPESA);
  }

  public calcularImpacto(): number {
    return -this.valor;
  }
}