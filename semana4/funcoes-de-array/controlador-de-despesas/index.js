
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
    despesas.forEach((gasto, idx, arr) => {
        document.getElementById("lista-despesas").innerHTML += `<li>R$${gasto[arr.length - 1].valor} - ${gasto[arr.length - 1].tipo} - ${gasto[arr.length - 1].descricao}</li>`
    })
    


}   



// console.log(despesasTotais)

// function filtraDespesas() {
//     despesas = cadastraDespesa()  
//     console.log(desepesas)

// }
