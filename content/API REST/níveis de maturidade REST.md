---
"title:":
"alias:":
"draft:": "false"
tags:
  - API
  - REST
  - tipos/🪴planta
"description:":
---
## nível 0: pântano de POX (plain old XML)
utiliza o HTTP como sistema de transporte para interações remotas, mas sem adotar qualquer mecanismo adicional. possui apenas um único endpoint, e trafega dados em JSON ou XML.
## nível 1: recursos
as informações são organizadas por recursos. não usa variedade de [[métodos HTTP]], todas as operações são realizadas com [[métodos HTTP#GET|GET]] ou [[métodos HTTP#POST|POST]].
## nível 2: verbos
utiliza corretamente todos os [[métodos HTTP]] disponíveis.
## nível 3: RESTful (hypermedia controls)
utiliza HATEOAS - se o mecanismo do estado do aplicativo não estiver orientado a hipertexto, a aplicação não poderá ser considerada RESTful.

----
### HATEOAS
**h**ypertext **a**s **t**he **e**ngine **o**f **a**pplication **s**tate, é uma [[fundamentos de API REST#constraints do REST|constraint arquitetural de aplicações REST]]. as APIs HATEOAS oferecem informações que permitem a navegação dinâmica entre seus endpoints (incluindo links para os outros endpoints da mesma entidade no response, como PUT, GET, POST, DELETE etc).