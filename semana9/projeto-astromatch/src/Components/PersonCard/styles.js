import styled from 'styled-components';

export const PersonInfo = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    box-shadow: rgba(117, 117, 117, 0.8) 0px 1px 10px;
    width: 100%;
    height: 390px;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
`

export const FilterBlur = styled.div`
    position: absolute;
    filter: blur(30px);
    width: 100%;
    height: 100%;
    background-image: url(${props => props.urlPhoto});
    box-sizing: border-box;
`

export const Photo = styled.img`
    display: block;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
`
export const Bio = styled.div`
box-sizing: border-box;



`

export const PersonalData = styled.div`
    color: white;
    position: absolute;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;
`