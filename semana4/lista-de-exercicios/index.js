/*

LISTA DE EXERCÍCIOS 

EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1

A função conversorDeMoeda irá converter o valor recebido em reais (R$) para dólar

No escopo da função a variável cotação irá receber o valor digitado pelo usuário no prompt que sera a cotação do Dólar, o valor é convertido de string para número (todo valor recebido através do prompt entra nó código como string).
a linha seguinte é o return da função que retornará a string "R$" seguida do valor recebido pela função multiplicado pelo valor da variável cotação (que foi digitada no prompt)

fora da função a variável meuDinheiro chama a função conversorDeMoedas com o valor que se deseja converter

o que é impresso no console: no console será impresso o valor da constante meuDinheiro

--------------------------------------------------------------------------------------------

EXERCÍCIO 2

A função investeDinheiro recebe as variaveis tipoDeInvestimento (uma string representando qual o tipo do investimento em que o dinheiro será aplicado) e valor (um número inteiro representando a quantida de dinheiro que se quer investir) em seu escopo é criada a variável valorAposInvestimento que inicialmente não recebe nenhum valor
a variavel recebida tipoDeInvestimento irá ser comparada dentro de uma condiciona switch case e de acordo com o seu valor irá atribuir a variável valorAposInvestimento 
o resultado da multiplicação entre a variável recebida valor e um número que corresponde a taxa de juros do investimendo passado na variável tipoDeInvestimento
caso a variável tipoDeInvestimento não seja uma string dos seguintes valores, Poupança, Renda Fixa, CDB ou Ações a função exibirá um alert

fora da função a variável novoMontante receberá a função investeDinheiro com a string "Ações" e o número 150, o valor da váriavel portanto será 150 multiplicado por 1.1 (taxa atribuida dentro da condicional switch case para "Ações")
e a variável segundoMontante receberá a função investeDinheiro com a string "Tesouro Direto"  o número 200, como "tesouro Direto" não está dentro da condicional como um case o navegador irá exibir um alert com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"

depois disso temos dois console.log, o primeiro imprime o valor da variável novoMontante que é 165 e o segundo imprime o valor da variável segundoMontante porém essa variável não tem valor o que ela recebeu na verdade foi o alert que já foi exibido na tela, então será impresso undefined.

---------------------------------------------------------------------------------------------

EXERCÍCIO 3

No escopo global são declaradas três variáveis como constanttes a numeros que recebe um array com vários números, array1 e array2 que recebem arrays vazios
um laço do tipo for of irá percorrer cada número do array numeros, dentro do bloco do for of a condicional if irá fazer a operação de resto da divisão entre o número atual do array por 2 e caso o resultado dessa divisão seja 0 esse número será adicionado ao array1
caso contrário a condicional vai para o else que adicionará o número no array2, o for of portanto, percorre o array numeros e adiciona os números pares no array1 e os impares no array2

os console.log após o for-of irão respectivamente imprimir, o tamanho do array número (Quantidade total de números 14), tamanho do array1 (6) e tamanho do array2 (8)

---------------------------------------------------------------------------------------------

EXERCÍCIO 4

No escopo global a constante numeros é declarada e recebe um array com vários números inclusive negativo.
a váriável numero1 recebe um valor infinito e a variável numero2 recebe o valor 0
um laço for-of com duas condicionais if em seu bloco irá percorrer o array numeros e para cada numero do array as condicionais if irão fazer as seguintes comparações, 
o primeiro irá comparar o número com a váriavel numero1 (valor infinito) se o número for menor a variável numuero1 passará a receber o valor do número atual do array
e assim sucessivamente até que seu valor seja o menor número eistente no array.
O segundo if do laço irá comparar o número atual do array à variável numero2 (valor 0) se o número  for maior, numero2 receberá o valor do número atual
Fora do laço dois console.log, o primeiro imprime o valor de numero1 que será o menor número do array numeros
o segundo imprime o o valor de numero2 que será o maior número do array numeros

=======================================================================================================

EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO  (como proposto estou colocando os exercícios dentro de funções não sei bem se da forma como foi solicitado, mas foi como eu entendi para fazer)

EXERCÍCIO 1

Usando as estruturas de laços como o while, for-of ou até mesmo uma função callback como o forEach

*/

function iteraLista(listaDeNumeros){ 
    
    let dobroListaDeNumeros = []
    let listaDeNegativos = []
    
    
    let i = 0
    while (i < listaDeNumeros.length) {   // exemplo de iteração com while
        let novoNumero = listaDeNumeros[i]*2
        dobroListaDeNumeros.push(novoNumero)
        i++
    }
    
    
    for(numero of listaDeNumeros) {     // exemplo de iteraçao com for-of        
        let numeroNegativo = numero*-1
        listaDeNegativos.push(numeroNegativo)
    }
     
    let numerosPares = []
    listaDeNumeros.forEach((numero, index, array) =>{    // exemplo de iteração com forEach
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        }
    })
    
    console.log(dobroListaDeNumeros)
    console.log(listaDeNegativos)
    console.log(numerosPares)

}

/*

EXERCÍCIO 2 

a) false

b) false

c) true

d) true

e) true

-----------------------------------------------------------------------------------------------


EXERCÍCIO 3

O código não funcionará adequadamente primeiro porque quantidadeDeNumeros está declarado como const mas sem valor,
e isso ira retornar um erro no console, outro problema é que se quisermos que esse número seja digitado pelo usuário
precisáriamos atribuir ela a um prompt e quantidadeDeNumeros sendo declarado com const não vai nos permitir alterar seu valor
Um outro erro no código que notei é que a condição de parada do while está como i maior ou igual ao número passado, isso irá imprimir um número a mais do que o esperado
E por ultimo a variável i tem o valor 0 e está sem incremento dentro do laço, isso vai gerar um loop infinito.
Abaixo o código com algumas alterações para conseguirmos o comportamento esperado.

*/

function quantidadeDePares() {  
    let quantidadeDeNumerosPares = Number(prompt("Digite um número:"))
    let i = 0 
    while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }
}

//--------------------------------------------------------------------------------------
// EXERCÍCIO 4

function classificaTriangulo (a, b, c) {
    let classificacao = ""
    if (a === 0 || b === 0 || c === 0) {
        classificacao = "Não é triângulo"
    }else if (a === b && b === c) {
        classificacao = "Equilátero"
    } else if (a === b || a === c || c === b) {
        classificacao = "Isósceles"    
    } else {
        classificacao = "não é triangulo"
    }
    return classificacao
};

// ----------------------------------------------------------------------------------
// EXERCÍCIO 5

function doisNumeros(numero1, numero2) {
    let maiorNumero = 0
    let menorNumero = 0
    let maiorDivisivelMenor = ""

    if (numero1 > numero2) {
        maiorNumero = numero1
        menorNumero = numero2
        if (maiorNumero % menorNumero === 0){
            maiorDivisivelMenor = `${maiorNumero} é divisível por ${menorNumero}`
        } else {
            maiorDivisivelMenor =`${maiorNumero} não é divisível por ${menorNumero}`

        }
    }else {
        maiorNumero = numero2
        menorNumero = numero1
    }
    let menorDivisivelMaior = `${menorNumero} não é divisível por ${maiorNumero}`
    let diferenca = maiorNumero - menorNumero

    console.log(`O maior é: ${maiorNumero} \n${menorDivisivelMaior} \n${maiorDivisivelMenor} \nA diferença entre eles é ${diferenca}`)
}

// EXERCICÍOS DE FUNÇÕES

// EXERCÍCIO 1

function exercicioUmFuncoes() { // criei essa função apenas para não imprimir no console sem que ela seja chamada
    
    function segundoMaiorMenor (listaNumeros) {
        function comparaNumeros (numero1, numero2) {
            return numero1 - numero2
        }
        let listaOrdenadaCrescente = listaNumeros.sort(comparaNumeros)
        let segundoMenor = listaOrdenadaCrescente[1]
        let segundoMaior = listaOrdenadaCrescente[listaOrdenadaCrescente.length - 2]
        console.log(`Segundo número menor da lista: ${segundoMenor} \nSegundo número maior da lista: ${segundoMaior}`)
    }
    
    segundoMaiorMenor([3, 5, 3, 40, 10, -3, 12, 30, 11, 23])
}


// EXERCÍCIO 2

let saudacao = () => {
    alert("Hello Labenu")
}

const exibeSaudacao = saudacao()

/* 
==========================================================================================================

EXERCÍCIOS DE OBJETOS

EXERCÍCIO 1

Objetos são estruturas com capacidade de armazenar e representar dados mais complexos, um objeto pode por exemplo armazenar todas as informações de uma ficha cadastral dos alunos de uma escola
e assim se quisermos acessar as informações dessas ficha separadamente ou fazer qualquer alteração nas informações, nós conseguimos graças a estrutura de sintaxe do objeto.
Acredito que devemos utilizar objetos ou array sempre que quisermos armazenar de forma mais adequada, para poder acessar com mais facilidade um conjunto de informações sobre um mesmo objeto. 

*/

//---------------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

let criaRetangulo = (lado1, lado2) => {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
    return retangulo
}

// --------------------------------------------------------------------------------------------------------

// EXERCÍCIO 3

function filmeFavorito() {
    const meuFilmeFavorito = {
        titulo: "Apocalypse Now",
        ano: "1979",
        diretor: "Francis Ford Coppola",
        elenco: ["Martin Sheen", " Marlon Brando", " Robert Duvall", " Denis Hopper", " Laurence Fishburn", " Harrison Ford"]
    }

    console.log(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.elenco}`)

}

//-------------------------------------------------------------------------------------------------------

// EXERCÍCIO 4

const dadosPessoa = {
    nome: "Frank Vincent Zappa",
    idade: 80,
    email: "centralscrutinizer@gmail.com",
    endereco: "7885 Woodrow Wilson Drive, LA, CA"
}

const anonimizarPessoa = (dadosPessoa) => {
    dadosPessoaAnonima = {
        ...dadosPessoa,
        nome: "ANÔNIMO" 
    }
    return dadosPessoaAnonima
}

// =======================================================================================

// EXERCÍCIOS DE FUNÇÕES DE ARRAY

// EXERCÍCIO 1

// a)

const listaPessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const listaMaiorDe20 = listaPessoas.filter((pessoa, index, array) => {
    return pessoa.idade >= 20 
})

// b)

const listaMenorDe20 = listaPessoas.filter((pessoa) => {
    return pessoa.idade < 20
})

// --------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 2

const array = [1, 2, 3, 4, 5, 6]

// a)

const arrayVezesDois = array.map((numero, index, arr) => {
    return numero * 2
})

// b) 

const arrayVezesTresString = array.map((numero) => {
    return String(numero * 3)
})

// c)

const arrayStringParImpar = array.map((numero) => {
    if (numero % 2 === 0) {
       let par =  `${numero} é par`
       return par
    } else {
        let impar = `${numero} é impar`
        return impar
    }
})

// ------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 3

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

// a)

let ficaNaFila = (pessoasNaFila) => {
    const pessoasPermitidas = pessoasNaFila.filter((pessoa, index, array) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasPermitidas
}


// b)

let retiraDaFila = (pessoasNaFila) => {
    const pessoasNaoPermitidas = pessoasNaFila.filter((pessoa, index, array) => {
        return pessoa.altura < 1.5 || pessoa.idade >= 60 || pessoa.idade <= 14
    })
    return pessoasNaoPermitidas
}

// ---------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 4

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]


let criaEmailConsultas = (consultas) => {
    const generoPronomeTratamento = consultas.map((paciente) => {
        if (paciente.genero === "masculino"){
            return {pronome: "Sr.", lembrete: "lembrá-lo"}
        } else if (paciente.genero === "feminino") {
            return {pronome: "Sra.", lembrete: "lembrá-la"}
        }
    })
    
    const listaEmails = consultas.map((paciente, index) => {
        if (paciente.cancelada === true) {
            let emailCancelamento = `Olá, ${generoPronomeTratamento[index].pronome} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`
            return emailCancelamento
        } else {
            let emailConfirmacao = `Olá, ${generoPronomeTratamento[index].pronome} ${paciente.nome}. Estamos enviando esta mensagem para ${generoPronomeTratamento[index].lembrete} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
            return emailConfirmacao 
        }
    })
    return listaEmails
}

// --------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 5

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


let atualizaSaldo = (contas) => {
    const totalGastos = contas.map((conta) => {
        let gastosTotais = 0
        for (let valor of conta.compras) {
            gastosTotais += valor
        }
        return gastosTotais
    })
    contas.forEach((conta, index) => {
        conta.saldoTotal -= totalGastos[index]

    })
    return contas
}



