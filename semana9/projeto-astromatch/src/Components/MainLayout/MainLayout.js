import React from 'react';
import {useState, useEffect} from 'react';
import ChoosePerson from '../ChoosePerson/ChoosePerson.js';
import Matches from '../Matches/Matches.js';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid lightgrey;
` 

const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    top: 50%;
    right: 50%;
    position: fixed;
    transform: translate(50%, -50%);
    width: 400px;
    height: 560px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

function MainLayout() {
    const [mainScreen, setMainScreen] = useState("choose")
    



    const onClickSwipeIcon = () => {
        setMainScreen("choose")
    }

    const onClickMatchesIcon = () => {
        setMainScreen("matches")
    }

    const changeMainScreen = () => {
        switch (mainScreen) {
            case "choose":
                return (
                    <ChoosePerson/>
                )
            case "matches":
                return (
                    <Matches/>
                )    
            default: 
                return (
                    <ChoosePerson/>
                )        
        }
    }



    return (
        
        <MainLayoutContainer>
            <HeaderContainer>
                <p onClick={onClickMatchesIcon}>matches</p>
                <p>AstroMatch</p>
                <p onClick={onClickSwipeIcon}>perfis</p>
            </HeaderContainer>
            {changeMainScreen()}
        </MainLayoutContainer>
    )
}

export default MainLayout;
