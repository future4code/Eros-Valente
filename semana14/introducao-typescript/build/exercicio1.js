// a) 
var minhaString = "bananinha";
// ao atribuir um número a variável minhaString o seguinte warning é exibido: "Type '23' is not assignable to type 'string'"
// b)
var meuNumero = "número 10";
// c) 
var pessoa = {
    nome: "Eros",
    idade: 32,
    corFavorita: "Todas"
};
// d) e e)
var cores;
(function (cores) {
    cores["VERMELHO"] = "vermelho";
    cores["LARANJA"] = "laranja";
    cores["AMARELO"] = "amarelo";
    cores["VERDE"] = "verde";
    cores["AZUL"] = "azul";
    cores["ANIL"] = "anil";
    cores["VIOLETA"] = "violeta";
})(cores || (cores = {}));
var pessoa1 = {
    nome: "Goku",
    idade: 24,
    corFavorita: cores.LARANJA
};
var pessoa2 = {
    nome: "Vegeta",
    idade: 29,
    corFavorita: cores.AZUL
};
var pessoa3 = {
    nome: "Kuririn",
    idade: 24,
    corFavorita: cores.AMARELO
};
// e)
console.log(pessoa3.corFavorita);
