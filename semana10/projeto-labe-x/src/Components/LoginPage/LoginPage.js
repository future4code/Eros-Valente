import React, {useState} from 'react';
import axios from 'axios'
import useInputValue from '../../hooks/useInputValue.js'
import { LoginPageContainer, LoginForm } from './styles.js'
import { useHistory } from 'react-router-dom';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello" 

function LoginPage() {
    const history = useHistory()
    const [email, handleChangeEmail] = useInputValue("")
    const [password, handleChangePassword] = useInputValue("")

    const handleLogin = async () => {
        const body ={
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${baseUrl}/login`, body)

            window.localStorage.setItem("token", response.data.token)
            history.replace("/trips/list")

        } catch (error) {
            alert(error.response.data.message)
        }
    }


  return (
    <LoginPageContainer>
        <LoginForm>
            <h3>Logar como administrador</h3>
            <input 
                value={email} 
                onChange={handleChangeEmail}
                placeholder="email" 
                type="email"
            />
            <input 
                value={password}
                onChange={handleChangePassword} 
                placeholder="senha" 
                type="password"
            />
            <button onClick={handleLogin}>Login</button>
        </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;