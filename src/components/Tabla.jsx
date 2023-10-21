import React from "react";
import "../styles/Tabla.css";

function Tabla(props) {

    /*
    Props:
    encabezado: array
    cuerpo: array
    */

    const encabezado = props.encabezado;
    const cuerpo = props.cuerpo;
    const containerStyle = props.containerStyle;

    return (

        <table className="tabla" style={containerStyle}>
            <tbody className="cuerpoTabla" >
                {encabezado.map((encabezadoItem, index) => (
                    <tr key={index}>
                        <td className="encabezado">{encabezadoItem}</td>
                        {cuerpo.map((fila, filaIndex) => (
                            <td key={filaIndex} className="item">{fila[index]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

/*<div>
            <table className="tabla">
                <thead>
                    <tr className="encabezado">
                        {encabezado.map((dato, index) => (
                            <th key={index}>{dato}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="cuerpoTabla">
                    {Array.isArray(cuerpo) && cuerpo.map((fila, filaIndex) => (
                        <tr key={filaIndex}>
                            {Array.isArray(fila) && fila.map((dato, datoIndex) => (
                                <td key={datoIndex}>{dato}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>*/

export default Tabla;