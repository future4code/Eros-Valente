import React, {useState, useEffect} from 'react';
import PersonCard from '../PersonCard/PersonCard.js'
import heart from '../../images/heart.png'
import {ChoosePersonContainer, ButtonsDiv, DislikeButton, LikeButton, Loading, ResetButton, PulsingHeart} from './styles.js';
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

    const resetAll = async () => {
        await props.clearAll()
        getProfile()
    }

    const renderContent = () => {
        if (profile === undefined) {
            return (
                <Loading> 
                    <PulsingHeart
                        src={heart} 
                        alt="pulsing heart"
                    />    
            
            
                </Loading>
            )    
        } else if (profile === null) {
            return (<div>FIM DOS PERFIS. POR FAVOR CLIQUE NO BOTÃO PARA RESETAR</div>)
        } else {
            return (
            <PersonCard
                personInfo={profile}
            />
            )
        }
    }

    return (
        <ChoosePersonContainer >
            {renderContent()}              
            <ButtonsDiv>
                <DislikeButton profiles={profile} onClick={() => {likePerson(false)}}><span role="img" aria-label="x">X</span></DislikeButton>
                <LikeButton profiles={profile} onClick={() => {likePerson(true)}}><span role="img" aria-label="heart emoji">♥️</span></LikeButton>
            </ButtonsDiv>
            <ResetButton onClick={resetAll}>Resetar matches e swipes</ResetButton>
        </ChoosePersonContainer>
    )
}

export default ChoosePerson;
