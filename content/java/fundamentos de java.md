---
"title:": fundamentos de java
"alias:": 
"draft:": "false"
tags:
  - java
  - "#semente"
"description:":
---
java é uma das plataformas mais utilizadas no mundo para desenvolvimento de aplicações, além disso é uma das linguagens de programação mais utilizadas no mundo. a *plataforma java* entrega um ambiente completo de desenvolvimento e execução de programas, composta por:
- [[#linguagem java|a linguagem de programação java]], uma linguagem de alto nível orientada a objetos;
- [[#JVM|JVM]] (java virtual machine), ambiente onde o código é executado;
- JRE (java runtime environment), que agrega a máquina virtual e alguns outros recursos de execução de aplicações java;
- [[#JDK (java developer kit)]], conjunto de utilitários para o desenvolvimento de aplicações em java.

>"java é uma linguagem de programação de propósito geral, concorrente, baseada em classes e orientada a objetos. projetada para ser simples o bastante para que a maioria dos programadores se torne fluente na linguagem"
>
>— **Java: Guia do Programador**, Peter Jandl Junior

----
## java SE (standard edition)
integra os elementos padrão da plataforma, e é utilizada no desenvolvimento de aplicações de pequeno e médio porte. inclui todas as APIs de base, além da JVM.
## java EE (enterprise edition)
utilizada em aplicações corporativas complexas. adiciona APIs específicas aos elementos padrão

----
## linguagem java
em java, os programas são escritos em arquivos com a extensão `.java`, em linguagem de alto nível. isso é o chamado código-fonte.

para que a máquina possa executar o código, o [[#javac|compilador]] irá transformar os arquivos `.java` em arquivos executáveis intermediários com a extensão `.class`.

os arquivos compilados contêm o código em *bytecode*, uma linguagem de baixo nível que é lida e executada pela [[#JVM (java virtual machine)]].
### características principais
java é uma linguagem *robusta*, que incentiva o *controle de erros*. usa [[tipos|tipos inteiros e ponto flutuante]] com *aritmética compatível com o padrão IEEE 754*, além de possuir suporte a *UNICODE*. possui *mecanismos de reflexão*, que determinam os tipos e informações dos objetos em uso em tempo de execução.

oferece suporte a tipos genéricos, anotações e [[lambdas em java|expressões lambda]]. java é *extensível dinamicamente* e naturalmente voltada para a construção de aplicações em *rede ou distribuídas*.
#### orientação a objetos
aplica conceitos de abstração, encapsulamento e hereditariedade. praticamente tudo são classes, exceto os [[tipos#tipos primitivos|tipos primitivos de dados]].
#### independência de plataforma
programas são compilados como *bytecodes*, uma forma intermediária de código que funciona como linguagem de máquina para a JVM, que é um interpretador de bytecodes para a plataforma na qual a JVM é executada. como o código é executado na máquina virtual, ela pode ser portada para outras plataformas, como windows ou linux. "*write once, run everywhere*".
#### concorrência
suporte para criação e uso de múltiplas threads, além do uso mais efetivo dos processadores multinúcleo.
#### segurança
possui mecanismos de segurança para evitar a alteração indesejada do código, que são flexíveis e capazes de minimizar riscos.
#### sem ponteiros
não permite manipular endereços de memória, nem exige que os objetos criados sejam explicitamente destruídos. a JVM inclui um automatic garbage collector.
#### performance
a [[#JDK (java developer kit)|JVM]] tem um compilador JIT (just in time), que converte os bytecodes em código nativo durante a carga do programa.

----
## ambiente de desenvolvimento java
#### JDK (java developer kit)
conjunto de ferramentas e bibliotecas essenciais para o desenvolvimento de aplicações em java, composta por:
##### javac
compilador, responsável por transformar o código java em *bytecode* (a linguagem entendida pela jvm)
##### JVM (java virtual machine)
é a máquina virtual onde o java é executado. interpreta e executa o código gerado pelo compilador.
##### bibliotecas java
coleções de classes e interfaces pré-definidas que oferecem funcionalidades como conexão com banco de dados, manipulação de arquivos, e muito mais.
##### outros
outras ferramentas úteis, como o depurador jdb (java debugger), e o gerador de documentação javadoc (java documentation generator)

>🔗 link para download: [Java Downloads | Oracle Brasil](https://www.oracle.com/br/java/technologies/downloads/)

### eclipse
eclipse é uma **IDE** (integrated development environment), ou seja, um software que oferece um ambiente para desenvolvimento de software com funcionalidades como editor de código, compilador, depurador, gerenciador de projetos etc. após a instalação, configurar a IDE para utilizar a JDK instalada: window > preferences > java > installed JREs

>🔗 link para download: [Eclipse Downloads | The Eclipse Foundation](https://www.eclipse.org/downloads/)