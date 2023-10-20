import '../styles/Boton.css'
import React from 'react';


function Boton(props) {
    const buttonStyle = {
        backgroundColor: props.colorFondo,
        color: props.colorTexto
    }

    return (
        <>
            <button className='boton' style={buttonStyle}>
                {props.icono}
                <div className='text'>{props.contenido}</div>
            </button>
        </>

    )
}

export default Boton;
//<img src={wallet_img} alt='wallet' className='icono'/>