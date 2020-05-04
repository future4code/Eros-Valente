/* EXERCÍCIOS DE INTERPRETAÇÃO DE  CÓDIGO.

EXERCÍCIO 1

a. minhaFuncao(2) - o resultado da função será um array vazio
b. minhaFuncao(5) - o resultado da função será [0, 1, 0, 1, 2, 3]
c. minhaFuncao(8) - o resultado da função será [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

--------------------------------------------------

EXERCÍCIO 2

a. 0
   2
   undefined

b. funcionária da mesma forma, da forma como ela foi definida o importante é que os argumentos dados a ela quando for chamada sejam um array e os itens que se deseja encontrar no array.  
dessa forma ela entendera que o array (qualquer que seja) é a "lista" que ela terá que iterar e o número é o "nome" que ela terá que procurar para printar seu índice
---------------------------------------------------

EXERCÍCIO 3

O código tem um função que recebe um array com qualquer quantidade de números e devolve um array que contenha a soma e a multiplicação de todos os números do array origina.
talvez um nome melhor poderia ser somaMultiplicaItens()
--------------------------------------------------
*/
/*
console.log("EXERCÍCIOS DE ESCRITA DE CÓDIGO")
// EXERCÍCIO 4
console.log("EXERCÍCIO 4")
// Item a
console.log("item a.") 

function converteIdade(idadeHumano) {
   let idadeCanina = idadeHumano * 7
   
   return idadeCanina
}


// Item b
console.log("")
console.log("item b.")

function dadosPessoa (nome, idade, endereco, estudante) {
   let dadosConcatenados = ``
   if (estudante === true) {
      dadosConcatenados = `Eu sou ${nome}, tenho ${idade} anos, moro na ${endereco} e sou estudante`
   } else {
      dadosConcatenados = `Eu sou ${nome}, tenho ${idade} anos, moro na ${endereco} e não sou estudante`
   } 

   return dadosConcatenados
}
*/

// EXERCÍCIO 5
console.log("")
console.log("EXERCÍCIO 5.")



/*
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

*/







