import React from 'react';
import styled from 'styled-components';
import MainLayout from './Components/MainLayout/MainLayout';

const AppContainer = styled.div`
    background-color: lightgrey;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
function App() {
  return (
      <AppContainer>
          <MainLayout/>
      </AppContainer>
  )
}

export default App;
