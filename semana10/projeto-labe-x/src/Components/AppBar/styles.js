import styled from 'styled-components';

export const AppBarContainer = styled.div`
    background-color: transparent;    
    font-size:22px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    
`
export const Logo = styled.img`
    width: 400px;
    cursor: pointer;
`
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    p{
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin: 0 16px;
    }
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


// export const Login =styled.p`
//     font-weight: bold;
//     cursor: pointer;

// `