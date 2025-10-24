---
"title:":
"alias:":
"draft:": "false"
"description:":
tags:
  - logaritmos
  - tipos/🌱semente
---

> "logaritmos são uma outra forma de pensar em expoentes"

na **equação exponencial**, sabemos que *2 elevado à 4ª potência é igual a 16*, ou seja: $2^4=16$.

caso se queira inverter e descobrir *2 elevado a qual potência é igual a 16?*, a resposta é 4. isso é expressado pela *equação logarítmica*: $log_{2}16=4$, ou seja "log de 16 na base 2 é igual a 4".

$$
2^4 = 16 <=> log_{2}16=4
$$
as duas equações descrevem a mesma relação entre os números $2$, $4$ e $16$, em que $2$ é a base e $4$ é o expoente. a diferença é que a **equação exponencial isola a potência** ($16$), enquanto a **equação logarítmica isola o expoente** ($4$).

a expressão $log_{2}16$ ("log de 16 com base 2") significa "quantos 2s deve-se multiplicar para chegar a 16?". a resposta é $4$: $2*2*2*2=16$, então, $log_{2}16=4$

logaritmos são o oposto de exponenciais:
$$
10² = 100 <=> log_{10} 100 = 2
$$
$$
10³ = 1000 <=> log_{10} 1000 = 3
$$
$$
2³ = 8 <=> log_{2} 8 = 3
$$
$$
2^4 = 16 <=> log_{2} 16 = 4
$$
$$
2^5 = 32 <=> log_{2}32 = 5
$$
## definição de logaritmo
$$
log_{b}a = c <=> b^c=a
$$
as duas equações descrevem a mesma relação entre $a$, $b$ e $c$:
- $b$ é a base;
- $c$ é o expoente
- $a$ é o argumento

nessa relação entre exponencial e logaritmo, a base do logaritmo é igual à base do expoente.

## cálculo de logaritmos
para calcular $log_{4}64$:
1. igualar a expressão a $x$:
   $$
   log_{4}64=x
   $$
2. transformar em uma equação exponencial:
   $$
   4^x=64
   $$
3. $4$ elevado a qual potência é $64$?
   $$
   4^3=64
   $$
4. portanto, o resultado é $3$:
   $$
   log_{4}64=3
   $$
   
## restrições

| **restrição** | **raciocínio**                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| $b>0$         | em uma função exponencial, a base $b$ sempre deve ser positiva                                                                             |
| $a>0$         | $log_{b}a = c$ significa que $b^c=a$; como um número positivo elevado a qualquer potência é sempre positivo, ou seja, $b^c>0$, então $a>0$ |
| $b≠1$         | $1$ elevado a qualquer potência é sempre $1$, portanto a base nunca pode ser $1$.                                                          |


> [!NOTE]
> quando se fala sobre a [[notação Big O]], $log$ sempre vai significar $log_{2}$


---
#### 🔗 fontes
- [Khan Academy](https://pt.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/a/intro-to-logarithms)