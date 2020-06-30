import React, { useState, useEffect } from 'react';
import logo from '../../images/LabeX_logo_white.png'
import useToken from '../../hooks/useToken'
import { useHistory } from 'react-router-dom';
import { AppBarContainer, Logo, LoginContainer } from './styles.js'
import { MenuItem } from './styles.js'


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
        if (isLogged !== null) {
            history.push("/trips/list")
        } else {
            history.push("/login")
        }   
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
            <LoginContainer>
                <MenuItem onClick={goToTripListPage}>Área do administrador</MenuItem>
                {(isLogged)  ? <MenuItem onClick={handleLogout}>Sair</MenuItem> : <MenuItem onClick={goToLoginPage}>Entrar</MenuItem>  }
            </LoginContainer>
        </AppBarContainer>
   
  )
}

export default AppBar;