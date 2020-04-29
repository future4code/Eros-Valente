/* EXERCÍCIOS DE INTERPRETAÇÃO DE  CÓDIGO.

EXERCÍCIO 1

O código está criando uma variável chamada sum e dando a ela o valor 0 (linha 1)
dentro do laço for cria a variável i e define 0 estipulando o início do laço,
define a condição de continuação como i menor que 15 e o incremento de i++ que somará um ao i (linha 2)
dentro do bloco do for a variável sum irá se somar a ela mesma a cada incremento do i até que o i chegue a 15 e o programa saia do laço de repetição
e após isso o programa irá imprimir o valor final da variável sum.

o resultado impresso sera 105

--------------------------------------------------

EXERCÍCIO 2

a. o comando push adiciona um elemento na posição final do array
b. [10, 15, 25, 30]
c. se tivesse valor 3 - [12, 15, 18, 21, 27, 30]
   se tivesse o valor 4 - [12]

---------------------------------------------------

DESAFIO 1

O resultado exibido no console seria:

0
00
000
0000

--------------------------------------------------
*/

console.log("EXERCÍCIOS DE ESCRITA DE CÓDIGO")
// EXERCÍCIO 3
console.log("EXERCÍCIO 3")
// Item a
console.log("item a.") 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maiorNumArray = 0
let menorNumArray = 1/0
for(let numero of arrayOriginal) {
   if(numero > maiorNumArray) {
      maiorNumArray = numero
   }
   if(numero<menorNumArray){
      menorNumArray = numero
   }
}
console.log(`O maior número do array é ${maiorNumArray} e o menor é ${menorNumArray}`)

// Item b
console.log("")
console.log("item b.")

let novoArray = []
let i = 0

while (i < arrayOriginal.length){
   let itemNovoArray = (arrayOriginal[i])/10
   novoArray.push(itemNovoArray)
   i++
}
console.log(novoArray)

//item c
console.log("")
console.log("item c.")

let arrayPares = []

for (let item of arrayOriginal) {
   if (item % 2 === 0) {
      arrayPares.push(item)

   }
}

console.log(arrayPares)

//item d
console.log("")
console.log("item d.")

i = 0
let arrayString = []
while (i < arrayOriginal.length){
  let itemArrayOriginal = String(arrayOriginal[i])
  let itemNovoArray = `O elemento do index ${i} é o ${itemArrayOriginal}`
  arrayString.push(itemNovoArray)
  i += 1
}  
console.log(arrayString)


// DESAFIO 2
console.log("")
console.log("DESAFIO 2 ")
console.log("")

let numeroPensado = Number(prompt("Escolha um número"))
console.log("Vamos jogar!")
numeroErrado = true
let tentativas = 1

while(numeroErrado){
   let numeroChutado = Number(prompt("Qual número eu pensei?"))
   console.log(`O número chutado foi ${numeroChutado}`)
   if(numeroChutado === numeroPensado){
      numeroErrado = false
      console.log("Acertou!")
      console.log(`O número de tentivas foi ${tentativas}`)
   } else if (numeroChutado > numeroPensado) {
      console.log("Errrrrrrrou, é menor")
   } else {
      console.log("Errrrrrrrou, é maior")
   }
   tentativas++  
}

// DESAFIO 3
console.log("")
console.log("DESAFIO 3 ")
console.log("")

let numeroAleatorioEscolhido = Math.floor(Math.random() * 100) + 1
console.log("Vamos jogar!")
numeroErrado = true
let tentativasJogo2 = 1

while(numeroErrado){
   numeroChutado = Number(prompt("Qual número eu pensei?"))
   console.log(`O número chutado foi ${numeroChutado}`)
   if(numeroChutado === numeroAleatorioEscolhido){
      numeroErrado = false
      console.log("Acertou!")
      console.log(`O número de tentivas foi ${tentativasJogo2}`)
   } else if (numeroChutado > numeroAleatorioEscolhido) {
      console.log("Errrrrrrrou, é menor")
   } else {
      console.log("Errrrrrrrou, é maior")
   }
   tentativasJogo2++  
}









