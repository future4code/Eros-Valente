import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}

class InfoUsuario extends React.Component {
    state = {
        email: "",
        nome: "",
        id: this.props.idUsuario
    }

    componentDidMount = () => {
        this.detalhesUsuario()
    }

    detalhesUsuario = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.id}`,
            axiosConfig
            )
            .then(response => {
                console.log(response.data)
                this.setState({
                    email: response.data.email,
                    nome: response.data.name,
                    
                })
            })
    }
    render() {

        
        return (
            <div>
                <p>{this.state.nome} - {this.state.email}</p>
                <button onClick={this.props.deletarUsuario}>deletar usuario</button>
            </div>
        )
    }           
}

export default InfoUsuario;
