import React from 'react';
import { AppBar, Main } from './styles.js';



function HomePage() {
  return (
    <div>
        <AppBar>
            <p>LOGO</p>
            <p>LOGIN</p>
        </AppBar>
        <Main>
            <h1>LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
            <button>quero me cadastrar!</button>
        </Main>
        <div>
            FOOTER (ICONES DE REDES SOCIAIS)
        </div>
    </div>
  );
}

export default HomePage;
