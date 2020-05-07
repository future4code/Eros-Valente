
const infoDespesa = {
    valor: "",
    tipo: "",
    descricao: ""
}

let despesas = []

function cadastraDespesa(){
    event.preventDefault()
    let valorDespesa = document.getElementById("valor")
    let tipoDespesa = document.getElementById("seletor-tipo")
    let descricaoDespesa = document.getElementById("descricao")
    let novaDespesa = {
        ...infoDespesa,
        valor: valorDespesa.value,
        tipo: tipoDespesa.value,
        descricao: descricaoDespesa.value
    }
    despesas.push(novaDespesa)
    console.log(despesas)

}