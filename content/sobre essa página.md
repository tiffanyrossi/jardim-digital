---
"title:": 
"alias:": 
"draft:": "false"
tags: []
"description:":
---
o meu **pkm** (*[personal knowledge management](https://en.wikipedia.org/wiki/Personal_knowledge_management)*) estrutura o meu fluxo de ideias e aprendizados - como receber, processar, organizar e guardar uma informação. esse sistema é vivo e evolui conforme minhas necessidades e novos aprendizados sobre o tema. 

um pkm resolve um combo frustrante de problemas: pilhas de anotações de cursos que só fazem sentido na hora que são escritas, esquecer como um problema é resolvido, não lembrar onde guardou alguma informação importante, reescrever linhas e linhas de código sem necessidade... ter um sistema bem definido libera espaço de processamento mental, reduzindo o stress e me permitindo focar na informação.

---
## princípios
### 1. manter um diário público de aprendizados
[[aprender em público|aprender em público é  a forma mais rápida de se aprender algo]]. escrever notas com a intenção de serem lidas depois melhora a qualidade delas, pois existe intenção e preocupação: transformar o conteúdo que você consome em conteúdo que você cria.
### 2. catalogar problemas e soluções
como desenvolvedora, é comum passar muito tempo configurando um recurso, ou desenvolvendo uma solução, e depois passar meses sem precisar mexer naquilo de novo. quando chega o momento de dar alguma manutenção, ou replicar o que fez em outro contexto, é importante ter todo o troubleshooting registrado, como um *stackoverflow pessoal*.
### 3. conectar ideias
a frase "mas por que aprender isso?" é proibida. não existe conhecimento inútil. ideias se conectam, e conhecimentos estabelecidos dão suporte para enriquecer novos aprendizados. não existe especialista que não consegue ter um entendimento macro daquilo que faz: é preciso conhecer diferentes conceitos e aplicações, saber um pouco de tudo aquilo que permeia o que você faz.
### 4. deixar germinar
nada é definitivo e não há problema em se corrigir, procurar fontes controversas ou publicar algo incompleto. ideias se transformam com o tempo. notas podem - e **devem** - ser publicadas sem estarem *perfeitas*.

---------------
## o fluxo da informação
### 🌱semente 
anotações soltas, pensamentos e ideias. uma **semente** pode ser feita de notas de um workshop, uma ideia que tive enquanto estava fazendo outra coisa, um trecho de algo que li e quero pesquisar mais... uma semente é plantada e depois deve ser cultivada.
### 🪴planta
uma semente, depois de cultivada, vai tomando forma. começo a aprofundar a pesquisa, trago uma fonte nova, escrevo meu ponto de vista sobre. a **planta** é uma fase intermediária, onde o que é escrito começa a madurecer.
### 🌳árvore
uma **árvore** é o mais próximo de permanente que uma nota pode chegar (pensando que nada é exatamente permanente e poder ser revisado sempre que necessário). uma nota que amadureceu, foi alimentada com fontes, pesquisada e reescrita até que eu esteja satisfeita com a forma como ela aborda um assunto.
### outros
#### 🧺 vaso
uma nota vazia é um **vaso**, criada para receber um conteúdo que gostaria de trazer para cá, mas ainda não tenho nada anotado. funciona como um lembrete de uma semente que precisa ser plantada.
#### 🍎fruto
nem toda árvore precisa dar frutos, mas caso um assunto renda um post de blog, um projeto ou algo do tipo, esse **fruto** deve ser linkado à árvore que o originou.
#### 🐝 pólen
livros, textos, artigos lidos que podem polinizar meu jardim, enriquecendo meus conhecimentos e anotações. **pólen** são notas sobre um conteúdo específico, não fazem parte do fluxo diretamente.

---------------------
## ferramentas
- [obsidian](https://obsidian.md/): onde centralizo todo meu conhecimento. é uma ferramenta poderosa que processa arquivos markdown e organiza notas por meio de links entre páginas, gráficos de conexões e plugins que trazem ainda mais funcionalidades. 
- [syncthing](https://syncthing.net/): para sincronizar meus arquivos do obsidian entre dispositivos.
- [quartz](https://quartz.jzhao.xyz/): para publicar minhas notas do obsidian, utilizo este gerador de sites estáticos que transforma arquivos markdown em sites funcionais.
- [giscus](https://github.com/giscus/giscus): sistema opensource de comentários baseado em github discussions. 
- [github pages](https://pages.github.com/): para hospedar tudo isso. como minhas notas ficam guardadas no github, posso utilizar o versionamento para verificar o histórico delas e como evoluíram.
- [aws route 53](https://aws.amazon.com/pt/route53/): gerenciamento de DNS
- [aws certificate manager](https://aws.amazon.com/certificate-manager/): certificado SSL/TLS