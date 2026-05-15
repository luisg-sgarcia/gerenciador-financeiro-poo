💰 Gerenciador Financeiro Pessoal (MVC)

Sistema de gerenciamento financeiro desenvolvido em TypeScript utilizando conceitos de Programação Orientada a Objetos (POO) e arquitetura MVC.

O projeto foi criado como atividade acadêmica para praticar conceitos fundamentais de desenvolvimento backend e organização de software.

📚 Conceitos Utilizados

Este projeto aplica diversos conceitos importantes de desenvolvimento orientado a objetos:

✅ MVC (Model View Controller)

✅ Encapsulamento

✅ Herança

✅ Polimorfismo

✅ Classe Abstrata

✅ Interfaces

✅ Sobrescrita (Override)

✅ Sobrecarga (Overload)

✅ Injeção de Dependência

✅ Enum

✅ Tratamento de Erros

✅ TypeScript Strict Mode

🏗️ Arquitetura do Projeto

src/
│
├── controller/
│   └── TransactionController.ts
│
├── database/
│   └── Database.ts
│
├── enums/
│   └── TransactionType.ts
│
├── interfaces/
│   └── IRepository.ts
│
├── model/
│   ├── Transaction.ts
│   ├── Receita.ts
│   └── Despesa.ts
│
├── services/
│   └── TransactionService.ts
│
├── view/
│   └── ConsoleView.ts
│
└── main.ts

⚙️ Tecnologias Utilizadas

TypeScript

Node.js

prompt-sync

chalk

🖥️ Funcionalidades

✅ Adicionar receitas

✅ Adicionar despesas

✅ Listar transações

✅ Visualizar saldo atual

✅ Validação de saldo insuficiente

✅ Interface interativa no terminal

✅ Tratamento de erros

📌 Exemplo do Sistema

=== TRANSAÇÕES ===

ID   DESCRIÇÃO          VALOR          TIPO
--------------------------------------------------
1    Salário            R$ 3500.00     RECEITA
2    Mercado            R$ 800.00      DESPESA
3    Aluguel            R$ 1200.00     DESPESA

📦 Instalação

Clone o repositório:

git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

Entre na pasta do projeto:

cd SEU-REPOSITORIO

Instale as dependências:

npm install

▶️ Executando o Projeto

Executar em modo desenvolvimento

Linux / Mac

npm run dev

Windows (CMD ou PowerShell)

npm run dev

🏗️ Compilar o Projeto

npm run build

O JavaScript compilado será gerado na pasta:

dist/

▶️ Executar Projeto Compilado

Linux / Mac

npm start

Windows (CMD ou PowerShell)

npm start

📜 Scripts Disponíveis

"scripts": {
  "dev": "ts-node src/main.ts",
  "build": "tsc",
  "start": "node dist/main.js"
}

📖 Objetivo do Projeto

O principal objetivo deste projeto é praticar:

Organização de software

Arquitetura MVC

Conceitos de POO

Estruturação de projetos TypeScript

Boas práticas de programação

Separação de responsabilidades

👨‍💻 Autor

Luis Gustavo Soares Garcia