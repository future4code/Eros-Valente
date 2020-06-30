import React from 'react';
import { useHistory } from 'react-router-dom'
import { WrappAll, MenuItem } from "./styles.js"


function NavBar() {
  const history = useHistory()

  const goToListTripPage = () => {
      history.push("/trips/list")
  }
    
  const  goToCreateTripPage = () => {
      history.push("/create-trip")

  }

  return (
    <WrappAll>
        <MenuItem onClick={goToListTripPage}>Lista de viagens</MenuItem>
        <MenuItem onClick={goToCreateTripPage}>Criar Viagem</MenuItem>
    </WrappAll>
  );
}

export default NavBar;