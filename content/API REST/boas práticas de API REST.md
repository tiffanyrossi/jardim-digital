---
"title:":
"alias:":
"draft:": "false"
tags:
  - "#API"
  - "#REST"
  - tipos/🪴planta
"description:":
---
## paginação do response
permita a navegação eficiente em conjuntos grandes de dados, retornando apenas uma parte do resultado por vez.
## utilizar filtros
permita que o cliente consulte dados de forma mais específica, utilizando [[parâmetros das APIs#query parameters|parâmetros de consulta para filtrar resultados]].
## definir recursos lógicos
especifique claramente cada entidade da API e suas relações, garantindo consistência e compreensão.
## ser tolerante a falhas
capacidade de se recuperar de erros e [[status HTTP|sempre retornar alguma resposta]], mesmo em situações inesperadas.
## manter informações em cache
cache de dados frequentemente solicitados para melhorar a performance da API.
## facilitar a conectivdade
tornar fácil para o cliente se conectar e interagir com a API.
## definir timeouts
estabelecer limites de tempo para as requisições, evitando tempos de resposta excessivamente longos.
## ser bem documentada
[[swagger|documentar]] claramente todos os aspectos da API, incluindo endpoints, parâmetros e exemplos de uso.
## usar SSL
utilizar SSL para criptografar e proteger as comunicações entre o cliente e o servidor.
## possuir versionamento conciso
manter um [[versionamento|versionamento claro e conciso]] para facilitar a evolução da API sem impactar os clientes existentes.
## automatizar testes e validações
implementar testes automatizados para garantir a qualidade e a consistência da API.
## ser self-service
permitir ao cliente acessar, descobrir recursos e escolher o que precisa para consumir a API (utilizando [[swagger]] ou [[níveis de maturidade REST#HATEOAS|HATEOAS]]).
## exportar consultas
permitir que o cliente exporte os resultados das consultas em diferentes formatos, como XLS, CSV, PDF etc.
## implementar i18n/globalization
oferecer suporte a internacionalização e globalização para atender a diferentes idiomas e culturas.
## notificações para solicitações longas
utilizar notificações para informar os clientes sobre o status de solicitações longas, em vez de mantê-los esperando indefinidamente. devolver [[status HTTP#2xx sucesso|201 Created]], informando que a solicitação será executada e haverá uma notificação quando ela estiver pronta.
## possuir limite de campos
limitar o número de campos retornados em cada resposta, para evitar sobrecarga de dados
## realizar monitoramento da API em produção
monitorar ativamente a performance e a disponibilidade da API em ambiente de produção, identificando e corrigindo gargalos rapidamente.
## selecionar a tecnologia mais adequada
escolher as tecnologias mais adequadas para cada requisito específico da API, levando em consideração escalabilidade, segurança e eficiência.