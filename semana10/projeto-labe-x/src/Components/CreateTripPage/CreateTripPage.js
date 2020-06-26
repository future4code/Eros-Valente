import React from 'react';
import { WrappAll, Card, Form } from './styles'
import useForm from '../../hooks/useForm';
import axios from 'axios'
import useToken from '../../hooks/useToken'
import { baseUrl} from '../LoginPage/LoginPage'
import NavBar from '../NavBar/NavBar'

const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão (in memorian)"]

function CreateTripPage() {
    const token = useToken()
    const [form, onChange, resetForm] = useForm({
        name: "",
        planet: "",
        date: "", 
        description: "",
        durationInDays: "",
    }) 

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    
    const createTrip = async (event) => {
        event.preventDefault()
        const axiosConfig = {
            auth: token
        }
        try {
            const response = await axios.post(`${baseUrl}/trips`, form, axiosConfig)
            console.log(response.data)
        } catch(error) {
            alert(error)
            console.log(error)
        }
        resetForm()
    }

  return (
    <div>
        <NavBar/>
        <WrappAll>
            <Card>
                <h3>Criar nova viagem</h3>
                <Form onSubmit={createTrip}>
                    <input
                        name="name" 
                        placeholder="Nome da viagem" 
                        type="text" 
                        value={form.name}
                        onChange={handleInputChange}
                        pattern="[A-Za-záãâéêíîóôõú ]{5,}"
                        title="Nome com pelo menos 5 caracteres"
                        required
                    />
                    <select 
                        name="planet"
                        value={form.planet}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Planeta</option>
                        {planets.map(planet => {
                            return <option key={planet}>{planet}</option>
                        })}
                    </select>
                    <input
                        name="date" 
                        placeholder="Data" 
                        type="text"
                        value={form.date}
                        onChange={handleInputChange}
                        pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                        required
                    />
                    <input 
                        name="description"
                        placeholder="Descrição da viagem" 
                        type="text"
                        value={form.description}
                        onChange={handleInputChange}
                        pattern="[!A-Za-záãâéêíîóôõú0-9 ]{30,}"
                        required
                    />
                    <input 
                        name="durationInDays"
                        placeholder="Duração" 
                        type="number"
                        value={form.durationInDays}
                        onChange={handleInputChange}
                        min="50"
                        required
                    />
                    <button type="submit">criar viagem</button>
                </Form>
            </Card>
        </WrappAll>    
   
    </div>
  );
}

export default CreateTripPage;