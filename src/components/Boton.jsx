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
            <button className='boton' style={props.buttonStyle ? props.buttonStyle : buttonStyle} onClick={props.onClick}>
                {props.icono}
                <p className={props.contenido ? 'text' : 'container-none'} style={props.textStyle}>{props.contenido}</p>
            </button >
        </>

    )
}


/*
.container-none {
    visibility: hidden;
    margin: 0;
    padding: 0;

}
*/
export default Boton;
//<img src={wallet_img} alt='wallet' className='icono'/>