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
    width: 80%;
    align-self: center;
`
const Opcoes = styled.select`
    width: 80%;
    align-self: center;
`

class Etapa1 extends React.Component {
    
  proximaEtapa = () => {}


  render () {
      return (
        <EtapaContainer>
            <h3>ETAPA 1</h3>
            <Label>1. Qual seu nome?</Label>
            <Inputs type="text"></Inputs>
            <Label>2. Qual sua idade?</Label>
            <Inputs type="text"></Inputs>
            <Label>3. Qual seu email?</Label>
            <Inputs type="email"></Inputs>
            <Label>4. Qual a sua escolaridade?</Label>
            <Opcoes>
                <option value="medio-incompleto">Ensino Médio Incompleto</option>
                <option value="medio-completo">Ensino Médio Completo</option>
                <option value="superior-incompleto">Ensino Superior Incompleto</option>
                <option value="superior-completo">Ensino Superior Completo</option>
            </Opcoes>
        </EtapaContainer>
      )

    
  }

}

export default Etapa1;