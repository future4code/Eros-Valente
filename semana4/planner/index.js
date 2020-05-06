const tarefaAdicionada = document.getElementById("novaTarefa")
const diaSeletor = document.getElementById("diaDaSemana")

function adicionarTarefa() {
    let tarefa = tarefaAdicionada.value
    if (tarefa === "") {
        alert("Nenhuma tarefa foi digitada!")
    } else {
        let diaEscolhido = diaSeletor.value
        let divDia = document.getElementById(diaEscolhido)
        divDia.getElementsByTagName("ul")[0].innerHTML += `<li>${tarefa}</li>`
    }
    tarefaAdicionada.value = ""
}



