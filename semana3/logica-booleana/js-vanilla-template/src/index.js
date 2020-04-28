/* EXERCÍCIOS DE INTERPRETAÇÃO

exercício 1

a. false
b. false
c. true
d. false
e. boolean

exercício 2

a. variaveis que guardam mais de uma informação ao mesmo tempo;
   se declara colocando o conteudo de sua variável entre colchetes e separados por virgulas;
   ex: let array = [1, 2, 3, 4] 

b. 0

c. usando o comando .length;
ex: array.length

d. I. undefined
   II. null
   III. 11
   IV. 3 e 4
   V. 19 e 9
   VI. 3
   VII. 1

------------------------------------------------------- */


// EXERÍCICIOS DE ESCRITA DE CÓDIGO

// Exercício 1

console.log("EXERCÍCIOS DE ESCRITA DE CÓDIGO");
console.log("");
console.log("EXERCÍCIO 1");

let f = 77;
let k = (((f - 32) * 5) / 9) + 273.15;
console.log ("a.", k, "K");

c = 80;
f = ((c * 9) / 5) + 32;
console.log ("b.", f, "°F")

c = 30;
f = ((c * 9) / 5) + 32;
k = (((f - 32) * 5) / 9) + 273.15;
console.log ("c.", f, "°F e", k, "K");

c = prompt("Digite uma temperatura em Celsius para convertê-la");
f = ((c * 9) / 5) + 32;
k = (((f - 32) * 5) / 9) + 273.15;
console.log ("d.", f, "°F e", k, "K"); 

// Exercício 2


let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
let filme = prompt("Você tem algum filme favorito?")
let viagem = prompt("Qual país no mundo você mais tem vontade de conhecer?")
let animal = prompt("Que animal você gostaria de ser?")

console.log("")
console.log("EXERCÍCIO 2");
console.log("1. Qual o seu nome?")
console.log("Resposta:", nome)
console.log("Qual sua idade?")
console.log("Resposta:", idade)
console.log("Você tem algum filme favorito?")
console.log("Resposta:", filme)
console.log("Qual país no mundo você mais tem vontade de conhecer?")
console.log("Resposta:", viagem)
console.log("Que animal você gostaria de ser?")
console.log("Resposta:", animal)

// Exercício 3

console.log("");
console.log("EXERCÍCIO 3");
let kwhValor = 0.05;
let kwhQuantidade = 280;
let valorTotalKwh = kwhQuantidade * kwhValor
console.log("a.", valorTotalKwh);

let desconto = 0.15;
valorDesconto = valorTotalKwh * desconto;
valorTotalKwh -= valorDesconto

console.log("b.", valorTotalKwh)

// Desafios

console.log("")
console.log("DESAFIOS")

// item a.

let libra = 20
let kg = libra / 2.20462
console.log("a. 20lb equivalem a", kg, "kg")


// item b.

let onca = 10.5
kg = onca / 35.274  
console.log("b. 10.5oz equivalem a", kg, "kg")

// item c.

let milhas = 100
let metros = milhas / 0.000621371
console.log("c. 100mi equivalem a", metros, "m")

// item d

let feets = 50
metros = feets / 3.28084
console.log("d. 50ft equivalem a", metros, "m")

// item e

let galao = 103.56
let litros = galao / 0.264172
console.log("e. 103.56gal equivalem a", litros, "l")

// item f

let xicaras = 450
litros = xicaras / 4.2268
console.log("f. 450xic equivale a", litros, "l")

// item g
// modificando item d

feets = prompt("Quntos pés deseja converter em metros?")
metros = feets / 3.28084
console.log("g. ", feets + "ft equivalem a", metros, "m")
