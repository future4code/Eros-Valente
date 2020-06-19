import React, {useState, useEffect} from 'react';
import PersonCard from '../PersonCard/PersonCard.js'
import {ChoosePersonContainer, ButtonsDiv, DislikeButton, LikeButton, Loading, ResetButton} from './styles.js';
import axios from 'axios';

function ChoosePerson(props) {
    const [profile, setProfile] = useState()
    const [itsMatch, setItsMatch] = useState(undefined)
    
    
    useEffect(() => {
        getProfile()
    }, []);
    

    const getProfile = async () => {
        setProfile()
        try {
            const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/person")
            setProfile(response.data.profile)
        } catch (error) {
            alert("Algum erro ocorreu")
        }
    }
    
    const likePerson = async (userChoice) => {
        const body = {
            id: profile.id,
            choice: userChoice
        }
        try {
            const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/choose-person", body)
            setItsMatch(response.data)
            getProfile()
        } catch (error) {
            alert("Ocorreu um erro")
        }
    }

    const resetAll = () => {
        props.clearAll()
        getProfile()
    }

    return (
        <ChoosePersonContainer >
            {profile === undefined 
               ? <Loading>carregando...</Loading>
               : <PersonCard
                    personInfo={profile}
                 />
            }            
                
            <ButtonsDiv>
                <DislikeButton onClick={() => {likePerson(false)}}><span role="img" aria-label="x">X</span></DislikeButton>
                <LikeButton onClick={() => {likePerson(true)}}><span role="img" aria-label="heart emoji">♥️</span></LikeButton>
            </ButtonsDiv>
            <ResetButton onClick={resetAll}>Resetar matches e swipes</ResetButton>

        </ChoosePersonContainer>
    )
}

export default ChoosePerson;
