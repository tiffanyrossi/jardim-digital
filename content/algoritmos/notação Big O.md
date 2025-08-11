---
"title:": " notação big O"
"draft:": "false"
tags:
  - algoritmos
"description:": 
tipo: 🪴
---
a notação big O é uma notação que determina a rapidez de um algoritmo.

para fazer uma comparação entre os tempos de execução de dois algoritmos, não é interessante comparar o tempo que cada algoritmo leva para ser executado, pois eles podem crescer com taxas diferentes.

a diferença de tempo entre a execução da [[pesquisa binária#pesquisa simples|pesquisa simples]] e [[pesquisa binária]] para um grupo de poucos elementos pode ser pequena, mas conforme a quantidade de elementos aumenta, a diferença entre elas se mostra muito maior: com 100 elementos, a pesquisa binária é apenas 15 vezes mais rápida do que a simples. porém, com 1 bilhão de elementos, a pesquisa binária é 33 milhões de vezes mais rápida.

|                             | pesquisa simples | pesquisa binária |
| --------------------------- | ---------------- | ---------------- |
| **100 elementos**           | 100 ms           | 7 ms             |
| **10.000 elementos**        | 10 segundos      | 14 ms            |
| **1.000.000.000 elementos** | 11 dias          | 32 ms            |

não basta saber apenas quanto tempo um algoritmo leva para ser executado, mas também se o tempo de execução aumenta conforme a lista aumenta. para isso é utilizada a notação big O, que determina quão rápido é um algoritmo.

a notação big O informa a rapidez com que um algoritmo cresce, permitindo a comparação entre o número de operações que são necessárias para a execução - não existe uma indicação de unidade de tempo. basicamente, a notação big O é escrita assim:

**big O → $O(n)$ ← número de operações**

considerando uma lista com $n$ itens, a pesquisa simples tem tempo de execução de $O(n)$, pois precisa de $n$ execuções. no caso da pesquisa binária, ela precisa de $log_{n}$ operações para percorrer uma lista de tamanho $n$. na notação big O, seu tempo de execução é $O(log_{n})$. 

é importante entender que a notação big O não conta quantas operações foram necessárias para uma execução específica, mas o **tempo de execução para a pior hipótese**. é um dado generalista - ou uma garantia: determina o tempo de execução mais demorado possível para aquele algoritmo.

## tempos de execução comuns

| big O                             | exemplo                                                 |
| --------------------------------- | ------------------------------------------------------- |
| $O(log_{n})$ (tempo logarítimico) | [[pesquisa binária]]                                    |
| $O(n)$ (tempo linear)             | [[pesquisa binária#pesquisa simples\|pesquisa simples]] |
| $O(n*log_{n})$                    | ordenação quicksort (algoritmo rápido de ordenação)     |
| $O(n²)$                           | ordenação por seleção (algoritmo lento de ordenação)    |
| $O(n!)$                           | [[caixeiro viajante]] (algoritmo super lento)           |
