import React, { useState, useEffect } from 'react';
import useForm from './hooks/useForm';
import axios from 'axios';
import './App.css';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-eros"

function App() {
    const [tasks, setTasks] = useState([])
    const [form, onChange, resetForm] = useForm({
        taskName: "",
        day: ""
    })


    const handleInputChange = (event) => {
        const { taskName, day } = event.target
        onChange(taskName, day)
    } 

    const createTask = async () => {
        try {
            await axios.post(`${baseUrl}`, form)
        } catch(error) {
            console.log(error)
        }
        resetForm()
    }


    








  return (
    <body>
        <header>
            <label htmlfor="newtTask">Tarefa:</label>
            <input 
                type="text" 
                name="taskName"
                value={form.taskName}
                onChange={handleInputChange}
            />
            <select 
                name="day"
                value={form.day}
                onChange={handleInputChange}
            >
                <option value="seg">Segunda-feira</option>
                <option value="ter">Terça-feira</option>
                <option value="qua">Quarta-feira</option>
                <option value="qui">Quinta-feira</option>
                <option value="sex">Sexta-feira</option>
                <option value="sab">Sábado</option>
                <option value="dom">Domingo</option>            
            </select>
            <button onClick={createTask}>Adicionar Tarefa</button>
            <button onclick="limparTarefas()">Limpar Tarefas</button>
        </header>
        <hr/>
        <main >
            <div id="seg">Segunda-Feira
                <ul class="tarefasDoDia">
                        
                </ul>
            </div>
            <div id="ter">Terça-Feira
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
            <div id="qua">Quarta-Feira
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
            <div id="qui">Quinta-Feira
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
            <div id="sex">Sexta-Feira
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
            <div id="sab">Sábado
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
            <div id="dom">Domingo
                <ul class="tarefasDoDia">
        
                </ul>
            </div>
        </main>
    </body>    


  )
    
       
}

export default App;
