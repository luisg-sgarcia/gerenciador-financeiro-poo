# 💰 Gerenciador Financeiro Pessoal (MVC)

Este projeto é um sistema de controle de finanças (entradas e saídas) desenvolvido como avaliação para a disciplina de **Programação Orientada a Objetos (POO)**. O foco principal é a aplicação prática de padrões de arquitetura e princípios de código limpo.

---

## 🏗️ Arquitetura do Sistema

O projeto utiliza o padrão **MVC (Model-View-Controller)** para separar as responsabilidades e facilitar a manutenção:

*   **Model**: Representa as entidades de dados (`Transacao`, `Entrada`, `Saida`) e as regras de negócio de saldo.
*   **View**: Camada de interação com o usuário via terminal (CLI).
*   **Controller**: Age como mediador, recebendo comandos da View e processando os dados através do Repositório.

---

## 🛠️ Conceitos de POO Aplicados

Para atender aos requisitos acadêmicos e garantir um código profissional, foram utilizados:

*   **Classes Abstratas**: A classe base `Transacao` é abstrata, garantindo que nenhuma transação seja criada sem ser especificamente uma Entrada ou Saída.
*   **Interfaces**: Definem o contrato `IRepositorio`, garantindo que o Controller não dependa de uma implementação específica de banco de dados.
*   **Injeção de Dependência**: O banco de dados é instanciado no `main.ts` e injetado no Controller, promovendo o desacoplamento.
*   **Enums**: Utilizados para categorizar tipos de movimentação de forma tipada e segura.
*   **Sobrecarga e Sobrescrita**:
    *   **Sobrescrita**: Métodos de cálculo de valor real especializados em cada classe filha.
    *   **Sobrecarga**: Métodos de busca flexíveis no Controller.
*   **Encapsulamento**: Uso de modificadores de acesso (`private`, `protected` e `public`) para proteger a integridade dos dados.

---

## 📂 Estrutura de Pastas

```text
src/
 ├── controller/   # Lógica de controle e coordenação
 ├── database/     # Repositório e persistência de dados
 ├── interfaces/   # Contratos e Interfaces do sistema
 ├── model/        # Entidades, Classes Abstratas e Enums
 ├── view/         # Interface de linha de comando
 └── main.ts       # Inicialização e Injeção de Dependências

---

## 👨‍🏫 Instruções para execução

### 1. Instalar as dependências
Necessário para baixar o compilador TypeScript e os tipos do Node.js:

```bash
npm install

### 2. Execução

```bash
npx tsc

---

```bash
node dist/main.js