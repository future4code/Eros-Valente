import React from "react";
import { render, fireEvent, getByTestId, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


const criaPost = () => {

    const utils = render(<App />)
    
    const postInput = utils.getByPlaceholderText(/Novo Post/i)

    fireEvent.change(postInput, {
        target: {
            value: "novo post"
        }
    })

    const botaoAdicionar = utils.getByText(/Adicionar/i)
    
    fireEvent.click(botaoAdicionar)

    return utils
}


test("Ao digitar algo no input e clicar no botão, post digitado deve aparecer na tela", () => {        
    const { getByTestId } = criaPost()

    expect(getByTestId("post")).toHaveTextContent("novo post")    
})

test("Ao criar post campo de input deve ser limpo", ()=> {
    const { getByPlaceholderText } = criaPost()

    expect(getByPlaceholderText("Novo post")).toHaveValue("")
})

test("Ao clicar no botão curtir de um post, texto do botão deve mudar para descurtir", () => {
    const {  getByTestId } = criaPost()

    const botaoCurtir = getByTestId("like-button")

    fireEvent.click(botaoCurtir)

    expect(getByTestId("like-button")).toHaveTextContent(/descurtir/i)
})

test("Ao clicar no botão Apagar, post deve ser excluído", () => {
    const { getByText, queryByText } = criaPost()

    const botaoApagar = getByText(/apagar/i)

    fireEvent.click(botaoApagar)

    expect(queryByText("novo post")).toBeNull()
})

test("Exibir mensagem 'Nenhum post' quando lista renderizar vazia no início", async () => {
    const { getByTestId } = render(<App />)

    await wait(() => {
        expect(getByTestId("sem-posts")).toBeInTheDocument()
    })
})

test("Exivir mensagem de erro ao tentar criar post vazio", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />)
    const postInput = getByPlaceholderText(/Novo Post/i)

    fireEvent.change(postInput, {
        target: {
            value: ""
        }
    })

    const botaoAdicionar = getByText(/Adicionar/i)
    
    fireEvent.click(botaoAdicionar)

    expect(getByTestId("error-message")).toHaveTextContent(/posts vazios/i)
})
