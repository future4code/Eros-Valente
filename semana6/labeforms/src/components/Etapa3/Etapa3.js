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
const Opcoes = styled.select`
    width: 50%;
    align-self: center;

`

class Etapa3 extends React.Component {

  render () {
      return (
        <EtapaContainer>
            <h3>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <Label>5. Por que você não terminou um curso de graduação?</Label>
            <Inputs type="text"></Inputs>
            <Label>6. Você fez algum curso complementar?</Label>
            <Opcoes>
                <option value="nenhum">Nenhum</option>
                <option value="ingles">Curso de Inglês</option>
                <option value="tecnico">Curso Técnico</option>
            </Opcoes>
        </EtapaContainer>
      )
  }
}

export default Etapa3;