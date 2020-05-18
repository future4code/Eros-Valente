import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import FimFormulario from './components/FimFormulario/FimFormulario';


const AppContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Botao = styled.button`
    margin: 20px;

`

class App extends React.Component {
    state = {
        etapa: 1,
    };

    avancarEtapa = () => {
        this.setState({etapa: this.state.etapa + 1})
    } 



  render () {
      const renderizaEtapa = () => {
          switch (this.state.etapa) {
              case 1:
                  return (
                      <Etapa1/>
                  )
            
              case 2:
                  return (
                      <Etapa2/>
                  )   
              case 3:
                  return (
                      <Etapa3/>
                  )
              default:
                  return (
                      <FimFormulario/>
                  )    
          }       
      }
      return (
      <AppContainer>
          {renderizaEtapa()}
          {this.state.etapa <= 3 ? <Botao onClick={this.avancarEtapa}>Próxima Etapa</Botao> : <p>Muito obrigado por participar! Entraremos em contato!</p>}
      </AppContainer>  
      )  
  }

}

export default App;
