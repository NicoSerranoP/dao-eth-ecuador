import React from "react";
import "../styles/Lista.css";

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
        <>
            <ul className="lista" style={containerStyle}>
                {encabezado.map((encabezadoItem, index) => (
                    <li className="item-lista" key={index}>
                        <h2 className="item-lista-encabezado" style={props.titleStyle}>{encabezadoItem}</h2>
                        {cuerpo[index].map((item, index) => (
                            <p className="item-lista-cuerpo" style={props.bodyStyle}>{item}</p>
                        ))}

                    </li>
                ))}
            </ul>
        </>

    )
}

export default Tabla;

/*
   <table className="lista" style={containerStyle}>
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
*/