let numero1: number = Number(process.argv[3])
let numero2: number = Number(process.argv[4])
let resultado: number

switch(process.argv[2]) {
    case "add":
        console.log(`Resposta: ${numero1 + numero2}`)
        break
    case "sub":
        console.log(`Resposta: ${numero1 - numero2}`)
        break   
    case "mult":
        console.log(`Resposta: ${numero1 * numero2}`)
        break 
    case "div":
        console.log(`Resposta: ${numero1 / numero2}`)    
        break
    default:
        console.log("Por favor passe os parâmetros: operacao(add, sub, mult ou div), número 1 e número 2")
}

