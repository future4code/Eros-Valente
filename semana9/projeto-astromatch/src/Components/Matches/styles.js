import styled from 'styled-components'

export const WrapAll = styled.div`
    height: 80%;
    
    
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(217, 217, 217);
        border-radius: 10px; 
    }
`

export const Photo = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid rgb(217, 217, 217);
`

export const MatchesList = styled.ul`
 
    list-style-type: none;
    
    padding: 2px;
    /* overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(217, 217, 217);
        border-radius: 10px; 
    } */
`

export const Person = styled.li`
    padding: 8px;
    align-items: center;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    &:hover{
        background-color: rgb(240, 240, 240);
    }
`

export const ResetButton = styled.button`
    height: 30px;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0)
    
`
