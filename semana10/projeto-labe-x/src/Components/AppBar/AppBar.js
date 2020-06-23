import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBarContainer } from './styles.js'


function AppBar() {
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }
  return (
    <AppBarContainer>
        <p onClick={goToHomePage}>LOGO</p>
        <p onClick={goToLoginPage}>LOGAR</p>
    </AppBarContainer>
   
  )
}

export default AppBar;