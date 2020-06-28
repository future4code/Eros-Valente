import styled from 'styled-components';

export const WrappAll = styled.div`
    background-image: url("https://www.spacex.com/static/images/backgrounds/starship_feature.webp");
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

export const Card =styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 60%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    input{
        margin-bottom: 16px;
        width: 100%;
        height: 24px;
        
    }
    select{
        width: 100%;
        height:24px;
        margin-bottom: 16px;
        display: block;
    }

    button{
        font-size: 18px;
        height: 32px;
        width: 100%;

    }

`