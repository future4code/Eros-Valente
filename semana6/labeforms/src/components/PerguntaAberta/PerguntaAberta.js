import React from 'react';
import styled from 'styled-components';

const ItemQuestionario = styled.div`
  
`
const Perguntas =styled.p`
    margin: 10px;
`

const Inputs = styled.input`
    width: 15%;
    align-self: center;
    border-style: 1px solid black;

`
function PerguntaAberta(props) {
      return (
        <ItemQuestionario>    
            <Perguntas>{props.pergunta}</Perguntas>
            <Inputs type="text"></Inputs>
        </ItemQuestionario>
      )
}              

export default PerguntaAberta;