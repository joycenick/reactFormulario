# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🚀 Desafio em Dupla: Cadastro de Pokémons com React! 🧑‍💻🧑‍💻  

![Preview do projeto](./src/assets/pokemon-form-preview.png)  
> Formulário moderno para cadastrar Pokémons, feito com React e CSS personalizado! 🎨  

---

## 🎯 Objetivo

Criar uma aplicação React com um **formulário interativo** para cadastrar Pokémons!  
O projeto tem como foco treinar:
- Hooks (`useState`)
- Inputs controlados
- Estilização moderna e responsiva com CSS  

---

## 🧩 Funcionalidades

✅ **Nome do Pokémon** — campo de texto  
🔥 **Tipo** — select com opções (ex: fogo, água, grama, elétrico, psíquico, pedra)  
📜 **Descrição** — campo de texto multilinha  
💪 **Poder** — input numérico (0 a 100)  

🟢 Ao clicar em **Cadastrar**, o app exibe a mensagem:  
> “Pokémon cadastrado!” 🙌  

🧼 Após o envio, os campos são automaticamente **limpos**.  

💾 (Bônus) Mostra a **lista de Pokémons cadastrados** logo abaixo do formulário.  
⚠️ (Bônus) Exibe mensagens de erro se algum campo obrigatório estiver vazio.  

---

## 🖼️ Layout

O design do formulário é minimalista e moderno:  
- Fundo em **degradê suave** 🍑  
- Cantos arredondados e sombras sutis 🌈  
- Tipografia legível e divertida  
- Layout centralizado e responsivo 💻📱  

![Formulário de cadastro de Pokémon](./src/assets/preview.png)

---

## 🛠️ Tecnologias Utilizadas

- **React** ⚛️  
- **Vite** ⚡ (para desenvolvimento rápido)  
- **JavaScript (ES6+)**  
- **CSS3** com gradiente e responsividade  
- **Hooks React (useState)** para controle dos inputs  

---

## 📂 Estrutura do Projeto
reactFormulario/
├── src/
│ ├── components/
│ │ └── MyForm.jsx
│ ├── styles/
│ │ └── MyForm.css
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── public/
├── package.json
├── vite.config.js
└── README.md

## 🧠 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/joycenick/reactFormulario.git
   cd reactFormulario
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse no navegador:

arduino
Copiar código
http://localhost:5173
