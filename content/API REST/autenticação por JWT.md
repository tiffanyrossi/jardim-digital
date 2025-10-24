---
"title:":
"alias:":
"draft:": "false"
tags:
  - API
  - "#JWT"
  - tipos/🪴planta
"description:":
---
**JWT**, que significa *JSON Web Token*, é um padrão de autenticação amplamente utilizado em APIs. sendo um modelo flexível e seguro, o JWT é uma escolha popular para a implementação de autenticação em APIs, oferecendo segurança e eficiência na transmissão de dados sensíveis.

## processo de autenticação
antes de fazer a request para a API, o cliente precisa enviar uma [[fundamentos de API REST#request|request]] de autenticação, passando as credenciais (login, por exemplo) via POST no body da request. a API valida e processa as credenciais. Se estiverem corretas, gera um token JWT e o retorna no body de uma [[fundamentos de API REST#response|response]] com [[status HTTP#2xx sucesso|status 200 OK]].

## armazenamento do token
após concluir o processo de autenticação, o cliente armazena o JWT (stored token) e, nas próximas requests, irá enviá-lo via header, por [[parâmetros das APIs#header parameters|authorization parameters]].

## validação do token
se o token estiver correto, a request é concluída. caso contrário, a API retorna erro [[status HTTP#4xx erro de client|401 Unauthorized]].

## expiração e refresh token
como medida de segurança, o token expira depois de um determinado tempo. é possível implementar um *refresh token*, que solicita um novo token quando o atual expira, evitando a necessidade de enviar as credenciais novamente.

## anatomia de um JWT
um JWT é composto por três partes: HEADER, PAYLOAD e VERIFY SIGNATURE.
- *HEADER*: contém metadados sobre o token, como o tipo e o algoritmo de criptografia.
- *PAYLOAD*: contém as informações sobre o usuário e quaisquer metadados adicionais necessários.
- *VERIFY SIGNATURE*: é uma assinatura digital que garante a integridade do token e verifica se ele foi alterado durante a transmissão.