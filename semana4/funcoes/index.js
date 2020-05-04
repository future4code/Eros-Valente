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
/*
// EXERCÍCIO 5
console.log("")
console.log("EXERCÍCIO 5.")

function informaSeculo(ano) {
   let seculosNumRomanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
   let seculoAnoInformado = Math.ceil(ano/100)
   let seculoAnoEmRomanos = `O ano ${ano} pertence ao século ${seculosNumRomanos[(seculoAnoInformado - 1)]}`
   
   return seculoAnoEmRomanos
}


*/
//EXERCÍCIO 6
// item a


//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let quantidadeElementos = (array) => {
   return array.length 
}

// item b

function ehPar (numero) {
   let paridade = undefined
   if (numero % 2 === 0) {
      paridade = true
   } else {
      paridade = false
   }
   
   return paridade
}

// item c

function quantidadeDePares(array) {
   let pares = 0
   for (let i = 0; i < array.length; i++) {
      let paridade = array[i] % 2
      if (paridade === 0) {
         pares += 1
      } 
   }

   return pares
}

// item d

function quantidadePares(array) {
   let pares = 0
   for (let numero of array) {
      if (ehPar(numero) === true){
         pares += 1
      }
   }
  
   return pares
}





