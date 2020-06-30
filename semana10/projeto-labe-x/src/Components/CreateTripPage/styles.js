import styled from 'styled-components';

export const WrappAll = styled.div`
    
    display: flex;
    padding: 32px;
    justify-content: center;
    align-items: flex-start;
`
export const Background = styled.div`
    background-image: url("https://www.spacex.com/static/images/updates/starlinkstreak_mobile.webp");
    background-color: #1a1a1a;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
`

export const Card =styled.div`
    background-color: white;
    margin-top: 24px;
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
        height: 32px;
        width: 100%;
        margin-bottom: 16px;

    }

`