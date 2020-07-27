// a) 
let minhaString: string = "bananinha"
// ao atribuir um número a variável minhaString o seguinte warning é exibido: "Type '23' is not assignable to type 'string'"

// b)
let meuNumero: number | string = "número 10"

// c) 

const pessoa: {nome: string, idade: number, corFavorita: string } = {
    nome: "Eros",
    idade: 32,
    corFavorita: "Todas"
}

// d) e e)

enum cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const pessoa1: Pessoa = {
    nome: "Goku",
    idade: 24,
    corFavorita: cores.LARANJA
}

const pessoa2: Pessoa = {
    nome: "Vegeta",
    idade: 29,
    corFavorita: cores.AZUL
}

const pessoa3: Pessoa = {
    nome: "Kuririn",
    idade: 24,
    corFavorita: cores.AMARELO
}






