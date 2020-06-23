import React, {useState, useEffect} from 'react';
import {WrapAll, MatchesList, Person, Photo, ResetButton} from './styles.js';
import axios from 'axios';


function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, []);

    const getMatches = async () => {
        try {
            const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/matches")
                setMatches(response.data.matches)
            
        } catch(error) {
            alert("Occoreu um erro inesperado")
        }
    }

    const resetMatches = () => {
        props.clearAll()
        setMatches([])
    }

    return (
        <WrapAll>
            <MatchesList>
                {matches.map((person) => {
                    return (
                        <Person key={person.id}>
                            <Photo src={person.photo}/>
                            <p>{person.name}</p>
                        </Person>
                    )
                })}
            </MatchesList>
            <ResetButton onClick={resetMatches}>Resetar matches e swipes</ResetButton>
        </WrapAll>    
    )
}

export default Matches;
