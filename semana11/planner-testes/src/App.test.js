import React from 'react';
import { render, wait, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import axios from 'axios'

const createTask = async (text, day) => {
    const utils = render(<App />)

    const input = utils.getByLabelText(/tarefa/i)
    const select = utils.getByLabelText(/dia/i)

    await userEvent.type(input, text)
    userEvent.selectOptions(select, utils.getByText(day).value)

    const addButton = utils.getByText(/adicionar tarefa/i)

    userEvent.click(addButton)

    return utils
}

describe("Renderização inicial", () => {
    test("Input para digitar nova tarefa existe na tela", () => {
        const { getByLabelText } = render( <App /> )

        const input = getByLabelText(/tarefa/i)

        expect(input).toBeInTheDocument()
    })

    test("Select para escolher dia existe na tela", () => {
        const { getByLabelText } = render( <App />)

        const select = getByLabelText(/dia/i)

        expect(select).toBeInTheDocument()
    })

    test("Botão para adicionar terefas existe na tela", () => {
        const { getByText } = render( <App /> )

        const addButton = getByText(/adicionar tarefa/i)

        expect(addButton).toBeInTheDocument()
    })

    test("Endpoint está sendo chamado na renderização inicial", async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {
                    day: "mon",
                    text: "dormir",
                    id: "sYska93dSm"
                }
            ]
        })
        const { } = render( <App /> )

        await expect(axios.get).toHaveBeenCalled()
    })
})

describe("Criar tarefa", () => {
    test("Texto aparece ao digitar no campo de input", async () => {
        const { getByLabelText } = render( <App /> )

        const input = getByLabelText(/tarefa/i)

        await userEvent.type(input, "tarefa 1")

        expect(input).toHaveValue("tarefa 1")
    })

    test("Usuario consegue escolher dia da semana no select", () => {
        const { getByLabelText, getByText } = render( <App />)

        const select = getByLabelText(/dia/i)

        userEvent.selectOptions(select, getByText("Seg").value)

        expect(select).toHaveValue("mon")

        userEvent.selectOptions(select, getByText("Ter").value)

        expect(select).toHaveValue("tue")

        userEvent.selectOptions(select, getByText("Dom").value)

        expect(select).toHaveValue("sun")
    })

    test("Cria tarefa com sucesso ao clicar no botão para adicionar tarefa", async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [
              {
                "day": "thu",
                "text": "Estudar testes",
                "id": "gZCjyGHwww3G9lsNIP"
              }
            ]
          })
        
        axios.post = jest.fn().mockResolvedValue()
        
        const { getByText, getByTestId, findByText } = await createTask("Lavar louça", "Seg")

        expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-eros", {
            day: "mon",
            text: "Lavar louça"
        })

        const task = await findByText("Lavar louça")
        const dayTasks = getByTestId("mon")

        
        await wait(() => {
            expect(axios.post).toHaveBeenCalledTimes(1)
            expect(axios.get).toHaveBeenCalledTimes(2)
            expect(task).toBeInTheDocument()
        })    
    })

    test("Ao criar tarefa input é limpo", async () => {
        const { getByLabelText } = await createTask("lavar roupa", "Sab")

        expect(getByLabelText("Tarefa:")).toHaveValue("")
        expect(getByLabelText("Dia:")).toHaveValue("")
    })
})
