import React from 'react';
import './TelaCadastro.css'
import axios from 'axios';


function TelaCadastro (props) {
    return (
        <div className="container">
            <div className="formulario">
                <div>
                    <label>Nome: </label>
                    <input
                        type="text"
                        onChange={props.nomeCadastrado}/>
                </div>        
                <div>
                    <label>E-mail: </label>
                    <input
                        type="email"
                        onChange={props.emailCadastrado}
                    />
                </div>
                <button onClick={props.funcaoCadastrar} id="botaoSalvar">Salvar</button>
            </div>
        </div>
    )
}

export default TelaCadastro;
