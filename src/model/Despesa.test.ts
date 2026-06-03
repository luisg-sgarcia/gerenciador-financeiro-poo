import { test, expect } from '@jest/globals';
import Outflow from "./Outflow";
import { TransactionType } from "../enums/TransactionType";

test("deve criar uma despesa com o tipo correto", () => {
  const despesa = new Outflow("Conta de Luz", 150);
  
  expect(despesa.getDescription()).toBe("Conta de Luz");
  expect(despesa.getAmount()).toBe(150);
  expect(despesa.getType()).toBe(TransactionType.OUTFLOW);
});

test("deve calcular o impacto retornando o valor negativo", () => {
  const despesa = new Outflow("Mercado", 200);
  
  expect(despesa.calculateImpact()).toBe(-200);
});