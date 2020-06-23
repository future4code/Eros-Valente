import React from 'react';
import { useHistory } from 'react-router-dom';




function LoginPage() {
    const history = useHistory()

    const goToListTripsPage = () => {
        history.replace("/trips/list")
    }

  return (
    <div>
        <div>
            <h3>LabeX</h3>
            <h4>logar como administrador</h4>
            <input placeholder="email" type="email"/>
            <input placeholder="senha" type="password"/>
            <button onClick={goToListTripsPage}>login</button>
        </div>
    </div>
  );
}

export default LoginPage;