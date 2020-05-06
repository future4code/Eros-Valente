const tarefaAdicionada = document.getElementById("novaTarefa")
const diaSeletor = document.getElementById("diaDaSemana")

function apertaEnter(evento){
    console.log(evento.key)
    if(evento.key === "Enter") {
        adicionarTarefa()
    }
}

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

function limparTarefas() {  
  let divs = document.getElementsByTagName("ul")
    for (let i = 0; i < divs.length; i++) {
       let divAcessada = document.getElementsByTagName("ul")[i]
        let itenslistas = divAcessada.getElementsByTagName("li")
        for (let j = 0 ; itenslistas.length > 0; j++) {
            itenslistas[itenslistas.length - 1].remove()
        }    
    }

    
}

