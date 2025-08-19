---
"title:":
"alias:":
"draft:": "false"
tags:
  - API
  - "#HTTP"
  - tipos/🪴planta
"description:":
---
## POST
cria uma nova entidade no banco de dados. em caso de sucesso, deve retornar [[status HTTP#2xx sucesso|200 Ok ou 201 Created]].
- parâmetros suportados: [[parâmetros das APIs#path parameters|path]], [[parâmetros das APIs#query parameters|query]], [[parâmetros das APIs#header parameters|header]] e [[parâmetros das APIs#body parameters|body]] (preferencial).
## GET
lê ou recupera uma representação de uma entidade no banco. deve retornar um XML ou JSON e status 200 Ok. os erros mais comuns são [[status HTTP#4xx erro de client|404 Not Found ou 400 Bad Request]].
- parâmetros suportados: [[parâmetros das APIs#path parameters|path]], [[parâmetros das APIs#query parameters|query]] e [[parâmetros das APIs#header parameters|header]].
## PUT
atualiza informações de uma entidade já existente no banco, incluindo no body o payload da entidade a ser alterada e na URL seu identificador (por [[parâmetros das APIs#path parameters|path parameter]]). deve retornar [[status HTTP#2xx sucesso|200 Ok]], com o body persistido de volta, ou [[status HTTP#2xx sucesso|204 No Content]].
- parâmetros suportados: [[parâmetros das APIs#path parameters|path]], [[parâmetros das APIs#query parameters|query]], [[parâmetros das APIs#header parameters|header]] e [[parâmetros das APIs#body parameters|body]] (preferencial).
## DELETE
remove um recurso do banco.  deve retornar  [[status HTTP#2xx sucesso|200 Ok]] com uma mensagem de confirmação personalizada, ou [[status HTTP#2xx sucesso|204 No Content]].
- parâmetros suportados: [[parâmetros das APIs#path parameters|path]], [[parâmetros das APIs#query parameters|query]] e [[parâmetros das APIs#header parameters|header]].
## verbos menos comuns
### PATCH
realiza updates parciais de uma entidade. traz economia de banda e maior performance, por outro lado, pode acontecer colisão de patches simultâneos.
### HEAD
similar ao GET, porém retorna apenas response line e os response headers - não devolve body.
### TRACE
recupera o conteúdo de uma requisição HTTP de volta. pode ser usado como recurso de debug em desenvolvimento.
### OPTIONS
encontra operações HTTP e outras opções suportadas pelo servidor. o cliente pode especificar uma URL para o verbo OPTIONS, ou um ```*``` para buscar por todo o servidor.
### CONNECT
usado pelo cliente para estabelecer uma conexão de rede com o servidor via HTTP