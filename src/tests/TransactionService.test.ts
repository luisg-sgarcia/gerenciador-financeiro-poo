import Database from "../database/Database";
import TransactionService from "../service/TransactionService";
import Inflow from "../model/Inflow";
import Outflow from "../model/Outflow";
import { expect, test, beforeEach } from '@jest/globals';

let database: Database;
let service: TransactionService;

beforeEach(() => {
  database = new Database();
  service = new TransactionService(database);
});

test("Deve adicionar uma receita e calcular o saldo corretamente", () => {
  const inflow = new Inflow("Salário", 1000);
  service.addTransaction(inflow);
  
  expect(service.calculateBalance()).toBe(1000);
});

test("Deve calcular o saldo corretamente com múltiplas transações", () => {
  const inflow = new Inflow("Salário", 1000);
  const outflow = new Outflow("Conta de luz", 200);
  
  service.addTransaction(inflow);
  service.addTransaction(outflow);
  
  expect(service.calculateBalance()).toBe(800);
});

test("Não deve permitir adicionar uma transação com valor negativo", () => {
  const inflow = new Inflow("Erro", -50);
  
  expect(() => {
    service.addTransaction(inflow);
  }).toThrow("Valores negativos não são válidos!");
});

test("Não deve permitir uma despesa (Outflow) maior que o saldo atual", () => {
  const inflow = new Inflow("Salário", 100);
  const outflow = new Outflow("Compra cara", 500);
  
  service.addTransaction(inflow);

  expect(() => {
    service.addTransaction(outflow);
  }).toThrow("Saldo insuficiente para esta despesa.");
});