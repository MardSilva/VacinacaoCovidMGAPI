# VacinacaoCovidMGAPI

Repositório de uma API totalmente feita em JS (backend) que usa dos dados abertos do SIES-MG. Mais especificamente os dados abertos do conjunto 'Vacinômetro'.

## Como usar

Para poder realizar o build da API você precisará do [Visual Studio Code](https://code.visualstudio.com/download) e instalar todos os requisitos necessários para rodar aplicações em JavaScript bem como os addons que você quiser adicionar.

## Banco de Dados
Pensando em formas 'leves' e também gratuitas, a aplicação irá usar o banco de dados em MySQL. Recomendo realizar a instalação  do mesmo através da sua página de downloads que poderá ser acessada [aqui](https://www.mysql.com/downloads/). Junto do mesmo, sugiro um gerenciador de banco de dados de sua preferência. Recomendaria o [HeidiSQL](https://www.heidisql.com/download.php) ou o [DBeaver](https://dbeaver.io/download/), mas, fique a vontade para escolher a ferramenta que achar melhor. 

## Configurando o banco de dados

Após configurar toda sua estrutura de banco de dados, está na hora de você criar as tabelas. Para facilitar, foi anexado duas pastas distintas: 
 - CSV: que contém os arquivos em formato de separado por vírgulas (comma-separated-values) de cada uma das tabelas que são necessárias;
- SQL: Um arquivo feito por ferramentas como ForgeStudio (não verifiquei, cabe a você validar e realizar as alterações necessárias para o seu gosto) que contém todos os inserts preparados para MySQL; 

### Editando o Arquivo de Banco de dados

Após criar as tabelas, você precisará alterar o arquivo:
```sh
 newdb.js
```
 e preencher os campos **host, port, user, password e database** com as informações da sua conexão com banco de dados;

Sugiro editar também o arquivo:

```sh
 server.js
```
 e preencher os campos **host, port, user, password e database** com as informações da sua conexão com banco de dados em **connection configurations**;

## Executando a aplicação

Caso você esteja executando pela primeira vez o projeto, é necessário instalar suas dependências do arquivo **package.json.** Para isto, basta executar: 

```js
   npm install
```
Ou qualquer outro comando de instalação de pacotes que você possa ter personalizado via Yarn, Chocolatey e outros gerenciadores de pacotes. Se você já instalou todas as dependências, para poder inicializar a aplicação, basta rodar o comando:

```js
   node start server.js
```

## Criando validações por usuários

O projeto foi criado com suporte para validar usuários. Como exemplo e de forma didática, você verá que ele tem o **'user1' com 'password1' e 'user2' com 'password2'**. Caso você consiga alterar o projeto, basta criar uma função no arquivo **helper.js** e criar a lógica  no arquivo **server.js** que valida a autorização deste usuário e o que ele pode acessar. 

Basta reparar que em vários pontos das **controllers** existe uma pequena função já pronta chamada 'checkPermission', a qual já tem as letras: 
- **v**: Visualização apenas (view).
- **w**: Permissões de alteração/escrita (write).


## JWT Token 
Com o intuito de validar via Postman, e realizar testes, você poderá usar o JWT Token. Para isto, basta preencher no arquivo **server,js** os dados necessários relacionados ao Token. Lembrando que um deles é a chave (key) e o outro é o prazo de expiração deste token.

Após isto, realizar também o ajuste no arquivo **helper.js** para que você possa habilitar a validação do token se não você verá erros.


## Arquivos do Postman
Ainda não foi possível gerar a documentação junto do Swagger. Como criei a validação com token via Postman, eu criei já o arquivo padrão para que você possa importar dentro do Postman. Os arquivos de importação se encontram na pasta **POSTMAN_IMPORT_FILE**.

Sendo que um deles é o Enviroment e o outro é o arquivo em si do Postman com as coleções para que você possa realizar os callbacks necessários. Você também precisará editar as rotas caso tenha algum erro na chamada.


## Contributing
Solicitações de pull request são bem-vindas. Para mudanças importantes, reporte-nos e sugira também a melhoria do código para que possamos aprovar a solicitação. Se você se sentir melhor, crie uma cópia e distribua esse projeto.


## Licença
[MIT](https://choosealicense.com/licenses/mit/)
