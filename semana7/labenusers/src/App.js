import React from 'react';
import styled from 'styled-components';
import TelaCadastro from './Components/TelaCadastro/TelaCadastro'
import ListaUsuarios from './Components/ListaUsuarios/ListaUsuarios'

const ContainerApp = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
`
const Botao = styled.button`
    align-self: flex-start;
`
class App extends React.Component {
    state = {
        cadastroNaTela: true
    }

    onClickChangeScreen = () => {
        this.setState({ cadastroNaTela: !this.state.cadastroNaTela})
    }

    render() {
        if(this.state.cadastroNaTela) {
            return (
               <ContainerApp>
                    <Botao onClick={this.onClickChangeScreen}>Ir para lista de usuários</Botao>
                    <TelaCadastro/>
               </ContainerApp>
            )
        } else {
            return (
               <ContainerApp>
                    <Botao onClick={this.onClickChangeScreen}>Ir para página de cadastro</Botao>
                    <ListaUsuarios/>
               </ContainerApp>
            )    
        }
    }
}

export default App;
