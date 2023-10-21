import '../styles/Boton.css'
import React from 'react';


function Boton(props) {
    /**
     * props:
     * contenido: string
     * colorFondo: string
     * colorTexto: string
     * icono: string
     * margin: string
     */
    const buttonStyle = {
        backgroundColor: props.colorFondo,
        color: props.colorTexto,
        margin: props.margin,
    }

    return (
        <>
            <button className='boton' style={props.style ? props.style : buttonStyle}>
                {props.icono}
                <div className='text'>{props.contenido}</div>
            </button>
        </>

    )
}

export default Boton;
//<img src={wallet_img} alt='wallet' className='icono'/>