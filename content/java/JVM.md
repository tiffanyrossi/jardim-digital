---
title:
aliases:
draft: "false"
tags:
  - tipos/🌱semente
  - java
description:
permalink:
comments:
---
java virtual machine é uma máquina virtual poderosa, capaz de executar aplicações java de forma eficiente, portátil e segura.

a JVM executa aplicações [[fundamentos de java|java]], transformando o [[bytecode]] em linguagem de máquina. é o componente que torna o lema "*escreva uma vez, rode em qualquer lugar*" possível, pois garante que um programa em java possa ser executado em diferentes sistemas operacionais. a JVM inspeciona o código antes da execução, garantindo que seja seguro e de acordo com os padrões da plataforma.

## componentes
### class loader
a JVM utiliza o **class loader** para carregar classes java em tempo de execução, verificando, organizando e alocando as classes na memória.

### execution engine
é a parte da JVM que executa o bytecode, dividido em:
- **interpretador**: interpreta e executa o [[bytecode]] gerado pelo [[fundamentos de java#javac|compilador javac]], transformando-o em código de máquina.
- **JIT compiler**: otimiza o desempenho, convertendo partes frequentes do código em código nativo.
- **hotspot**: utilizado para identificar e otimizar os trechos de código mais utilizados.

### memory area
gerencia, aloca e organiza memória para variáveis, objetos e threads. é dividida em:
- **heap**: onde os objetos são alocados.
- **stack**: onde métodos, variáveis locais e dados de thread são alocados.
- **method area/metaspace**: dados de classe e métodos, além de informações do tempo de execução.
- **program counter register**: guarda o endereço da próxima instrução a ser executada.
- **native method stack**: suporta a execução de métodos nativos.

### garbage collector
automatiza a liberação de memória ocupada por objetos não utilizados, evitando vazamentos de memória.

### JVI - java native interface
facilita a interação com bibliotecas e APIs escritos em linguagens como C e C++.

### runtime environment
ambiente de execução que conecta e coordena todos os outros componentes, garantindo a correta execução de um programa java.
