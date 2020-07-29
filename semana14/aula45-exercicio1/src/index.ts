
/*
a) usando a propriedade process.argv

b) e c)
*/ 



const nome: string = process.argv[2]
const idade: number = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Daqui 7 anos você terá ${idade + 7}`)





