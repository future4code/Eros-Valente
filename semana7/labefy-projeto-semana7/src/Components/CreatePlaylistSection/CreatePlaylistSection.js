import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    margin: 8px;
`
const Label = styled.label`
    display: block;
    margin-top: 8px;
    margin-bottom: 2px;
`
const Button = styled.button`
    display: block;
    margin-top: 16px;
`
const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}


class CreatePlaylistSection extends React.Component {
    state = {
        createdPlaylists: [],
        inputName: ""
    }

    onChangeInputName = (event) => {
        this.setState({inputName: event.target.value})
    }

    onKeyEnterPress = (event) => {
        if(event.key === "Enter" || event.which === 13) {
            this.createPlaylist()
        }
    }
    
    createPlaylist = () => {
        const body = {
            "name": this.state.inputName
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        body, 
        axiosConfig
        )
        .then(() => {
            const newPlaylist = this.state.inputName
            const newCreatedPalylists = [...this.state.createdPlaylists, newPlaylist]
            this.setState({
                createdPlaylists: newCreatedPalylists,
                inputName: ""
            })
            console.log(this.state.playlistsCriadas)
            
        }).catch((error) => {
            // const newPlaylist = this.state.inputName
            // const existingPlaylist = this.state.createdPlaylists.findIndex(playlist => playlist === newPlaylist)
            // if (existingPlaylist !== -1) {
            //     window.alert("Playlista já existe")

            // }
            window.alert("Erro ao cadastrar playlist")
        })
    }
    
    
    
  
    render () {

        return (
            <Container>
                <h3>Criar Playlist</h3>
                <div>
                    <Label>Nome</Label>
                    <input
                        placeholder="Nome da playlist"
                        type="text"
                        onChange={this.onChangeInputName}
                        onKeyPress={this.onKeyEnterPress}
                        value={this.state.inputName}
                    />
                    {/*<Label>Descrição</Label>
                     <textarea 
                        placeholder="Descrição da sua playlist." 
                        rows="5" 
                        cols="30"
                        onChange={this.onChangeInputDescription}
                        value={this.state.inputDescription}
                        
                        
                        /> */}
                </div>
                <Button onClick={this.createPlayist}>Criar</Button>
            </Container>

        )
    }
}

export default CreatePlaylistSection;
