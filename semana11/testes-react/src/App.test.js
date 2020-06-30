import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
    
    const {  getByPlaceholderText, getByText, getByTestId } = render(<App/>)
    const postInput = getByPlaceholderText(/Novo Post/i)

    fireEvent.change(postInput, {
        target: {
            value: "novo post"
        }
    })

    const botaoAdicionar = getByText(/Adicionar/i)
    
    fireEvent.click(botaoAdicionar)

    expect(getByTestId("post")).toHaveTextContent("novo post")    
})

test("Ao clicar no botão curtir de um post, texto do botão deve mudar para descurtir", () => {
    const {  getByTestId } = criaPost()

    const botaoCurtir = getByTestId("like-button")

    fireEvent.click(botaoCurtir)

    expect(getByTestId("like-button")).toHaveTextContent(/descurtir/i)

})