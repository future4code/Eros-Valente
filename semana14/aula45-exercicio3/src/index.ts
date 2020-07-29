import * as fs from "fs"

try {
    fs.appendFileSync(process.argv[2], `\n${process.argv[3]}`)
    console.log("Tarefa adicionada com sucesso")
} catch (erro) {
    console.log("Erro ao adicionar tarefa")
}



