import React from 'react';
import styled from 'styled-components';

const EtapaContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
`

class FimFormulario extends React.Component {
    
  render () {
      return (
        <EtapaContainer>
            <h3>O FORMULÁRIO ACABOU!</h3>
            
        </EtapaContainer>
      )
  }
}

export default FimFormulario;