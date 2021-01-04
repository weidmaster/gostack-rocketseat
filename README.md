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

  ### Babel
  - Serve para converter (transpilar) códigos React para códigos que o navegador entenda
  - ```yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli```
  - ```yarn babel <modern_js_file.js> --out-file <compiled_js_file.js>```

  ### Webpack
  - Pra cada tipo de arquivo (.js, .css, .png, ...) irá converter o código de uma maneira diferente
  - Utiliza loaders (carregadores) para cada tipo de arquivo. Se não tiver um loader específico, o arquivo não será interpretado dentro do javascript
  - ```yarn add webpack webpack-cli```
  - ```yarn add babel-loader``` converte arquivos javascript usando o babel