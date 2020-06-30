import React from 'react';
import axios from 'axios'
import useForm from '../../hooks/useForm.js'
import { LoginPageContainer, Card } from './styles.js'
import { useHistory } from 'react-router-dom';

export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello" 

function LoginPage() {
    const history = useHistory()
    const [form, onChange, resetForm] = useForm({ email: "", password: ""})

    const handleInputChange = event => {
        const {name, value} = event.target

        onChange(name, value)
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${baseUrl}/login`, form)

            window.localStorage.setItem("token", response.data.token)
            history.replace("/trips/list")
        } catch (error) {
            alert(error.response.data.message)
        }

        resetForm()
    }

  return (
    <LoginPageContainer>
        <Card>
            <h3>Logar como administrador</h3>
            <form onSubmit={handleLogin}>
                <input 
                    name="email" 
                    value={form.email} 
                    onChange={handleInputChange}
                    placeholder="email" 
                    type="email"  
                    required            
                />
                <input 
                    name="password"
                    value={form.password}
                    onChange={handleInputChange} 
                    placeholder="senha" 
                    type="password"
                    required                
                />
                <button type="submit">Login</button>
            </form>
        </Card>
    </LoginPageContainer>
  );
}

export default LoginPage;