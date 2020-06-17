import React, {useState, useEffect} from 'react';
import PersonCard from '../PersonCard/PersonCard.js'
import {ChoosePersonContainer, ButtonsDiv, DislikeButton, LikeButton} from './styles.js';
import axios from 'axios';

function ChoosePerson() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, []);

    const getProfile = async () => {
        try {
            const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/person")
            setProfile(response.data.profile)
        } catch (error) {
            alert()
        }
    }
    
    

    return (
        
        <ChoosePersonContainer>
            <PersonCard
                personInfo={profile}
            
            />
            <ButtonsDiv>
                <DislikeButton onClick={getProfile}>X</DislikeButton>
                <LikeButton>♥️</LikeButton>
            </ButtonsDiv>
        </ChoosePersonContainer>
    )
}

export default ChoosePerson;
