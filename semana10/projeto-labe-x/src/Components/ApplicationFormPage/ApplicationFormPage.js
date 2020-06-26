import React, {useState, useEffect} from 'react';
import { countries } from './paises.js'
import { WrappAll, Card, Form} from './styles.js'
import { baseUrl} from '../LoginPage/LoginPage'
import axios from'axios'
import useForm from '../../hooks/useForm';


function ApplicationFormPage() {
    const [trips, setTrips] = useState([])
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
    
    
    useEffect (() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello/trips")
        .then ((response) => {
            setTrips(response.data.trips)
        }).catch ((error) => {
            console.log (error)
        })
    }, [])

    const applyToTrip = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post(`${baseUrl}/trips/${form.trip}/apply`, form)
            console.log(response)
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
                    {trips.map(trip => {
                        return <option key={trip.id} value={trip.id}>{trip.name} ({trip.planet})</option>
                    })}
                </select>
                <input 
                    name="applicationText"
                    placeholder="Porque você deve ir?" 
                    type="text"
                    value={form.applicationText}
                    onChange={handleInputChange}
                    pattern="[A-Za-z0-9 ]{30,}"
                    required
                />
                <button type="submit">me inscrever</button>
            </Form>
        </Card>
    </WrappAll>
  );
}

export default ApplicationFormPage;