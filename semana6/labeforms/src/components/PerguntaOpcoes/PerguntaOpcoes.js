import React from 'react';
import styled from 'styled-components';

const ItemQuestionario = styled.div`
`
const Perguntas =styled.p`
    margin: 10px;
`
const Opcoes = styled.select`
    width: 13%;
    align-self: center;
    border-style: 1px solid black;
`

function PerguntaOpcoes(props) {
      return (
        <ItemQuestionario>    
            <Perguntas>{props.pergunta}</Perguntas>
            <Opcoes>{props.opcoes && 
            props.opcoes.map(opcao => {
                return <option>{opcao}</option>
            })}
            </Opcoes>
        </ItemQuestionario>
      )
}              

export default PerguntaOpcoes;