import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const ContainerApp = styled.div`
    text-align: center;
    margin: 10px;

`



class App extends React.Component {
    state = {
        planets: [
            {
                "name": "Tatooine",
                "rotation_period": "23",
                "orbital_period": "304",
                "diameter": "10465",
                "climate": "arid",
                "gravity": "1 standard",
                "terrain": "desert",
                "surface_water": "1",
                "population": "200000",
                "url": "http://swapi.dev/api/planets/1/"
            },
            {
                "name": "Alderaan",
                "rotation_period": "24",
                "orbital_period": "364",
                "diameter": "12500",
                "climate": "temperate",
                "gravity": "1 standard",
                "terrain": "grasslands, mountains",
                "surface_water": "40",
                "population": "2000000000",
                "url": "http://swapi.dev/api/planets/2/"
            }
        ]
    }



    render () {
        return (
            <ContainerApp>
                <select>
                    <option value=""></option>
                    {this.state.planets.map(planet => {
                        return <option value={planet.name}>{planet.name}</option>
                    })}
                </select>
            </ContainerApp>

        )

    }
    
}

export default App;
