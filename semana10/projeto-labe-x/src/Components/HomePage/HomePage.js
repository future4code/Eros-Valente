import React from 'react';
import AppBar from '../AppBar/AppBar.js'
import { useHistory } from 'react-router-dom';
import { Main, Button } from './styles.js';


function HomePage() {
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

  return (
      <Main>
          <h1>Encontre as melhores viagens espaciais!</h1>
          <Button onClick={goToApplicationFormPage}>quero me cadastrar</Button>
      </Main>

  );
}

export default HomePage;
