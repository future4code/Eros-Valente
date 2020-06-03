import React  from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ItemLista = styled.li`
    cursor: pointer;
`

const BotaoDeletar = styled.button`
    color: red;
    margin: 5px;
    cursor: pointer;
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
        this.setState({id: idUsuario})
        console.log(this.state.id)
    }


    render() {
        const carregando = this.state.usuariosCadastrados.length === 0 && <div>Carregando...</div>
        const listaUsuarios = this.state.usuariosCadastrados.map(usuario => {
            if(this.state.id = "")
            return (
                <ItemLista key= {usuario.id} onClick={() => this.pegarIdUsuario(usuario.id)}>
                    {usuario.name}
                    <BotaoDeletar onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDeletar>
                </ItemLista>
            )
        })


        return (
            <ul>
                {carregando}
                {listaUsuarios}
            </ul>
        )
    }        

    
}

export default ListaUsuarios;
