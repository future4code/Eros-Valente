import React, { useState, useEffect } from 'react';
import useForm from './hooks/useForm';
import axios from 'axios';
import './App.css';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-eros"
const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
    

function App() {
    const [tasks, setTasks] = useState([])
    const [form, onChange, resetForm] = useForm({
        text: "",
        day: ""
    })


    useEffect(() => {
        getAllTasks()
    }, [])


    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    } 

    const createTask = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${baseUrl}`, form)
            getAllTasks()
        } catch(error) {
            
        }
        resetForm()
    }

    const getAllTasks = async () => {
        try {
            const response = await axios.get(`${baseUrl}`)
            console.log(response.data)
            setTasks(response.data)
        }catch(error) {
            console.log(error)
        }
    }
    
    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`${baseUrl}/${taskId}`)    
        }catch(error) {
            alert(error)
        }
        getAllTasks()
    }

    let monday = [], tuesday = [], wednesday = [], thursday = [], fryday = [], saturday = [], sunday = []

    tasks.forEach(task => {
        switch (task.day) {
            case "Seg":
                monday.push(task)
                break;
            case "Ter":
                tuesday.push(task)
                break;
            case "Qua":
                wednesday.push(task)
                break; 
            case "Qui":
                thursday.push(task)
                break; 
            case "Sex":
                fryday.push(task)
                break;
            case "Sab":
                saturday.push(task)
                break;
            case "Dom":
                sunday.push(task)
                break;                        
        }
    })

    const renderTasksByDay = (array) => {
        const dayTasks = array.map(task => {
            return (
                <div key={task.id}>
                    <li>{task.text}</li>
                    <button onClick={() => deleteTask(task.id)}>deletar tarefa</button>
                </div>
            )
        })
        return dayTasks
    }

  return (
    <body>
        <header>
            <form className="inputForm" onSubmit={createTask}>
                <label htmlFor="task">Tarefa:</label>
                <input 
                    type="text" 
                    id="task"
                    name="text"
                    value={form.text}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="weekday">Dia:</label>
                <select 
                    id="weekday"
                    name="day"
                    value={form.day}
                    onChange={handleInputChange}
                    required
                >   
                    <option value=""></option>
                    {weekdays && weekdays.map(day => {
                        return <option key={day} value={day}>{day}</option>
                    })}         
                </select>
                <button type="submit">Adicionar Tarefa</button>
                {/* <button onclick="limparTarefas()">Limpar Tarefas</button> */}
            </form>    
        </header>
        <hr/>
        <main >
            <div data-testid="mon">Segunda-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(monday)}
                </ul>
            </div>
            <div data-testid="tue">Terça-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(tuesday)}
                </ul>
            </div>
            <div data-testid="wed">Quarta-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(wednesday)}
                </ul>
            </div>
            <div data-testid="thu">Quinta-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(thursday)} 
                </ul>
            </div>
            <div data-testid="fry">Sexta-Feira
                <ul class="dayTasks">
                    {renderTasksByDay(fryday)}
                </ul>
            </div>
            <div data-testid="sat">Sábado
                <ul className="dayTasks">
                    {renderTasksByDay(saturday)}
                </ul>
            </div>
            <div data-testid="sun">Domingo
                <ul className="dayTasks">
                    {renderTasksByDay(sunday)}
                </ul>
            </div>
        </main>
    </body>    
  )
}

export default App;
