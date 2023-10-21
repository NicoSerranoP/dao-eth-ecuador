import '../styles/Boton.css'
import React from 'react';


function TableHeader(props) {
    const containerStyle = {
        backgroundColor: props.colorFondo,
        color: props.colorTexto
    }

    return (
        <>
            <div className='tabla-header-container' style={containerStyle}>
                {props.icono}
                <div className='text'>{props.contenido}</div>
            </div>
        </>

    )
}

export default TableHeader;
//<img src={wallet_img} alt='wallet' className='icono'/>