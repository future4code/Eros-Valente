import React from 'react';
import './App.css';
import mufasa from './img/mufasa.jpg'
import vader from './img/Vader.png'
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
    {
    nomeUsuario: "lord.vader",
    fotoUsuario: vader,
    fotoPost: "https://i.imgur.com/JmpLEYw.jpg"
    },
    {
    nomeUsuario: "king.mufasa",
    fotoUsuario: mufasa,
    fotoPost: "https://i.imgur.com/uBCIz8s.jpg"
    },
    {
    nomeUsuario: "eros.pv",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://i.imgur.com/QqfuCiF.jpg"
    }
  
    ]
  }


  render() {
    const listaDePost = this.state.posts.map(post => {
      return (
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}

          />
      )
    })
    
    return (
      <div className={'app-container'}>
        {listaDePost}
      </div>
    );
  }
}

export default App;
