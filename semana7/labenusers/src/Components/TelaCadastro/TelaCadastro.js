import React from 'react';
import axios from 'axios';
import './TelaCadastro.css'

const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}
class TelaCadastro extends React.Component {
    state = {
        nomeInput: "",
        emailInput: ""
    }

    onChangeInputName = event => {
        this.setState({ nomeInput: event.target.value })
    }    

    onChangeInputEmail = event => {
        this.setState({ emailInput: event.target.value })
    }

    onKeyEnterPress = event => {
        if(event.key === "Enter" || event.which === 13) {
            this.cadastraUsuario()
        }
    }

    cadastraUsuario = () => {
        const body = {
            "name": this.state.nomeInput,
            "email": this.state.emailInput,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
        body, 
        axiosConfig
        )
        .then(() => {
            alert(`Usuário ${this.state.nomeInput}  cadastrado com sucesso`)
            this.setState({
                nomeInput: "",
                emailInput: ""
            })
        }).catch((error) => {
            alert(`Erro ao cadastrar usuário! \n${error}`)
        })
    }

    render() {

        return (
            <div className="container">
                <div className="formulario">
                    <div>
                        <label>Nome: </label>
                        <input
                            type="text"
                            onChange={this.onChangeInputName}
                            value={this.state.nomeInput}    
                        />
                    </div>        
                    <div>
                        <label>E-mail: </label>
                        <input
                            type="email"
                            onChange={this.onChangeInputEmail}
                            onKeyPress={this.onKeyEnterPress}
                            value={this.state.emailInput}
                            on
                        />
                    </div>
                    <button onClick={this.cadastraUsuario} id="botaoSalvar">Salvar</button>
                </div>
            </div>
        )
    }    
}

export default TelaCadastro;
