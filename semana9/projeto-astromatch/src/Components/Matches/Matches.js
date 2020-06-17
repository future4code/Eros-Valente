import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Photo = styled.img`
    width: 50px;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid rgb(217, 217, 217);
`
const MatchesList = styled.ul`
    list-style-type: none;
    margin: 24px 0;
    padding: 0 16px;
`
const Person = styled.li`
    padding: 8px;
    align-items: center;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    &:hover{
        background-color: rgb(240, 240, 240);
    }
`

function Matches() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        allMatches()
    }, []);

    const allMatches = async () => {
        try {
            const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/matches")
            console.log(response.data.matches)
            setMatches(response.data.matches)
        } catch(error) {
            alert("Occoreu um erro inesperado")
        }
    }

    return (
        
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
    )
}

export default Matches;
