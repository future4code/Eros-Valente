import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';
import PerguntaOpcoes from '../PerguntaOpcoes/PerguntaOpcoes';

const EtapaContainer = styled.div`
    font-family: sans-serif;
    text-align: center;
`

class Etapa1 extends React.Component {
    
  render () {
      return (
        <EtapaContainer>
            <h3>ETAPA 1</h3>
            <PerguntaAberta pergunta={"1. Qual seu nome?"}/>
            <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
            <PerguntaAberta pergunta={"3. Qual seu email?"}/>
            <PerguntaOpcoes
                pergunta={"4. Qual a sua escolaridade?"}
                opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
            />
        </EtapaContainer>
      )
  }
}

export default Etapa1;