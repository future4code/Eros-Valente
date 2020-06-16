import React from 'react';
import Header from '../Header/Header.js'
import styled from 'styled-components';

const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    top: 50%;
    right: 50%;
    position: fixed;
    transform: translate(50%, -50%);
    width: 400px;
    height: 90%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

function MainLayout() {
  return (
      
      <MainLayoutContainer>
          <Header/>
          
      </MainLayoutContainer>
  )
}

export default MainLayout;
