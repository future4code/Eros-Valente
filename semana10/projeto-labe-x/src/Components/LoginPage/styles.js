import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    background-color: #1a1a1a;
    background-image: url("https://www.spacex.com/static/images/backgrounds/rideshare_feature.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Card = styled.div`
    background-color: #FFFFFF;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 32px 32px;
    position: absolute;
    top: 30%;
    border-radius: 5px;

    input{
        margin-bottom: 8px;
        width: 50%;
        height:30px;
    }

    button{
        width: 50%;
        height: 25px;
    }

    form{
        text-align: center;
    }
`
