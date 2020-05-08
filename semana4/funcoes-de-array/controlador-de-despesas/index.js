
const infoDespesa = {
    valor: "",
    tipo: "",
    descricao: ""
}

let despesas = []

function cadastraDespesa() {
    
    let valorDespesa = document.getElementById("valor")
    let tipoDespesa = document.getElementById("seletor-tipo")
    let descricaoDespesa = document.getElementById("descricao")
    let novaDespesa = {
        ...infoDespesa,
        valor: Number(valorDespesa.value),
        tipo: tipoDespesa.value,
        descricao: descricaoDespesa.value
    }
    if (novaDespesa.valor === 0 || novaDespesa.tipo === "" || novaDespesa.descricao === "") {
        alert("Preencha todos os campos.")
    } else {
        despesas.push(novaDespesa)
        valorDespesa.value = tipoDespesa.value = descricaoDespesa.value = ""
        console.log(despesas)   
    }
    
    document.getElementById("lista-despesas").innerHTML += "<li class='lista-despesas'></li>"
    let itensLista = document.getElementsByClassName("lista-despesas")
    itensLista[itensLista.length - 1].innerText += `R$ ${despesas[despesas.length - 1].valor},00 --- ${despesas[despesas.length - 1].tipo} ---  ${despesas[despesas.length - 1].descricao}` 
    
}



