import React from 'react';
import CreatePlaylistSection from './Components/CreatePlaylistSection/CreatePlaylistSection'
import PlaylistsSection from './Components/PlaylistsSection/PlaylistsSection'
import styled from 'styled-components';
import PlaylistDetails from './Components/PlaylistDetails/PlaylistDetails';
import axios from 'axios';


const AppContainer = styled.div`
    display: flex;
`

const axiosConfig = {
    headers: {
        Authorization: "eros-valente-mello"
    }
}

class App extends React.Component {
    state = {
        screen: "home",
        playlists: [],
        tracks: [],
        id: "",
        palylistName: ""
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    createPlaylist = (name) => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        {name: name}, 
        axiosConfig
        )
        .then((response) => {
            this.getAllPlaylists()
    
        }).catch((error) => {
            window.alert(`Erro ao cadastrar playlist`)
            console.log(error)
        })
    }

    getAllPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",axiosConfig
        )
        .then(response => {
            this.setState({ playlists: response.data.result.list})
        })
    }

    changeToMainPage = () => {
        this.setState({screen: "home"})
    }

    changeToPlaylistDetails = (playlistId, name) => {
        this.setState({screen: "playlistDetails", id: playlistId, playlistName: name })
        console.log(this.state.id)
    }
  
    render () {
        const changeScreen = () => {
            switch (this.state.screen) {
                case "home":
                  return <h1>HOME</h1>;
                case "playlistDetails":
                  return (
                  <div>
                      <button onClick={this.changeToMainPage}>HOME</button>
                      <PlaylistDetails
                          playlistId={this.state.id}
                          playlistName={this.state.playlistName}
                      />
                  </div>
                  )
            }
        }

      return (
          <AppContainer>
            <div>
                <CreatePlaylistSection
                    functionCreatePlaylist={this.createPlaylist}              
                />
                <PlaylistsSection
                    playlists={this.state.playlists}
                    playlistDetails={this.changeToPlaylistDetails}
                    getAllPlaylists={this.getAllPlaylists}
                />
            </div>
            <div>
                
                {changeScreen()}
            </div>
          </AppContainer>
          

      ) 
      
    }
  
}

export default App;
