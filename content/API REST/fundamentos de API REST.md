---
"title:": fundamentos de API REST
"alias:": 
"draft:": "false"
tags:
  - API
"description:":
---
APIs, ou **a**pp **p**rogramming **i**nterfaces, representam aplicações cliente-servidor que facilitam a  a comunicação entre serviços, sejam eles internos ou externos, sem exigir o conhecimento detalhado de suas implementações. garantem um ambiente seguro ao controlar o acesso às informações, expondo apenas o necessário para o serviço específico em questão.
## tipos de APIs
### REST
representa um estilo arquitetural mais leve e baseado em recursos web. suporta os formatos: XML, JSON, CSV, texto, imagens, HTML, PDF, binário, entre outros.
### SOAP
envolve trocas de mensagens em XML, onde os dados são encapsulados para a comunicação entre os sistemas.

-----
## o que é REST
REST (**r**epresentational **s**tate **t**ransfer (REST)) é um estilo de arquitetura de software para sistemas de hipermídia distribuídos (como a world wide web). é baseado em 6 constraints (princípios).
### constraints do REST
#### client-server
as interações entre cliente e servidor devem ser desenvolvidas sem dependências.
#### stateless server
o servidor não deve armazenar o estado das requisições do cliente. cada requisição é tratada como nova, sem sessões ou históricos.
#### cacheable
o uso do cache melhora a performance e a escalabilidade. deve ser aplicado quando possível, e os recursos devem indicar quando são cacheáveis.
#### interface uniforme
utilizar a mesma abordagem de identificação de recursos (URI), manipulação de recursos a partir de suas representações, mensagens autodescritivas, [[níveis de maturidade REST#HATEOAS|HATEOAS]] etc, em todas as APIs.
#### sistema em camadas
a arquitetura deve suportar camadas intermediárias entre o cliente e o servidor, como balenceamento de carga, proxies e firewalls.
#### código sob demanda
(opcional) se necessário, a API pode retornar código executável para suportar parte da aplicação.

------------
## request & response
![[Pasted image 20240313101142.png]]
### request
o cliente envia solicitações para a API hospedada no servidor. essas solicitações contêm dados (*body/payload*) ou instruções específicas sobre a ação desejada ([[métodos HTTP|método HTTP]]), como recuperar informações ou realizar uma operação.
### processamento
o servidor processa as solicitações recebidas, executando as operações necessárias, criando, alterando ou recuperando os recursos solicitados.
### response
após o processamento, o servidor envia uma resposta de volta ao cliente, que contém os resultados da solicitação ou outras informações relevantes.

---
## arquitetura do request e response
### endpoint
é a URL onde o servidor rest está executando as solicitações. é para onde o cliente deve apontar sua chamada para interagir com o servidor.
### método
refere-se ao tipo de operação a ser realizada  ([[métodos HTTP|método HTTP]]), como GET, POST, PUT, DELETE, entre outros. esse método indica a ação a ser executada no recurso identificado pelo endpoint.
### header
contém [[parâmetros das APIs#header parameters|parâmetros adicionais]] fornecidos para a comunicação entre cliente e servidor. os headers podem incluir informações como autenticação, tipo de conteúdo, e outros metadados relevantes para a requisição ou resposta.
### body
contém as informações enviadas ou recebidas (*payload*) durante a comunicação entre cliente e servidor. estas informações podem ser estruturadas em formatos como JSON, XML, texto simples, entre outros. o body da mensagem geralmente contém os dados a serem processados pelo servidor.