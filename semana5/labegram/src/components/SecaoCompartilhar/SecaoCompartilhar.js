import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import iconeFacebook from '../../img/facebook2.svg'
import iconeWhatsapp from '../../img/whatsapp2.svg'
import iconeTwitter from '../../img/twitter2.svg'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'

export class SecaoCompartilhar extends Component {
    state = {
        redeSocial: "",
        mensagem: ""
    }


    onClickRedeSocial = () => {
        

    }

    onChangeMensagem = (event) => {
        const novaMensagem = event.target.value
        this.setState({mensagem: novaMensagem})
    }

    render() {
        return <div className={'share-container'}>
            <IconeSemContador
                icone={iconeFacebook}
                onClickIcone={this.onClickRedeSocial}
            />

            <IconeSemContador
                icone={iconeTwitter}
                onClickIcone={this.onClickRedeSocial}
            />

            <IconeSemContador
                icone={iconeWhatsapp}
                onClickIcone={this.onClickRedeSocial}
            />       





        </div>
    }
}