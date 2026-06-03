import { TransactionType } from "../enums/TransactionType";
export default abstract class Transaction {

  constructor(
    protected description: string,
    protected amount: number,
    protected type: TransactionType,
  ) {}

  public getDescription(): string {
    return this.description;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getType(): TransactionType {
    return this.type;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public abstract calculateImpact(): number;

}