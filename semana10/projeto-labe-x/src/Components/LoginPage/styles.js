import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    background-color: #1a1a1a;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const LoginForm = styled.div`
    background-color: #FFFFFF;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 32px;
    position: absolute;
    top: 30%;
    border-radius: 5px;

    input{
        margin-bottom: 8px;
        width: 50%;
    }

    button{
        width: 50%;
    }
`