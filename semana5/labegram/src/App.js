import React from 'react';
import './App.css';
import mufasa from './img/mufasa.jpg'
import vader from './img/Vader.png'
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'lord.vader'}
          fotoUsuario={vader}
          fotoPost={'https://i.imgur.com/JmpLEYw.jpg'}/>

        <Post
          nomeUsuario={'king.mufasa'}
          fotoUsuario={mufasa}
          fotoPost={'https://i.imgur.com/uBCIz8s.jpg'}
        />

        <Post
          nomeUsuario={'eros.pv'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://i.imgur.com/QqfuCiF.jpg'}
        />


      </div>
    );
  }
}

export default App;
