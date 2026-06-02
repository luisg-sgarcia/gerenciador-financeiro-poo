import { TransactionType } from "../enums/TransactionType";
export default abstract class Transaction {

  constructor(
    protected descricao: string,
    protected valor: number,
    protected tipo: TransactionType,
  ) {}

  public getDescricao(): string {
    return this.descricao;
  }

  public getValor(): number {
    return this.valor;
  }

  public getTipo(): TransactionType {
    return this.tipo;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public setValor(valor: number): void {
    this.valor = valor;
  }

  public abstract calcularImpacto(): number;

}