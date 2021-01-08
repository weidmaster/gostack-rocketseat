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

  ### Axios
  - Para realizar chamadas de API do backend pelo frontend
  - ```yarn add axios```
  - ```yarn add cors``` instalar no backend para permitir acesso da API pelo frontend

  ### Babel
  - Serve para converter (transpilar) códigos React para códigos que o navegador entenda
  - ```yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli @babel/plugin-transform-runtime```
  - ```yarn babel <modern_js_file.js> --out-file <compiled_js_file.js>``` para compilar um arquivo JS moderno em JS que o navegador entenda

  ### Webpack
  - Pra cada tipo de arquivo (.js, .css, .png, ...) irá converter o código de uma maneira diferente
  - Utiliza loaders (carregadores) para cada tipo de arquivo. Se não tiver um loader específico, o arquivo não será interpretado dentro do javascript
  - O servidor possui ```live reloading```. Isso significa que a página será recarregada automaticamente quando atualizar os arquivos
  - ```yarn add webpack webpack-cli```
  - ```yarn add webpack-dev-server -D``` servidor de desenvolvimento
  - ```yarn add babel-loader``` converte arquivos javascript usando o babel
  - ```yarn add style-loader css-loader``` interpreta arquivos CSS e injeta no HTML
  - ```yarn add file-loader``` interpreta arquivos dentro da aplicação
  - ```yarn webpack --mode development``` roda o webpack em modo de desenvolvimento
  - ```yearn webpack serve --mode development``` roda o servidor em modo de desenvolvimento

  **Atenção!** Se alterar qualquer configuração do ```webpack.config.js``` é necessário reiniciar o webpack

  ### Emmet
  - Configuração para JSX
  ```json
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
  ```

  ### Typescript
  - melhora o intellisense da IDE
  - ajuda a escrever código mais correto
  - permite utilizar os últimos recursos da linguagem
  - é um superset do javascript. Isso significa que um arquivo typescript é um arquivo javascript válido
  - utiliza extensão ```.ts```
  - ```yarn add typescript -D```
  - ```yarn tsc --init``` gera o arquivo de configuração do typescript ```tsconfig.json```
  - ```yarn tsc``` para gerar o arquivo javascript compilado

    **Atenção!** O Typescript utiliza arquivos de definição de tipos e caso ocorra algum erro informando que o tipo não existe, instale as definições de tipo utilizando ```yarn add @types/<componente> -D```

### Ts-node-dev
- ajuda durante o desenvolvimento pra rodar código typescript diretamente
- faz os dois papéis tanto do ```tsc``` quanto do ```nodemon```, compilando e recarregando quando o código é alterado
- ```yarn add ts-node-dev -D```
- ```yarn ts-node-dev --transpile-only --ignore-watch node_modules src/<arquivo.ts>```

  - **transpile-only**: não faz a verificação de tipos durante a compilação. A verificação é realizada pela IDE
  - **ignore-watch node_modules**: não tenta compilar e executar typescript dentro da pasta node_modules, pois a mesma é de componentes de terceiros