import { test, expect } from '@jest/globals';
import Despesa from "./Despesa";
import { TransactionType } from "../enums/TransactionType";

test("deve criar uma despesa com o tipo correto", () => {
  const despesa = new Despesa("Conta de Luz", 150);
  
  expect(despesa.getDescricao()).toBe("Conta de Luz");
  expect(despesa.getValor()).toBe(150);
  expect(despesa.getTipo()).toBe(TransactionType.DESPESA);
});

test("deve calcular o impacto retornando o valor negativo", () => {
  const despesa = new Despesa("Mercado", 200);
  
  expect(despesa.calcularImpacto()).toBe(-200);
});