---
"title:": pesquisa binária
"alias:":
"draft:": "false"
tags:
  - tipos/🪴planta
  - algoritmos
"description:":
---
a **pesquisa binária** é um algoritmo de busca que recebe como entrada uma lista ordenada de elementos. se o item a ser buscado está na lista, o algoritmo retorna sua posição. caso contrário, retorna `null`.

## pesquisa simples
na *pesquisa simples*, a busca é feita tentando adivinhar a posição de determinado item chutando um por vez, de forma ordenada (1ª? 2ª? 3ª? etc.),  logo eliminando apenas um número por tentativa. isso gera um número muito grande de tentativas para localizar o item - se o item ocupar a posição 99, por exemplo, serão necessárias 99 tentativas para encontrá-lo.

## pesquisa binária
já na pesquisa binária, é possível chutar um número intermediário e descobrir se a posição a ser localizada está abaixo ou acima dele. desta forma, a cada tentativa se eliminam metade dos números restantes. por exemplo, buscando uma posição entre 1 a 100 e chutando a 50ª posição, é possível saber se a posição buscada é maior ou menor do que 50. assim já foram eliminadas metade das posições em apenas uma tentativa. 

para uma lista de $n$ números, a pesquisa binária precisa de no máximo $log_2n$ tentativas para retornar o valor correto, enquanto a pesquisa simples precisa de até $n$ etapas. para entender melhor: [[entendendo logaritmos]]. 

> [!info]
> a pesquisa binária só funciona quando a lista está ordenada.

## implementação
para criar um algoritmo de busca ordenada, o exemplo utilizará *arrays*: tipo de objeto que guarda uma sequência de valores em uma mesma variável, em posições consecutivas. as posições são numeradas a partir do $0$.

a função `binarySearch()` recebe dois argumentos: um array ordenado `list` e um número inteiro `item`. se o item estiver na lista, a função irá retornar a posição onde ele está armazenado.

o primeiro passo dessa função é verificar se a lista está vazia; caso esteja, retorna -1 e encerra a execução.

caso a lista tenha tamanho $>0$, a execução segue e são declaradas duas variáveis de números inteiros:
- `low` representa a posição mais baixa em que a busca será realizada. é iniciada com valor de $0$ pois a primeira busca é feita na lista inteira;
- `high` representa a posição mais alta em que a busca será realizada. é iniciada com tamanho da lista $- 1$ para compreender todas as posições.

então, se inicia um laço de repetição `while`, que irá se repetir enquanto o valor mais baixo for menor que o valor mais alto. dentro desse laço, é inicializada a variável `mid`, responsável por definir a média entre as posições `low` e `high`, que irá representar a posição do primeiro chute (variável `guess`).

se o valor do chute `guess` for igual ao valor do `item`, o algoritmo encontrou a posição correta, por meio da função `guessEqualsItem()`.

caso contrário, irá testar se o número do chute é maior que o item, na função `guessGreaterThanItem()`. em caso afirmativo, atribui à variável `high` o valor do meio da lista `mid` $-1$. assim, a próxima tentativa já se iniciará excluindo a segunda metade da lista, pois já  se sabe que o valor é *menor*.

caso o valor do chute seja menor do que o item,  condição que é testada pela função `guessLessThanItem()`, é atribuído à variável `high` o valor do meio da lista `mid` $+1$, excluindo toda a primeira metade da lista, pois já se sabe que o valor é *maior*.

como estamos dentro de um laço de repetição, a próxima execução irá acontecer com o número de possibilidades reduzido pela metade, e assim por diante até que seja encontrado o valor de `item` na lista.

```java
    public static int binarySearch(int[] list, int item) {
		
        if (isListEmpty(list)) {
            return -1;
        }

        int low = 0;
        int high = list.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int guess = list[mid];

            if (guessEqualsItem(guess, item)) {
                return mid;
            } else if (guessGreaterThanItem(guess, item)) {
                high = mid - 1;
            } else if(guessLessThanItem(guess, item)) {
                low = mid + 1;
            }
        }

        return -1;
    }
```

```java
    public static boolean isListEmpty(int[] myList) {
        int listSize = myList.length;
        if (listSize == 0) {
            return true;
        }
        return false;
    }

```

```java
    public static boolean guessEqualsItem(int guess, int item) {
        if (guess != item) {
            return false;
        }
        return true;
    }
```

```java
    public static boolean guessGreaterThanItem(int guess, int item) {
        if (guess < item) {
            return false;
        }
        return true;
    }
```

```java
    public static boolean guessLessThanItem(int guess, int item) {
        if (guess > item) {
            return false;
        }
        return true;
    }
```

## tempo de execução
uma dos critérios na escolha de qual algoritmo utilizar é o [[notação Big O#tempos de execução comuns|tempo de execução]], especialmente se o objetivo for otimizar tempo e espaço. 

como a **pesquisa simples** se dá pela busca de número por número, o número máximo de tentativas para se chegar ao resultado é igual ao tamanho da lista. assim, ela funciona com **tempo de execução linear**. uma lista de $100$ números precisa de até $100$ tentativas.

no caso da pesquisa binária, existe uma economia de tempo, pois ela funciona com [[entendendo logaritmos|tempo de execução logarítmico]]. nessa situação, uma mesma lista de $100$ números precisa de até $7$ tentativas para encontrar o item buscado.

tempo de execução linear = $O(n)$
tempo de execução logarítmico = $O(log_{n})$