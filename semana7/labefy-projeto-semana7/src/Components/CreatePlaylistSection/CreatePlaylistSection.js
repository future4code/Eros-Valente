import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin: 16px;
`
const Titulo = styled.h4`
    margin-bottom: 8px;
`
const Label = styled.label`
    display: block;
    margin-top: 8px;
    margin-bottom: 2px;
`
const Button = styled.button`
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
`
class CreatePlaylistSection extends React.Component {
    state = {
        inputName: "",
    }

    onChangeInputName = (event) => {
        this.setState({inputName: event.target.value})
    }

    onKeyEnterPress = (event) => {
        if(event.key === "Enter" || event.which === 13) {
            this.props.functionCreatePlaylist(this.state.inputName)
            this.setState({inputName: ""})
        }
    }

    handleClickButton = () => {
        this.props.functionCreatePlaylist(this.state.inputName)
        this.setState({inputName: ""})
    }
    
    render () {

        return (
            <Container>
                <Titulo>CRIAR PLAYLIST</Titulo>
                <div>
                    <Label>Nome</Label>
                    <input
                        placeholder="Nome da playlist"
                        type="text"
                        onChange={this.onChangeInputName}
                        onKeyPress={this.onKeyEnterPress}
                        value={this.state.inputName}
                    />
                </div>
                <Button onClick={this.handleClickButton} >Criar</Button>
                <hr></hr>
            </Container>

        )
    }
}

export default CreatePlaylistSection;
