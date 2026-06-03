import promptSync from "prompt-sync";
import chalk from "chalk";
import Inflow from "../model/Inflow";
import Outflow from "../model/Outflow";
import TransactionController from "../controller/TransactionController";
const prompt = promptSync();
export default class ConsoleView {
  constructor(private controller: TransactionController) {}

  public start(): void {
    let option: number;

    do {
      console.clear();

      console.log(
        chalk.blue(`
=== GERENCIADOR FINANCEIRO ===
1 - Adicionar Receita
2 - Adicionar Despesa
3 - Listar Transações
4 - Ver Saldo
5 - Buscar Transacão
0 - Sair`),
        );

      option = Number(prompt("Escolha: "));

      switch (option) {
        case 1:
          this.addInflow();
          break;

        case 2:
          this.addOutflow();
          break;

        case 3:
          this.list();
          break;

        case 4:
          this.showBalance();
          break;

        case 5:
          this.searchTransaction();
          break;

        case 0:
          console.log(chalk.yellow("Saindo..."));
          break;

        default:
          console.log(chalk.red("Opção inválida"));
      }

      prompt("\nPressione ENTER...");
    } while (option !== 0);
  }

  private addInflow(): void {
    try {
      const description = prompt("Descrição: ");
      const rawAmount = prompt("Valor: ");

      if (!rawAmount.trim() || isNaN(Number(rawAmount.replace(",", ".")))){
        throw new Error("O valor inserido deve ser um número valido!");
      }

      const amount = Number(rawAmount.replace(",", "."));
      const inflow = new Inflow(description, amount);

      this.controller.addTransaction(inflow);

      console.log(chalk.green("Receita cadastrada!"));
    } catch (error: any) {
      console.log(chalk.red(error.message));
    }
  }

  private addOutflow(): void {
    try {
      const description = prompt("Descrição: ");
      const rawAmount = prompt("Valor: ");

      if (!rawAmount.trim() || isNaN(Number(rawAmount.replace(",", ".")))){
        throw new Error("O valor inserido deve ser um número valido!");
      }

      const amount = Number(rawAmount.replace(",", "."))      
      const outflow = new Outflow(description, amount);

      this.controller.addTransaction(outflow);

      console.log(chalk.green("Despesa cadastrada!"));
    } catch (error: any) {
      console.log(chalk.red(error.message));
    }
  }

  private list(): void {
    const transactions = this.controller.list();

    console.log(chalk.cyan("\n=== TRANSAÇÕES ===\n"));

    if (transactions.length === 0) {
      console.log(chalk.red("Nenhuma transação cadastrada."));

      return;
    }

    console.log(
      "ID".padEnd(5) + "DESCRIÇÃO".padEnd(20) + "VALOR".padEnd(15) + "TIPO",
    );

    console.log("-".repeat(50));

    transactions.forEach((item, index) => {
      console.log(
        String(index + 1).padEnd(5) +
          item.getDescription().padEnd(20) +
          `R$ ${item.getAmount().toFixed(2)}`.padEnd(15) +
          item.getType(),
      );
    });
  }
  private showBalance(): void {
    const balance = this.controller.showBalance().toFixed(2);

    console.log(chalk.yellow(`Saldo Atual: R$ ${balance}`));
  }

  private searchTransaction(): void {
    const term = prompt("Descrição para buscar: ");
    
    const results = this.controller.search(term);

    if (results.length === 0) {
      console.log(chalk.yellow("Nenhuma transação encontrada com esse termo."));
      return;
    }

    console.log(chalk.cyan("\n=== RESULTADO DA BUSCA ==="));
    console.log(
      "ID".padEnd(5) + "DESCRIÇÃO".padEnd(20) + "VALOR".padEnd(15) + "TIPO"
    );
    console.log("-".repeat(50));

    results.forEach((item: any, index: number) => {
      console.log(
        String(index + 1).padEnd(5) +
        item.getDescription().padEnd(20) +
        "R$ " + (item.getAmount().toFixed(2)).padEnd(11) +
        item.getType()
      );
    });
  }
}