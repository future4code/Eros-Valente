import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    if(inputValue === "") {
        setErrorMessage(true)
        return 
    } else {
        setErrorMessage(false)
    }

    setInputValue("")

    const newPostsList = [newPost, ...postsList];

    setPostsList(newPostsList);
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  const renderErrorOrPost = () => {
      if(errorMessage) {
          return <p data-testid={"error-message"} id="error">Não é permitido criar posts vazios, por favor digite algo no campo de input</p>
      } else {
          return (
            postsList.length ? (<div>
                <p>Quantidade de posts: {postsList.length}</p>
                {postsList.map(post => {
                    return (
                      <Post 
                        key={post.id}
                        post={post}
                        toggleLike={toggleLike}
                        deletePost={deletePost}
                      />
                    );
                })}
                </div>
                ) : <div data-testid={"sem-posts"}>Nenhum post</div>
          )      
              
              
      }  
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {renderErrorOrPost()}
      {/* {postsList.length ? (<div>
          <p>Quantidade de posts: {postsList.length}</p>
          {postsList.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                  toggleLike={toggleLike}
                  deletePost={deletePost}
                />
              );
          })}
          </div>
          ) : <div data-testid={"sem-posts"}>Nenhum post</div>
        } */}
    </div>
  );
};

export default App;
