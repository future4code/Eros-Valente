import React from 'react';
import logo from '../../images/LabeX_logo_white.png'
import { useHistory } from 'react-router-dom';
import { AppBarContainer, Logo, Login } from './styles.js'


function AppBar() {
    const history = useHistory()
    

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
      }

    const renderLoginLogout = () => {
        const token = localStorage.getItem("token")
        console.log("token")

        if (token) {
            return (
                <p onClick={handleLogout}>logout</p>
            )
        } else if (token === null) {
            return <p onClick={goToLoginPage}>login</p>

        }
    }

    

  return (
    <AppBarContainer>
        <Logo src={logo} alr="logo" onClick={goToHomePage}/>
        <p onClick={goToTripListPage}>lista de viagens</p>
        {renderLoginLogout()}
    </AppBarContainer>
   
  )
}

export default AppBar;