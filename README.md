# gostack-rocketseat
Acompanhamento das aulas e consolidação do aprendizado, assim como histórico de código para referência

## yarn

```yarn init -y``` cria o arquivo package.json com configurações do projeto

```yarn add <module>``` adiciona um módulo geral

```yarn add <module> -D``` adiciona um módulo apenas para desenvolvimento

## package.json

A entrada ```main``` aponta para o script principal, que será executado sem nenhum parâmetro.

Poderá ser adicionada uma entrada ```scripts``` que definirá comandos personalizados que podem ser utilizados com o yarn.

### Exemplo

```json
"scripts": {
    "dev": "nodemon"
  },
  ```
  Isso cria um comando chamado ```dev``` que inicia o nodemon, monitorando o script inicial apontado na entrada main.

  É o mesmo que chamar ```yarn nodemon src/index.js``` direto pelo terminal. No entanto a chamada fica simplificada, sendo necessário apenas usar ```yarn dev```

  ## Ferramentas
  ### Testes de API e métodos HTTP
  Insomnia: https://insomnia.rest/ 🔗
  - Workspaces pra cada projeto
  - Pastas para cada recurso
  - Environments para variáveis globais, como ```base_url```