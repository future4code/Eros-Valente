import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import starWarsLogo from './images/starwars.png'
import CardInfoPlanet from './Components/CardInfoPlanet';

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`



class App extends React.Component {
    state = {
        planets: [],
        urlPlanetSelected: "" 
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get("https://swapi.dev/api/planets")
            this.setState({planets: response.data.results})
        }catch(error) {
            console.log(error)
        }
    }   
    
    handleChangeSelect = (event) => {
        this.setState({urlPlanetSelected: event.target.value})
        console.log(this.state.urlPlanetSelected)
    }

    render () {
        const planetData = this.state.urlPlanetSelected ? <CardInfoPlanet  planetSelected={this.state.urlPlanetSelected}/> : <img src={starWarsLogo} alt="logo star wars"/>

        return (
            <ContainerApp>
                <select onChange={this.handleChangeSelect} >
                    <option value=""></option>
                    {this.state.planets.map(planet => {
                        return <option key={planet.url} value={planet.url}>{planet.name}</option>
                    })}
                </select>
                {planetData}
            </ContainerApp>
        )
    }
}

export default App;
