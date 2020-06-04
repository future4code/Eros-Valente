import React  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfoUsuario from '../InfoUsuario/InfoUsuario';

const ItemLista = styled.span`
    cursor: pointer;
`

const BotaoDeletar = styled.button`
    color: red;
    margin: 5px;
    cursor: pointer;
`
const Carregando =styled.div`
    border: 6px solid rgba(0, 0, 0, .3);
    border-left-color: #22a6b3;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {transform: rotate(360deg);}
        
    }
`

const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}

class ListaUsuarios extends React.Component {
    state = {
        usuariosCadastrados: [],
        id: ""
    }
  
    componentDidMount = () => {
        this.pegaUsuarios()
    }

    pegaUsuarios = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            axiosConfig
            )
            .then(response => {
                this.setState({ usuariosCadastrados: response.data })
            })        
    }
    
    deletarUsuario = (idUsuario) => {
        if(window.confirm("Tem certeza que deseja excluir esse usuário?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
                axiosConfig
                )
                .then(() => {
                    alert("Usuário excluído com sucesso")  
                    this.pegaUsuarios()    
                })
                .catch((error) => {
                    alert("Erro ao excluir usuário")
                    console.log(error)
                })
        }        
    }

    pegarIdUsuario = (idUsuario) => {
        console.log(idUsuario)
        this.setState({id: idUsuario})
        console.log(this.state.id)
    }


    render() {
        const carregando = this.state.usuariosCadastrados.length === 0 && <Carregando></Carregando>
        const listaUsuarios = this.state.usuariosCadastrados.map(usuario => {
            return (
                <li>
                    <ItemLista onClick={() => this.pegarIdUsuario(usuario.id)}>{usuario.name}</ItemLista>
                    <BotaoDeletar onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDeletar>
                </li>
            )    
        })

        return (
            <ul>
                {carregando}
                {this.state.id === "" ? listaUsuarios : <InfoUsuario deletarUsuario={() => {this.deletarUsuario(this.state.id)}} idUsuario={this.state.id}/>}
            </ul>
        )
    }        

    
}

export default ListaUsuarios;
