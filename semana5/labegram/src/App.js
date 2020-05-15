import React from 'react';
import styled from 'styled-components'
import './App.css';
import mufasa from './img/mufasa.jpg'
import vader from './img/Vader.png'
import Post from './components/Post/Post';

//Styled components

const NovaPostagem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 5px; 

`
const Inputs = styled.input`
  margin-bottom: 5px;

`
// 

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
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "" 
  }

  adicionaPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
       
    const novoPosts = [novaPostagem, ...this.state.posts]

    this.setState({posts: novoPosts, valorInputNomeUsuario:"", valorInputFotoUsuario: "", valorInputFotoPost: ""} )
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }
  
  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }
  
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
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
        <NovaPostagem>
          <Inputs
            value={this.state.nomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do usuário"}
          />
          <Inputs
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto do usuário"}
          />
          <Inputs
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost }
            placeholder={"URL da foto do post"}
          />
          <button onClick={this.adicionaPost}>
              Postar
          </button>
        </NovaPostagem>
        {listaDePost}
      </div>
    )
  }
}

export default App;
