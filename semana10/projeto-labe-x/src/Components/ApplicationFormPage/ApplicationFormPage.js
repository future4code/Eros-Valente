import React from 'react';
import useRequestData from '../../hooks/useRequestData'
import { useHistory }  from 'react-router-dom'
import { countries } from './paises.js'
import { WrappAll, Card, Form} from './styles.js'
import { baseUrl} from '../LoginPage/LoginPage'
import axios from'axios'
import useForm from '../../hooks/useForm';


function ApplicationFormPage() {
    const history = useHistory()
    const trips = useRequestData(`${baseUrl}/trips`, "",  []).trips
    const [form, onChange, resetForm] = useForm({
        name: "",
        age: "",
        profession: "", 
        country: "",
        applicationText: "",
        trip: ""
    }) 

    const handleInputChange = event => {
        const { name, value } = event.target
        
        onChange(name, value)
    }
    

    const applyToTrip = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post(`${baseUrl}/trips/${form.trip}/apply`, form)
            alert("Sua candidatura para essa viagem foi realizada com sucesso!\nAguarde nosso contato.")
            history.push("/")
        } catch (error) {
            console.log(error)
        }
        resetForm()
    }

  return (
    <WrappAll>
        <Card>
            <h2>Viaje conosco</h2>
            <Form onSubmit={applyToTrip}>
                <input
                    name="name" 
                    placeholder="Nome completo" 
                    type="text" 
                    value={form.name}
                    onChange={handleInputChange}
                    pattern="[A-Za-z ]{3,}"
                    title="Nome com pelo menos 3 letras"
                    required

                />
                <input
                    name="age" 
                    placeholder="Idade" 
                    type="number" 
                    value={form.age}
                    onChange={handleInputChange}
                    min="18"                   
                    required
                />
                <input
                    name="profession" 
                    placeholder="Profissão" 
                    type="text"
                    value={form.profession}
                    onChange={handleInputChange}
                    pattern="[A-Za-z ]{10,}"
                    required
                />
                <select 
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    required

                >
                    <option value="">País</option>
                    {countries.map(country => {
                        return <option key={country.initial}>{country.name}</option>
                    })}
                </select>
                <select 
                    name="trip"
                    value={form.trip}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Viagem</option>
                    {trips && trips.map(trip => {
                        return <option key={trip.id} value={trip.id}>{trip.name} ({trip.planet})</option>
                    })}
                </select>
                <input 
                    name="applicationText"
                    placeholder="Porque você deve ir?" 
                    type="text"
                    value={form.applicationText}
                    onChange={handleInputChange}
                    pattern="[A-Za-z0-9áãâéêíîóôõúç ]{30,}"
                    required
                />
                <button type="submit">me inscrever</button>
            </Form>
        </Card>
    </WrappAll>
  );
}

export default ApplicationFormPage;