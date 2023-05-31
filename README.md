# 🚗 Projeto Car Shop!

Nesse projeto foi desenvolvida uma API REST e um banco de dados para gerenciamento de um loja de veículos. </br>
Foram implementados endpoints que realizam um CRUD e gerenciam os carros e motos disponíveis.

O objetivo principal foi de exercitar os conhecimentos sobre Typscript, Orientação a Objetos (POO), classes de domínio, interfaces e enum, banco de dados NoSQL MongoDB com modelagem pelo Mongoose, além da implementação de middleware de erros e os conceitos da arquitetura MSC (Model, Service e Controller).

O desenvolvimento desse projeto foi realizado durante o curso de Desenvolvimento Web na [Trybe](https://www.betrybe.com/)!

## Como utilizar:

Clone o repositório: `git@github.com:Renan-Pint0/car-shop-project.git`.

<details>
  <summary><strong>Rodando com Docker :whale: ou Localmente</strong></summary>
  
  ## 👉 Com Docker
   **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**
   
   > Rode os serviços `node` e `mongoDB` com o comando `docker-compose up -d`.
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
  
   > :information_source: Use o comando `docker exec -it car_shop bash`.
   
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - ✨ **Dica:** O projeto espera que a versão do `node` utilizada seja a 16.

  <br>  
</details>

## Inicializando:
  > :information_source: Após seguir os passos de como rodar o projeto citados acima

  Renomeie o arquivo `.env.example` para `.env`.
  
  Instale as dependências `npm install`

  Suba os containers do docker compose `docker compose up -d`

  <!-- Dentro do container: 
  - Instale as dependências `npm install`

  - Crie o banco de dados e suas tabelas: `npm run prestart`

  - Insira os dados iniciais nas tabelas: `npm run seed`

  - Inicie o servidor: `npm start` -->

## :mailbox_with_no_mail: Rotas:

O projeto está rodando na porta `3001`. Seguem as rotas que podem ser acessadas:

  `/cars`: </br>
    - POST: cria novo carro; </br>
    - GET: lista os carros cadastrados; </br>
    - GET: `/cars/:id` traz as informações do carro conforme id; </br>
    - PUT: `/cars/:id` atualiza as informações do carro conforme id; </br>
    - DELETE: `/cars/:id` exclui o carro conforme id; </br>

  `/motorcycles`: </br>
    - POST: cria nova moto; </br>
    - GET: lista as motos cadastradas; </br>
    - GET: `/cars/:id` traz as informações da moto conforme id; </br>
    - PUT: `/cars/:id` atualiza as informações da moto conforme id; </br>
    - DELETE: `/cars/:id` exclui a moto conforme id; </br>

Utilize o seu client preferido para testar as rotas acima. <br>
Lembre-se se enviar o body da requisição com as chaves previstas nos contratos das interfaces `ICar` e `IMotorcycle`.

## :fire: Tecnologias utilizadas:

  **Back-end:** Typescript, Orientação a Objetos (POO), Node.js e Express</br>
  **Banco de Dados:** NoSQL MongoDB e Mongoose (ODM) </br>
  **Testes:** Mocha, Chai, Sinon </br>
  **Arquitetura:** Camadas (Model, Service, Controller)
