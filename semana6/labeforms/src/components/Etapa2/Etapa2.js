import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';

const EtapaContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
`

class Etapa2 extends React.Component {
    
  render () {
      return (
        <EtapaContainer>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <PerguntaAberta pergunta={"5. Qual curso?"}/>
            <PerguntaAberta pergunta={"6. Qual Instituição de ensino?"}/>
        </EtapaContainer>
      )

    
  }

}

export default Etapa2;