import styled from 'styled-components';

export const WrappAll = styled.div`
    background-color: #1a1a1a;
    height: 100vh;
    display: flex;
    padding: 32px;
    justify-content: center;
    align-items: flex-start;
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

    }

`