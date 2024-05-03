---
"title:": fundamentos de java
"alias:": 
"draft:": "false"
tags:
  - java
"description:":
---
>"java é uma linguagem de programação de propósito geral, concorrente, baseada em classes e orientada a objetos. projetada para ser simples o bastante para que a maioria dos programadores se torne fluente na linguagem"
>
>— [[java: guia do programador]], Peter Jandl Junior

----
## java SE (standard edition)
integra os elementos padrão da plataforma, e é utilizada no desenvolvimento de aplicações de pequeno e médio porte. inclui todas as APIs de base, além da JVM.
## java EE (enterprise edition)
utilizada em aplicações corporativas complexas. adiciona APIs específicas aos elementos padrão

----
## características principais
java é uma linguagem *robusta*, que incentiva o *controle de erros*. usa tipos inteiros e ponto flutuante com *aritmética compatível com o padrão IEEE 754*, além de possuir suporte a *UNICODE*. possui *mecanismos de reflexão*, que determinam os tipos e informações dos objetos em uso em tempo de execução.
oferece suporte a tipos genéricos, anotações e expressões lambda. java é *extensível dinamicamente* e naturalmente voltada para a construção de aplicações em *rede ou distribuídas*.
### orientação a objetos
aplica conceitos de abstração, encapsulamento e hereditariedade. praticamente tudo são classes, exceto os tipos primitivos de dados
### independência de plataforma
programas são compilados como bytecodes, uma forma intermediária de código que funciona como linguagem de máquina para a JVM, que é um interpretador de bytecodes para a plataforma na qual a JVM é executada
### concorrência
suporte para criação e uso de múltiplas threads, além do uso mais efetivo dos processadores multinúcleo.
### segurança
possui mecanismos de segurança para evitar a alteração indesejada do código, que são flexíveis e capazes de minimizar riscos.
### sem ponteiros
não permite manipular endereços de memória, nem exige que os objetos criados sejam explicitamente destruídos. a JVM inclui um automatic garbage collector.
### performance
a JVM tem um compilador JIT (just in time), que converte os bytecodes em código nativo durante a carga do programa.