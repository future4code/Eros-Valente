/* EXERCÍCIOS DE INTERPRETAÇÃO DE  CÓDIGO.

EXERCÍCIO 1

O código pega a partir do prompt um número digitado pelo usuário e armazena na variavel "respostaDoUsuario" (linha 1)

porém tudo que é digitado no prompt é armazenado como string, então a linha a seguir transforma a variavel "respostaDoUsuario"
em um dado do tipo número e o armazena na variável "numero". (linha 2)

a seguir com a condicional "if" o código avalia se o o resto da divisão por 2 do número digitado pelo usuário é igual a 0 (linha 4)

dentro do bloco do if caso o resto da divisão por 2 do número digitado pelo usuário seja igual a 0 o console imprime a mensagem "Passou no teste" (linha 5)

caso o resto da divisão por 2 do número digitado não seja igual a 0 o programa passara para o bloco do else que irá imprimir a mensagem
"Não passou no teste."  (linha 7)

Portanto o programa avalia se um número é par ou impar, quando é par imprime a mensagem "passou no teste", quando é impar imprime "não passou no teste"

--------------------------------------------------

EXERCÍCIO 2

a. O código serve para retornar ao usuário o preço da fruta que ele buscou.
b. O preço da fruta  Maça  é R$ 2.25
c. R$ 24.55
d. O preço da fruta  Pêra  é  R$  5 (pois ao retirar o break indicado
o programa passará para a linha seguinte e substituirá o preço da Pêra que é R$5.5 pelo preço estipulado no default R$ 5.0 )

--------------------------------------------------

EXERCÍCIO 3

Com o código da forma que está a mensagem do terminal será de erro dizendo que a varável mensagem não está definida.
O erro acontece pois a variável mensagem foi criada dentro do bloco do primeiro if, portando dentro de seu escopo,
as variaveis mensagens dentro dos escopos do segundo if e do else não são reconhecidas pelo programa pois é como se
elas não tivessem sido criadas ainda.
portanto se quisermos que o programa funcione corretamente a solução seria ou criar a variavel dentro de cada escopo 
usando o let (e ai não importaria elas terem o mesmo nome) ou criar uma variavel fora antes das condicionais, no escopo global.

--------------------------------------------------
*/
/*
console.log("EXERCÍCIOS DE ESCRITA DE CÓDIGO")
// EXERCÍCIO 4
console.log("EXERCÍCIO 4")
// Item a
console.log("item a.") 

let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));


if (primeiroNumero > segundoNumero) {
   console.log(primeiroNumero, segundoNumero)
} else {
   console.log(segundoNumero, primeiroNumero)
} // dessa forma se o primeiro e o segundo número forem iguais ele irá imprimir o segundo número antes do primeiro número  

// Item b
console.log("")
console.log("item b.")

let terceiroNumero = Number(prompt("Digite o terceiro número:"))
if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
   console.log(primeiroNumero, segundoNumero, terceiroNumero)
} else if (primeiroNumero > terceiroNumero && terceiroNumero > segundoNumero) {
   console.log(segundoNumero, primeiroNumero, terceiroNumero)
} else if (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero) {
   console.log(segundoNumero, primeiroNumero, terceiroNumero)
} else if (segundoNumero > terceiroNumero && terceiroNumero > primeiroNumero) {
   console.log(segundoNumero, terceiroNumero, primeiroNumero) 
} else if (terceiroNumero > segundoNumero && segundoNumero > primeiroNumero) {
   console.log(terceiroNumero, segundoNumero, primeiroNumero)
} else if (terceiroNumero > primeiroNumero && primeiroNumero > segundoNumero) {
   console.log(terceiroNumero, primeiroNumero, segundoNumero)
} 
// dessa forma caso os 3 números forem iguais o programa irá passar por todas as condições e não irá imprimir nada.

//item c
console.log("")
console.log("item c.")

if (primeiroNumero == segundoNumero && segundoNumero == terceiroNumero) {
   console.log("Todos os números são iguais. Digite ao menos um número diferente")
} else if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
   console.log(primeiroNumero, segundoNumero, terceiroNumero)
} else if (primeiroNumero > terceiroNumero && terceiroNumero > segundoNumero) {
   console.log(segundoNumero, primeiroNumero, terceiroNumero)
} else if (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero) {
   console.log(segundoNumero, primeiroNumero, terceiroNumero)
} else if (segundoNumero > terceiroNumero && terceiroNumero > primeiroNumero) {
   console.log(segundoNumero, terceiroNumero, primeiroNumero) 
} else if (terceiroNumero > segundoNumero && segundoNumero > primeiroNumero) {
   console.log(terceiroNumero, segundoNumero, primeiroNumero)
} else if (terceiroNumero > primeiroNumero && primeiroNumero > segundoNumero) {
   console.log(terceiroNumero, primeiroNumero, segundoNumero)
} 

*/
// EXERCÍCIO 5

// item a. https://drive.google.com/file/d/1oBerVx9pGRTuK3DwSN98lXUSlQd6FRhi/view?usp=sharing

console.log("")
console.log("Exercício 5")
console.log("")
console.log("item b.")
console.log("Obs: DIGITE APENAS n ou s para responder, onde n é não e s é sim")
console.log("")
let possuiOssos = prompt("O animal possui ossos?")
if (possuiOssos === "s") {
   let possuiPelos = prompt("O animal possui pelos?")
   if (possuiPelos === "s"){
      let racional = prompt("É um animal racional?")
      if (racional === "s") {
         console.log("Ser humano")
      } else{
         console.log("Mamífero não humano")
      }
   } else if (possuiPelos === "n"){
      let possuiPenas = prompt("O animal possui penas?")
      if (possuiPenas === "n"){
         let terrestre = prompt("É um animal terrestre?")
         if (terrestre === "s") {
            let ambienteAquatico = prompt("O animal passa parte da vida em ambiente aquático?")
            if (ambienteAquatico === "s") {
               console.log("Anfíbio")
            } else{
               console.log("Réptil")
            }
         } else {
            console.log("Peixe")
         }      
      
      } else {
         console.log("Ave")
      }
   }
} else {
   console.log("Invertebrado")
}
















