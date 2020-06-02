import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
        cadastroNaTela: true,
        usuariosCadastrados: [],
        nomeInput: "",
        emailInput: ""
    }

    cadastraUsuario = () => {
        const body = {
            "name": this.state.nomeInput,
            "email": this.state.emailInput,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "eros-valente-mello"
            }
        }).then((reponse) => {
            window.alert("Usuário cadastrado com sucesso")
        }).catch((error) => {
            window.alert("Erro ao cadastrar usuário")
        })
        this.setState({
            name: "",
            email: ""
        })
    }


  
    onClickChangeScreen = () => {
        this.setState({ cadastroNaTela: !this.state.cadastroNaTela})
    }

    onChangeInputName = event => {
        this.setState({ nomeInput: event.target.value })
    }    

    onChangeInputEmail = event => {
        this.setState({ emailInput: event.target.value })
    }

    render() {
        if(this.state.cadastroNaTela) {
            return (
               <ContainerApp>
                    <Botao onClick={this.onClickChangeScreen}>Ir para lista de usuários</Botao>
                    <TelaCadastro
                        funcaoCadastrar={this.cadastraUsuario}
                        nomeCadastrado={this.onChangeInputName}
                        emailCadastrado={this.onChangeInputEmail}
                    
                    
                    />
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
