import Transaction from "./Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class Inflow extends Transaction {
  
  constructor(description: string, amount: number) {
    super(description, amount, TransactionType.INFLOW);
  }

  public calculateImpact(): number {
    return this.amount;
  }
}