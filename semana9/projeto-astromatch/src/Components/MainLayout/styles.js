import PeopleIcon from '@material-ui/icons/People';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid lightgrey;
` 

export const MainLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`

export const MatchesIcon = styled(WhatshotIcon)`
    color: #fe7e02;
    z-index:${props => (props.currentScreen === "matches") ? "-1" : "0"};
    cursor: pointer;
    transform: scale(1);
    &:hover{
        transform: scale(0.9);
    }
`

export const SwitchIcon = styled(PeopleIcon)`
    color: #45525b;
    z-index:${props => (props.currentScreen === "choose") ? "-1" : "0"};
    cursor: pointer;
    transform: scale(1);
    &:hover{
        transform: scale(0.9);
    }
`
