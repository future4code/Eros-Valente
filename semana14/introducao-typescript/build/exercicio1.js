let minhaString = "bananinha";
let meuNumero = "número 10";
const pessoa = {
    nome: "Eros",
    idade: 32,
    corFavorita: "Todas"
};
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
const pessoa1 = {
    nome: "Goku",
    idade: 24,
    corFavorita: cores.LARANJA
};
const pessoa2 = {
    nome: "Vegeta",
    idade: 29,
    corFavorita: cores.AZUL
};
const pessoa3 = {
    nome: "Kuririn",
    idade: 24,
    corFavorita: cores.AMARELO
};
//# sourceMappingURL=exercicio1.js.map