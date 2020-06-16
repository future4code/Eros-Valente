import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid lightgrey;
` 

function Header() {
  return (      
      <HeaderContainer>
          <p>matches</p>
          <p>AstroMatch</p>
          <p>perfis</p>
      </HeaderContainer>
  )
}

export default Header;
