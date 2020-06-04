import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Container = styled.div`
    margin-top: 40px;
`
const Table = styled.table`
    &&& {
        width: 40vw;
        border-collapse: collapse;
    th,
    td {
        border: 1px solid black;      
    }
    th {
        text-align:left;    
    }
    td {
        text-align: center;
        width:60%;
    }
}
`


class CardInfoPlanet extends React.Component {
    state = {
        infoPlanet: ""
    }

    componentDidMount = () => {
        this.planetInfo()

    }

    planetInfo = async () => {
        console.log()
        try {
            const response = await axios.get(`http://swapi.dev/api/planets/1/`)
            console.log(response)
            this.setState({infoPlanet: response})
        } catch(error) {
            console.log(error)
        }
    }
    





    render () {
        console.log(this.props.planetSelected)
        
        return (
            <Container>
                <Table>
                    <tr>
                        <th>Nome</th>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <th>Periodo de Rotação</th>
                        <td>{this.state.rotation_period} horas terrestres</td>
                    </tr>
                    <tr>
                        <th>Periodo Orbital</th>
                        <td>{this.state.orbital_period} dias terrestres</td>
                    </tr>
                    <tr>
                        <th>Diâmetro</th>
                        <td>{this.state.diameter} km</td>
                    </tr>
                    <tr>
                        <th>População</th>
                        <td>{this.state.population} habitantes</td>
                    </tr>
                </Table>
                
                
            </Container>

        )

    }
    
}

export default CardInfoPlanet;
