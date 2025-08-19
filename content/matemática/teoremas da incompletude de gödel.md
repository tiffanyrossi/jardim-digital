---
"title:":
"alias:":
"draft:": "false"
tags:
  - teoremas
  - tipos/🌱semente
"description:":
---
os **Teoremas da Incompletude de Gödel**, de [Kurt Gödel](https://pt.wikipedia.org/wiki/Kurt_G%C3%B6del) ([[prova matemática|provados]] por ele em 1931) destruíram a busca por uma *teoria matemática de todas as coisas*. na época, matemáticos tentavam definir um conjunto de axiomas que fosse completo e consistente, mas que também servisse como base para todos os conceitos matemáticos. porém, Gödel provou que quaisquer conjuntos formais que tivessem poder suficiente para expressar a aritmética básica seriam inevitavelmente *incompletos*.

pensando em um sistema de axiomas - um conjunto de regras básicas que servem como base para o desenvolvimento de [[o que é um teorema|teoremas]] - que seja consistente (ou seja, que não tenha contradições) e suficientemente expressivo, sempre haverá verdades matemáticas que não poderão ser provadas dentro do próprio sistema.

assim, a matemática se depara com um paradoxo: se um sistema é *completo*, ele pode provar todas as verdades matemáticas, mas também pode gerar contradições (tornando-o *inconsistente*). se um sistema é *consistente*, não gera contradições, mas também não pode [[prova matemática|provar]] todas as verdades matemáticas, ficando *incompleto*.

as implicações dos teoremas de Gödel são profundas e abrangentes. primeiro, demonstram que nem todos os aspectos da matemática podem ser formalizados em um único sistema axiomático, e sugerem que a verdade matemática pode ir além do que se pode provar dentro de um sistema formal. também questionam a natureza da matemática, sua relação com a lógica e a existência de uma verdade matemática absoluta.

## sentença de gödel
a sentença de Gödel, também conhecida como *sentença G*, diz:

> "eu não posso ser provada dentro desse sistema."

- caso a sentença G seja falsa, podemos prová-la dentro do sistema, o que leva a uma contradição;
- caso a sentença G seja verdadeira, significa que ela não pode ser provada dentro do sistema, confirmando sua própria afirmação.

essa *autorreferência paradoxal* demonstra que o sistema é incompleto: 
- se o sistema for completo, ele também pode provar a sentença G , levando a uma contradição;
- se o sistema for consistente (livre de contradições), ele não pode provar a sentença G, revelando sua incompletude

assim, um conjunto de axiomas não pode se auto provar - **é impossível haver um conjunto da teoria matemática de todas as coisas, porque ele não pode ser [[prova matemática|provado]] fora de si mesmo**.