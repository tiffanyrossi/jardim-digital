---
"title:":
"alias:":
"draft:": "false"
tags:
  - tipos/🪴planta
  - java
"description:":
---
## hello world

```java
public class HelloWorld { //declaração da classe
	public static void main(String[] args) { //método principal
		System.out.println("hello, world!"); //imprime "hello, world" no console
	}
}
```

### nome do arquivo e classe
no java, o nome do arquivo precisa ser idêntico ao da classe principal que ele contém. no exemplo acima, como a classe se chama `HelloWorld`, o arquivo deve ter o nome `HelloWorld.java`.

### métodos e blocos de código
em java, o código é estruturado em  *métodos*, que são blocos de código reutilizáveis que executam tarefas específicas. um código só pode ser executado dentro de um método. no exemplo, o comando que imprime o texto no console está sendo declarado no método `main()`, que é o método principal de execução do programa.

### método `main()`
o método `main()`é o ponto de entrada do programa java. é nele que a execução do código se inicia, e é o único método que pode ser executado diretamente, sem a necessidade de criar um objeto de classe. a sua assinatura segue um padrão específico `public static void main(String[] args)`, onde:
- `public`: indica que o método é público, ou seja, pode ser acessado por qualquer outra classe dentro do programa;
- `static`: significa que o método está associado à classe em si, não a um objeto específico da classe;
- `void`: o método não retorna nenhum valor;
- `String[] args`: representa um array de strings, que contém argumentos que são passados para o programada quando ele é executado.

### compilação e execução
passos para executar o programa no terminal:
1. salvar o arquivo como `HelloWorld.java`
2. `javac HelloWorld.java`: [[fundamentos de java#javac|compila]] a classe para [[bytecode]], gerando um arquivo `HelloWorld.class`. esse arquivo é o que será executado pela [[fundamentos de java#JVM (java virtual machine)|JVM]].
3. `java HelloWorld`: roda a classe `HelloWorld` do arquivo compilado para [[bytecode]].