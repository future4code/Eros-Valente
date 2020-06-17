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
            console.log(response.data)
            getProfile()
        } catch (error) {
            alert("Ocorreu um erro")
        }
    }

    return (
        
        <ChoosePersonContainer>
            <PersonCard
                personInfo={profile}
            
            />
            <ButtonsDiv>
                <DislikeButton onClick={() => {likePerson(false)}}>X</DislikeButton>
                <LikeButton onClick={() => {likePerson(true)}}>♥️</LikeButton>
            </ButtonsDiv>
        </ChoosePersonContainer>
    )
}

export default ChoosePerson;
