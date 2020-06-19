import React from 'react';
import {Profile, Photo, Bio, PersonalData, FilterBlur, Info, Name, Age} from './styles.js';

function PersonCard(props) {
    
    return (
            <Profile>
                <FilterBlur urlPhoto={props.personInfo.photo}></FilterBlur>
                <Photo src={props.personInfo.photo}/>
                <PersonalData>
                    <Info>
                        <Name>{props.personInfo.name},</Name>
                        <Age>{props.personInfo.age}</Age>
                    </Info>
                    <Bio>
                        {props.personInfo.bio}
                    </Bio>
                </PersonalData>
            </Profile>
    )
}

export default PersonCard;