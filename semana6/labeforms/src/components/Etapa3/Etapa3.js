import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta/PerguntaAberta';
import PerguntaOpcoes from '../PerguntaOpcoes/PerguntaOpcoes';

const EtapaContainer = styled.div`
    font-family: sans-serif;
    text-align: center;
`

class Etapa3 extends React.Component {

  render () {
      return (
        <EtapaContainer>
            <h3>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <PerguntaAberta pergunta={"5. Porque você não terminou o curso de graduação?"}/>
            <PerguntaOpcoes
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={[
                    "Nenhum",
                    "Curso de inglês",
                    "Curso Técnico",
                ]}
            />
        </EtapaContainer>
      )
  }
}

export default Etapa3;