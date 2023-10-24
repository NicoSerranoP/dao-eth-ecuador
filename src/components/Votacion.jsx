import React from "react";
import WalletIcon from "./img/WalletIcon.jsx";
import Boton from "./Boton.jsx";
import "../styles/Votacion.css";

function Votacion(props) {
    const iconoThumbsUp = <WalletIcon
        color="#fff"
        className="icono"
        iconoStyle={{ margin: '0' }}
    />

    const iconoThumbsDown = <WalletIcon
        color="#fff"
        className="icono"
        iconoStyle={{ margin: '0' }}
    />

    return (
        <>

            <div className="barra-votacion-container">
                <div className="barra-si" style={{ flex: props.cantidadSi }} />
                <div className="barra-no" style={{ flex: props.cantidadNo }} />
            </div>

            <div className="barra-descripcion-container">
                <p className="barra-descripcion">Si({props.cantidadSi})</p>
                <p className="barra-descripcion">No({props.cantidadNo})</p>
            </div>

            <div className="botones-votacion-container">
                <Boton
                    icono={iconoThumbsUp}
                    colorFondo="#009444"
                    margin="1vh 2vw" />
                <Boton
                    icono={iconoThumbsDown}
                    colorFondo="#be1e2d"
                    margin="1vh 2vw" />
            </div>
        </>

    )
}

export default Votacion;