import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: 'pendentes'
    }

  componentDidMount() {
      const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"))

      this.setState({tarefas: tarefasSalvas})

  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    if (this.state.inputValue === "") {
        alert ("Campo de tarefa vazio")
    }  else {
      const novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue, 
          completa: false
      }
    
      const copiaListaTarefas = [novaTarefa, ...this.state.tarefas]

      this.setState({
          tarefas: copiaListaTarefas,
          inputValue: "",
      })
    } 
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map(tarefa => {
        if(tarefa.id === id) {
            const copiaTarefa = {...tarefa};
            copiaTarefa.completa = !copiaTarefa.completa
            return copiaTarefa
        } else {
            return tarefa
        }   
    })  
    this.setState({ tarefas: novaListaTarefas 
     })
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  onKeyEnterPress = (event) => {
    if(event.key === "Enter" ) {
        this.criaTarefa()
    }
  }

  removeTarefa = (id) => {
      const novaListaTarefas = this.tarefas.filter(tarefa => {

      })
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            onKeyPress={this.onKeyEnterPress}
          /> 
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

