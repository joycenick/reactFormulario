
# Cadastro_pokemon

Uma breve descrição sobre o que esse projeto faz e para quem ele é

O projeto cadastro_pokemon é uma aplicação React que cria um formulário para cadastrar pokemons, com hooks (useState), inputs controlados e estilização moderna com CSS.

## Instalação
Abre o terminal e segue o tutorial com comandos abaixo

Clone o repositório
 ```sh
git clone https://github.com/joasmarquesoliveira/cadastro_pokemon.git
```
Entre na pasta reactFormulario
```sh
cd reactFormulario
```
Acesse a pasta pelo vs code:
```sh
code .
```
## Detalhes do projeto

Para criar esse projeto usamos o comando abaixo que cria toda a estrutura de uma aplicação de React com Vite
```sh
npm create vite@latest . -- --template react
```
mas só utlizamos alguns arquivos:

O arquivo MyForm.css para estilizar o projeto (esse arquivo se encontra na pasta "styles")

O arquivo MyForm.jsx que contém toda a regra de negócio (esse arquivo se encontra na pasta "components")

E por fim o arquivo App.jsx para apresentar o o componente do arquivo MyForm.jsx

### MyForm.jsx
Como foi falado acima, o MyForm.jsx é o arquivo que contém toda a informação de como funciona o formulário para cadastrar os pokémons. Ao acessa-lo, você irá ver o arquivo separa 3 partes

#### 1ª parte: imports
O primeiro import serve para importar o hook `useState` do React, que é uma ferramenta para criar e gerenciar estados dentro de um componente funcional

O segundo import serve para importar o arquivo `MyForm.css` e aplicar seus estilos ao componente


#### 2ª parte: estados

Da linha 5 a 10, você verá a lista de estados feitos para guardar as informações do formulário, enviar uma mensagem sucesso e para listar os pokémons cadastrados


#### 3ª parte: HTML
Da linha 37, você irá encontrar um `return` que retornará toda o corpo do HTML. 

Dentro dele, temos um formulário controlado, onde cada campo utiliza os estados useState criado mais acima.

Logo após, há uma pequena lógica que lista os pokémons cadastrados, que foram guardados dentro de um array e exibidos com o método `map()`.

## Autores

O projeto Cadastro_pokemon foi desenvolvida pelos jovens devenvolvedores de 17 anos:
- Joyce Nicole Santana

- Joás Marques Oliveira
