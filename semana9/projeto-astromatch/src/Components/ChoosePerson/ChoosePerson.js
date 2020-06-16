import React, {useState, useEffect} from 'react';
import {ChoosePersonContainer, PersonCard, ButtonsDiv, DislikeButton, LikeButton} from './styles.js';
import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

function ChoosePerson() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, []);
    
    

    const getProfile = async () => {
        try {
            const response = await axios.get({baseUrl})
            console.log(response)
        } catch (error) {
            console.log(error.response)
        }
    }




    return (
        
        <ChoosePersonContainer>
            <PersonCard>
                <div>filter blur</div>
                <div>foto</div>
                <div>informações</div>
            </PersonCard>
            <ButtonsDiv>
                <DislikeButton>X</DislikeButton>
                <LikeButton>♥️</LikeButton>
            </ButtonsDiv>
        </ChoosePersonContainer>
    )
}

export default ChoosePerson;
