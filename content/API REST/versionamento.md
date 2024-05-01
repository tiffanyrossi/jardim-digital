---
"title:": 
"alias:": 
"draft:": "false"
tags:
  - API
"description:":
---
o versionamento é a capacidade de adicionar, remover e alterar funcionalidades em uma API, sem afetar a interface existente e sem quebrar a aplicação para os clientes que já a consomem. é uma prática essencial para garantir a evolução controlada e a compatibilidade das APIs ao longo do tempo.

----
## métodos de versionamento
### versionamento por URL
#### por subdomínio
especifica a versão logo no início da URL, usando subdomínios.
- exemplo: `https://v1.host/api/...`
#### por path param
abordagem mais utilizada, permite fácil navegação entre as versões. especifica a versão após a base URL da API, utilizando [[parâmetros das APIs#path parameters|path parameters]].
- exemplo: `https://host/api/v1/...`
#### por query param
padrão que foi muito utilizado antigamente, mas pode prejudicar a elegibilidade da URL e a navegação para outras versões. utiliza [[parâmetros das APIs#query parameters|query parameters]] para buscar a versão.
- exemplo: `https://host/api/recurso/.../1?version=1.0`

### versionamento por header param
#### por accept
define a versão no cabeçalho Accept do [[parâmetros das APIs#header parameters|header param da requisição]].
#### por custom header param
permite definir um [[parâmetros das APIs#header parameters|cabeçalho personalizado]] para especificar a versão. a URL permanece intacta, mas é necessário cuidado ao realizar a requisição para incluir o cabeçalho customizado.