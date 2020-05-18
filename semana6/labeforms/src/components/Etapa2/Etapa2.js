import React from 'react';
import styled from 'styled-components';

const EtapaContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
`
 
const Label = styled.label`
    margin: 10px;
`
const Inputs = styled.input`
    width: 50%;
    align-self: center;
`

class Etapa2 extends React.Component {
    
  proximaEtapa = () => {}


  render () {
      return (
        <EtapaContainer>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <Label>5. Qual curso?</Label>
            <Inputs type="text"></Inputs>
            <Label>6. Qual a unidade de ensino?</Label>
            <Inputs type="text"></Inputs>
        </EtapaContainer>
      )

    
  }

}

export default Etapa2;