import React from "react";
import Boton from "./Boton";

import "../styles/PropuestaParticipante.css";
import Votacion from "./Votacion";

function PropuestaParticipante(props) {


    return (
        <div className="participante-propuesta-container">
            <h1 className="propuesta-title">{props.title}</h1>
            <p className="propuesta-description">{props.description}</p>
            <Boton
                contenido="Ver detalles"
                colorFondo="#fedd00"
                colorTexto="#231f20"
                margin="1vh auto" />

            <p className="propuesta-infotext">Creado por {props.createdBy}</p>
            <p className="propuesta-infotext">Votos terminan en <strong>{props.timeUntil}</strong></p>
            <Votacion cantidadSi={props.cantidadSi} cantidadNo={props.cantidadNo} />
        </div>
    )
}

export default PropuestaParticipante;