import React from 'react';
import AppBar from '../AppBar/AppBar.js'
import { useHistory } from 'react-router-dom';
import { Main } from './styles.js';



function HomePage() {
    const history = useHistory()

    

    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

  return (
    <div>
        <Main>
            <h1>LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
            <button onClick={goToApplicationFormPage}>quero me cadastrar!</button>
        </Main>
        <div>
            FOOTER (ICONES DE REDES SOCIAIS)
        </div>
    </div>
  );
}

export default HomePage;
