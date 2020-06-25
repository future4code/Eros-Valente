import React, { useState, useEffect } from 'react';
import logo from '../../images/LabeX_logo_white.png'
import { useHistory } from 'react-router-dom';
import { AppBarContainer, Logo, Login } from './styles.js'


function AppBar() {
    const history = useHistory()
    const [isLogged, setIsLogged ] = useState(localStorage.getItem("token") !== null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsLogged(token !== null)
    }, [history])
    

    const goToHomePage = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        
        history.push("/login")
    }

    const goToTripListPage = () => {
        history.push("/trips/list")
    }

    const handleLogout = () => {
        localStorage.clear()
        history.push("/")
        setIsLogged(false)
      }
    
    return (
        <AppBarContainer>
            <Logo src={logo} alr="logo" onClick={goToHomePage}/>
            <p onClick={goToTripListPage}>lista de viagens</p>
            {isLogged ? <p onClick={handleLogout}>sair</p> : <p onClick={goToLoginPage}>entrar</p>  }
        </AppBarContainer>
   
  )
}

export default AppBar;