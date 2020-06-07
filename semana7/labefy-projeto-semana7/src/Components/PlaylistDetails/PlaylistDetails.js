import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import AddTrackToPlaylist from '../AddTrackToPlaylist/AddTrackToPlaylist';

const Carregando =styled.div`
    border: 5px solid rgba(0, 0, 0, .3);
    border-left-color: #22a6b3;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {transform: rotate(360deg);}
    }
`

const Item = styled.li`
    display: flex;
    justify-content: space-between;
`
const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}



class PlaylistDetails extends React.Component {
    state = {
        tracks: []
    }

    
    componentDidUpdate = (prevState, prevProps) => {
        
    }

    addPlaylistTrack = (name, artist, url) => {
        const body = {
            "name": name,
            "artist": artist,
            "url": url
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
            )
            .then(() => {
                this.getPlaylistTracks()
            }).catch((error) => {
                window.alert("Erro ao adicionar faixa")
                console.log(error)
            })
    }

    getPlaylistTracks = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            axiosConfig
            ).then((response) => {
                this.setState({tracks: response.data.result.tracks})
                console.log(response.data.result.tracks)
            })
    } 

    deleteTrack = (trackId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`,
        axiosConfig
        )
        .then(() => {
            this.getPlaylistTracks()
        })
        .catch((error) => {
            console.log(error)
            window.alert("Erro ao excluir música")
        })
    }


    render () {
        const carregando = this.state.tracks === 0 && <Carregando></Carregando>
        const playlistTracks = this.state.tracks.map(track => {
            return (
                <Item key={track.id}>
                    <div>
                        <span>{track.name}</span>
                        <audio controls src={track.url}></audio>
                    </div>
                    <button onClick={() => this.deleteTrack(track.id)}>Remover</button>
                </Item>
            )
        })

        return (
            <div>
                <div>
                    <img src="https://picsum.photos/200/200?random=1" alt="playlist cover"/>
                    <h1>{this.props.playlistName}</h1>
                    <AddTrackToPlaylist
                        functionAddTrack={this.addPlaylistTrack}    
                    />
                </div>
                {carregando}
                <ul>
                    {playlistTracks}
  
  
  
                </ul>
                
  
  
  
            </div>
          

      ) 
      
    }
}  


export default PlaylistDetails;