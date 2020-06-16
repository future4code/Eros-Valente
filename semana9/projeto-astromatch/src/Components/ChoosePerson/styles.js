import styled from 'styled-components';


export const ChoosePersonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px 24px 0px;
    
`
export const PersonCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(117, 117, 117, 0.8) 0px 1px 10px;
    width: 100%;
    height: 390px;
    border-radius: 5px;
`

export const ButtonsDiv = styled.div` 
    display: flex;
    width: 100%;
    padding: 16px 0px;
    justify-content: space-evenly;
    align-items: center;
`
export const LikeButton = styled.button`
    color: green;
    width: 60px;
    height: 60px;
    font-size: 32px;
    border-radius: 50%;
    border: 1px solid green;
    box-shadow: rgba(200, 200, 200, 1) 0px 0px 10px 0px;
    transform: scale(0.9);
    transition: 0.3s;
    &:hover{
        background-color: green;
        color: white;
        transform: scale(1.1)
    }
    &:focus{
        outline: none;
    }

`
export const DislikeButton = styled.button`
    width: 60px;
    height: 60px;
    font-size: 32px;
    color: red;
    border: 1px solid red;
    border-radius: 50%;
    box-shadow: rgba(200, 200, 200, 1) 0px 0px 10px 0px;
    transform: scale(0.9);
    transition: 0.3s;
    &:hover{
        background-color: red;
        color: white;
        transform: scale(1.1);
    }
    &:focus{
        outline: none;
    }
`