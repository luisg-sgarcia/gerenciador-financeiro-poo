import Transaction from "./Transaction";
import { TransactionType } from "../enums/TransactionType";

export default class Outflow extends Transaction {
  
  constructor(description: string, amount: number) {
    super(description, amount, TransactionType.OUTFLOW);
  }

  public calculateImpact(): number {
    return -this.amount;
  }
}