type dadosEstatistica = {
    maior: number,
    menor: number,
    media: number
}


function obterEstatisticas(numeros: number[]): dadosEstatistica {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: dadosEstatistica = { 
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c)

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => dadosEstatistica
}

// const amostraDeIdades: amostra =  {

//     numeros: [21, 18, 65, 44, 15, 18],
//     obterEstatisticas: (numeros) => {}
// }
