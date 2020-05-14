import React from 'react'
import './IconeSemContador.css'

export function IconeSemContador(props) {
    return<div className={'icon-container'} id={props.id}>
        <img alt={'icone'} src={props.icone} onClick={props.onClickIcone}/>
    </div>
}