import React, {useEffect} from 'react';
import {PersonInfo, Photo, Bio, PersonalData, FilterBlur} from './styles.js';
import axios from 'axios';



function PersonCard(props) {
    
    return (
            <PersonInfo>
                <FilterBlur urlPhoto={props.personInfo.photo}></FilterBlur>
                <Photo src={props.personInfo.photo}/>
                <PersonalData>
                    <div>
                        <p>{props.personInfo.name}, </p>
                        <span>{props.personInfo.age}</span>
                    </div>
                    <Bio>
                        {props.personInfo.bio}
                    </Bio>
                </PersonalData>
            </PersonInfo>
    )
}

export default PersonCard;