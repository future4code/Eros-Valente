import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    margin: 16px;
`
const Titulo = styled.h4`
    margin-bottom: 8px;
`
const Lista = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const DeleteButton = styled.span`
  color: red;
  margin: 4px;
  cursor: pointer;
`

const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}

class PlaylistsSection extends React.Component {
    state = {
        playlists: []
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        , axiosConfig)
        .then(() => {
            this.props.getAllPlaylists()
        })
        .catch((error) => {
            window.alert("Erro ao excluir playlist")
        })
    }

    render () {
        const carregando = this.props.playlists.length === 0 && <div></div>
        const myPlaylists = this.props.playlists.map(playlist => {
            return (
                <li key={playlist.id}>
                    <span onClick={() => this.props.playlistDetails(playlist.id, playlist.name)}>{playlist.name}</span>
                    <DeleteButton onClick={() => {this.deletePlaylist(playlist.id)}}>X</DeleteButton>
                </li>
            )
        })

       return (
           <Container>
                <Titulo>PLAYLISTS</Titulo> 
                {carregando}
                <Lista>{myPlaylists}</Lista>
           </Container>
       )
    }


 
  
}

export default PlaylistsSection;
