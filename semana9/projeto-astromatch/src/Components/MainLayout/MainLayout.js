import React, {useState} from 'react';
import ChoosePerson from '../ChoosePerson/ChoosePerson.js';
import Matches from '../Matches/Matches.js';
import axios from 'axios';
import {HeaderContainer, MainLayoutContainer, MatchesIcon, SwitchIcon} from './styles.js'


function MainLayout() {
    const [currentScreen, setCurrentScreen] = useState("choose")

    const clearAll = async () => {
        try {
            const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eros/clear")
            console.log(response.data.message)
            
        } catch (error) {
            alert("Erro ao resetar")
        }
    }
    
    const onClickSwipeIcon = () => {
        setCurrentScreen("choose")
    }

    const onClickMatchesIcon = () => {
        setCurrentScreen("matches")
    }

    const changeMainScreen = () => {
        switch (currentScreen) {
            case "choose":
                return (
                    <ChoosePerson
                        clearAll={clearAll}
                    />
                )
            case "matches":
                return (
                    <Matches
                        clearAll={clearAll}
                    />
                )
            default:
                return (
                    <ChoosePerson
                        clearAll={clearAll}
                    />
                )
        }            
            
    }

    return (
        <MainLayoutContainer>
            <HeaderContainer>
                <SwitchIcon 
                    currentScreen={currentScreen} 
                    fontSize="large" 
                    onClick={onClickSwipeIcon}
                />
                <p>AstroMatch</p>
                <MatchesIcon 
                    currentScreen={currentScreen} 
                    fontSize="large" 
                    onClick={onClickMatchesIcon}
                />
            </HeaderContainer>
            {changeMainScreen()}
        </MainLayoutContainer>
    )
}

export default MainLayout;
