import promptSync from "prompt-sync";
import chalk from "chalk";
import Receita from "../model/Receita";
import Despesa from "../model/Despesa";
import TransactionController from "../controller/TransactionController";
const prompt = promptSync();
export default class ConsoleView {
  constructor(private controller: TransactionController) {}

  public iniciar(): void {
    let opcao: number;

    do {
      console.clear();

      console.log(
        chalk.blue(`
=== GERENCIADOR FINANCEIRO ===
1 - Adicionar Receita
2 - Adicionar Despesa
3 - Listar Transações
4 - Ver Saldo
0 - Sair`),
        );

      opcao = Number(prompt("Escolha: "));

      switch (opcao) {
        case 1:
          this.adicionarReceita();
          break;

        case 2:
          this.adicionarDespesa();
          break;

        case 3:
          this.listar();
          break;

        case 4:
          this.mostrarSaldo();
          break;

        case 0:
          console.log(chalk.yellow("Saindo..."));
          break;

        default:
          console.log(chalk.red("Opção inválida"));
      }

      prompt("\nPressione ENTER...");
    } while (opcao !== 0);
  }

  private adicionarReceita(): void {
    try {
      const descricao = prompt("Descrição: ");

      const valor = Number(prompt("Valor: ").replace(",", "."));

      const receita = new Receita(descricao, valor);

      this.controller.cadastrar(receita);

      console.log(chalk.green("Receita cadastrada!"));
    } catch (error: any) {
      console.log(chalk.red(error.message));
    }
  }

  private adicionarDespesa(): void {
    try {
      const descricao = prompt("Descrição: ");

      const valor = Number(prompt("Valor: ").replace(",", "."));

      const despesa = new Despesa(descricao, valor);

      this.controller.cadastrar(despesa);

      console.log(chalk.green("Despesa cadastrada!"));
    } catch (error: any) {
      console.log(chalk.red(error.message));
    }
  }

  private listar(): void {
    const transacoes = this.controller.listar();

    console.log(chalk.cyan("\n=== TRANSAÇÕES ===\n"));

    if (transacoes.length === 0) {
      console.log(chalk.red("Nenhuma transação cadastrada."));

      return;
    }

    console.log(
      "ID".padEnd(5) + "DESCRIÇÃO".padEnd(20) + "VALOR".padEnd(15) + "TIPO",
    );

    console.log("-".repeat(50));

    transacoes.forEach((item, index) => {
      console.log(
        String(index + 1).padEnd(5) +
          item.getDescricao().padEnd(20) +
          `R$ ${item.getValor().toFixed(2)}`.padEnd(15) +
          item.getTipo(),
      );
    });
  }
  private mostrarSaldo(): void {
    const saldo = this.controller.saldo().toFixed(2);

    console.log(chalk.yellow(`Saldo Atual: R$ ${saldo}`));
  }
}
