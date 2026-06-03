import { test, expect } from '@jest/globals';
import TransactionService from "./TransactionService";
import Database from "../database/Database";
import Inflow from "../model/Inflow";
import Outflow from "../model/Outflow";

// Instanciando igual ao slide do professor:
const database = new Database();
const service = new TransactionService(database);

test("deve lançar erro se o valor da transação for menor ou igual a zero", () => {
  const receitaInvalida = new Inflow("Salário", 0);
  
  expect(() => {
    service.addTransaction(receitaInvalida);
  }).toThrow("Valor inválido");
});

test("deve lançar erro se a descrição for menor que 3 caracteres", () => {
  const receitaInvalida = new Inflow("Oi", 100);
  
  expect(() => {
    service.addTransaction(receitaInvalida);
  }).toThrow("Descrição inválida");
});

test("deve lançar erro de saldo insuficiente ao tentar adicionar despesa maior que o saldo", () => {
  const despesa = new Outflow("Comprar TV", 5000);
  
  expect(() => {
    service.addTransaction(despesa);
  }).toThrow("Saldo insuficiente");
});

test("deve calcular o saldo corretamente com múltiplas transações", () => {
  const receita1 = new Inflow("Salário", 3000);
  const despesa1 = new Outflow("Aluguel", 1000);
  const despesa2 = new Outflow("Internet", 100);

  service.addTransaction(receita1);
  service.addTransaction(despesa1);
  service.addTransaction(despesa2);

  expect(service.calculateBalance()).toBe(1900);
});