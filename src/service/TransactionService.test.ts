import { test, expect } from '@jest/globals';
import TransactionService from "./TransactionService";
import Database from "../database/Database";
import Receita from "../model/Receita";
import Despesa from "../model/Despesa";

// Instanciando igual ao slide do professor:
const database = new Database();
const service = new TransactionService(database);

test("deve lançar erro se o valor da transação for menor ou igual a zero", () => {
  const receitaInvalida = new Receita("Salário", 0);
  
  expect(() => {
    service.adicionar(receitaInvalida);
  }).toThrow("Valor inválido");
});

test("deve lançar erro se a descrição for menor que 3 caracteres", () => {
  const receitaInvalida = new Receita("Oi", 100);
  
  expect(() => {
    service.adicionar(receitaInvalida);
  }).toThrow("Descrição inválida");
});

test("deve lançar erro de saldo insuficiente ao tentar adicionar despesa maior que o saldo", () => {
  const despesa = new Despesa("Comprar TV", 5000);
  
  expect(() => {
    service.adicionar(despesa);
  }).toThrow("Saldo insuficiente");
});

test("deve calcular o saldo corretamente com múltiplas transações", () => {
  const receita1 = new Receita("Salário", 3000);
  const despesa1 = new Despesa("Aluguel", 1000);
  const despesa2 = new Despesa("Internet", 100);

  service.adicionar(receita1);
  service.adicionar(despesa1);
  service.adicionar(despesa2);

  expect(service.calcularSaldo()).toBe(1900);
});