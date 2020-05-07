
const postBlog = {
    titulo: "",
    autor: "",
    conteudo: "",
}

let postagens = []

function guardarPost() {
    let tituloPost = document.getElementById("tituloPost")
    let autorPost = document.getElementById("autor")
    let conteudoPost = document.getElementById("conteudoPost")
    let novoPost = {
        ...postBlog,
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value
    }
    postagens.push(novoPost)    
    tituloPost.value = autorPost.value = conteudoPost.value = ""
    return postagens
}

// function publicarPost() {
//     postagens = guardarPost()
//     for (let post in postagens) {
//         document.getElementById("secaoPostagens").innerHTML += "<article class='posts'>" + post + "</article>"
//     }
    
    

// }