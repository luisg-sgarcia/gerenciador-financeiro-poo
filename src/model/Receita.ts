import Transaction from "./Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class Receita extends Transaction {
  
  constructor(descricao: string, valor: number) {
    super(descricao, valor, TransactionType.RECEITA);
  }

  public calcularImpacto(): number {
    return this.valor;
  }
}