import IRepository from "../interfaces/IRepository";
import Transaction from "../model/Transaction";

export default class Database implements IRepository<Transaction> {
  private transactions: Transaction[] = [];

  public salvar(item: Transaction): void {
    this.transactions.push(item);
  }

  public listarTodos(): Transaction[] {
    return this.transactions;
  }

  public buscar(indice: number): Transaction | undefined;

  public buscar(descricao: string): Transaction[];

  public buscar(valor: any): any {
    if (typeof valor === "number") {
      return this.transactions[valor];
    }

    return this.transactions.filter((item) =>
      item.getDescricao().toLowerCase().includes(valor.toLowerCase()),
    );
  }
}