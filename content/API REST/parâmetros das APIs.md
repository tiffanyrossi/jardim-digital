---
"title:": 
"alias:": 
"draft:": "false"
tags:
  - API
"description:":
---
## path parameters
variáveis que são passadas pela URL, são usadas para apontar para um recurso específico em uma coleção (como um ```{id}```). uma URL poder ter vários path parameters.
caso um [[fundamentos de API REST#endpoint|endpoint]] possua path parameters, eles são obrigatórios na chamada, porque fazem parte da URL daquele endpoint.
*exemplo*: ```/api/produtos/{id}```
## query parameters
são variáveis que ficam no final da URL, após uma ```?``` e separadas por ```&```. são opcionais, e normalmente usados como delimitadores de busca.
*exemplo*: ```/api/produtos?categoria=hortifruti&subcategoria=frutas```
## header parameters
são variáveis adicionais, que podem ser passadas pelo [[fundamentos de API REST#request|request]] ou [[fundamentos de API REST#response|response]]. não podem ser enviados diretamente pelo browser, apenas via cliente. os parâmetros mais utilizados são ```Accept```, ```Content-Type```, ```Authorization``` entre outros. - além dos parâmetros default, podem ser implementados header parameters customizados.
  - *request headers*: contêm informações sobre o recurso que está sendo chamado ou sobre o cliente que está fazendo a requisição
  - *response headers*: contêm informações adicionais sobre o response ou sobre o servidor
## body parameters
usado com frequência nos métodos [[métodos HTTP#POST|POST]], [[métodos HTTP#PUT|PUT]] e [[métodos HTTP#PATCH|PATCH]], carrega os dados que serão enviados pelo cliente no [[fundamentos de API REST#request|request]] ou retornados pelo servidor via [[fundamentos de API REST#response|response]]. os formatos mais utilizados incluem JSON, XML, YAML (a API precisa suportar o formato).