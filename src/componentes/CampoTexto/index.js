import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `Digite ${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto