import styled from 'styled-components'

export const WrappAll = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    background-color: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer; 
`

export const MenuItem = styled.p`
    position: relative;
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.15s ease-out 0s;
    }
    &:hover:before{
        visibility: visible;
        transform: scaleX(1);
    }
`





