import React, { useState, useEffect } from 'react';
import useForm from './hooks/useForm';
import axios from 'axios';
import './App.css';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-eros"

    

function App() {
    const [tasks, setTasks] = useState([])
    const [form, onChange, resetForm] = useForm({
        text: "",
        day: ""
    })


    useEffect(() => {
        getAllTasks()
    }, [setTasks])

    const getAllTasks = () => {
        axios.get(baseUrl).then(response => {
            setTasks(response.data)
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    } 

    const createTask = (event) => {
        event.preventDefault()
        const body = form
        resetForm()
        axios.post(baseUrl, body).then(() => {
            getAllTasks()
        })
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
            case "mon":
                monday.push(task)
                break;
            case "tue":
                tuesday.push(task)
                break;
            case "wed":
                wednesday.push(task)
                break; 
            case "thu":
                thursday.push(task)
                break; 
            case "fry":
                fryday.push(task)
                break;
            case "sat":
                saturday.push(task)
                break;
            case "sun":
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
    <div>
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
                    <option value="mon">Seg</option>
                    <option value="tue">Ter</option>
                    <option value="wed">Qua</option>
                    <option value="thu">Qui</option>
                    <option value="fry">Sex</option>
                    <option value="sat">Sab</option>
                    <option value="sun">Dom</option>      
                </select>
                <button type="submit">Adicionar Tarefa</button>
            </form>    
        </header>
        <hr/>
        <main >
            <div className="weekdayDiv" data-testid="mon">Segunda-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(monday)}
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="tue">Terça-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(tuesday)}
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="wed">Quarta-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(wednesday)}
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="thu">Quinta-Feira
                <ul className="dayTasks">
                    {renderTasksByDay(thursday)} 
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="fry">Sexta-Feira
                <ul class="dayTasks">
                    {renderTasksByDay(fryday)}
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="sat">Sábado
                <ul className="dayTasks">
                    {renderTasksByDay(saturday)}
                </ul>
            </div>
            <div className="weekdayDiv" data-testid="sun">Domingo
                <ul className="dayTasks">
                    {renderTasksByDay(sunday)}
                </ul>
            </div>
        </main>
    </div>    
  )
}

export default App;
