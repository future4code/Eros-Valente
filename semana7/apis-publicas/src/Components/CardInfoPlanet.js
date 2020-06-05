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
        infoPlanet: "",
        urlPlanet: this.props.planetSelected
    }

    componentDidMount = () => {
        this.showPlanetInfo()
    }
   
    showPlanetInfo = async () => {
        try {
            const response = await axios.get(`${this.props.planetSelected}`)
            this.setState({infoPlanet: response.data})
        } catch(error) {
            console.log(error)
        }
    }
    
    render () {
        console.log(this.props.planetSelected)
        
        return (
            <Container>
                <Table>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <td>{this.state.infoPlanet.name}</td>
                        </tr>
                        <tr>
                            <th>Periodo de Rotação</th>
                            <td>{this.state.infoPlanet.rotation_period} horas terrestres</td>
                        </tr>
                        <tr>
                            <th>Periodo Orbital</th>
                            <td>{this.state.infoPlanet.orbital_period} dias terrestres</td>
                        </tr>
                        <tr>
                            <th>Diâmetro</th>
                            <td>{this.state.infoPlanet.diameter} km</td>
                        </tr>
                        <tr>
                            <th>População</th>
                            <td>{this.state.infoPlanet.population} habitantes</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default CardInfoPlanet;
