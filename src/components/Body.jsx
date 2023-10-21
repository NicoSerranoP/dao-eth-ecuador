import React from "react";
import Container from "./Container";
import Boton from "./Boton";
import Tabla from "./Tabla";
import "../styles/Body.css";

function Body() {
    const info = ["$10,000", "2", "600", "4", "120"]

    const boton = <Boton
        contenido='Donar fondos'
        colorFondo='#0070b6'
        colorTexto='#ffff'
        margin='1vh auto'
    />

    const containerStyle = {
        '--gradient': 'linear-gradient(90deg, #fddb22, #1b77ae, #ba2733)',
        border: 'calc(0.3vh + 0.3vw) solid transparent',
        background: 'linear-gradient(#f5f5f5, #f5f5f5) padding-box, var(--gradient) border-box',
        borderRadius: '5vh',
        width: '60vw',
        height: 'fit-content',
        display: 'block',
    }

    const containerBodyStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '0px',
        alignItems: 'center',
        justifyContent: 'left',
        textAlign: 'left',
        padding: '0.4vh 1.5rem',
        width: 'fit-content',

    }

    const tableHeader1 = <Container bodyContent="Fondos" containerStyle={containerStyle} bodyStyle={containerBodyStyle} />
    const tableHeader2 = <Container bodyContent="Miembros pendientes" containerStyle={containerStyle} bodyStyle={containerBodyStyle} />
    const tableHeader3 = <Container bodyContent="Miembros aceptados" containerStyle={containerStyle} bodyStyle={containerBodyStyle} />
    const tableHeader4 = <Container bodyContent="Propuesta Pendientes" containerStyle={containerStyle} bodyStyle={containerBodyStyle} />
    const tableHeader5 = <Container bodyContent="Propuesta aceptados" containerStyle={containerStyle} bodyStyle={containerBodyStyle} />

    const encabezado = [
        tableHeader1,
        tableHeader2,
        tableHeader3,
        tableHeader4,
        tableHeader5
    ]

    const tabla = <Tabla
        encabezado={encabezado}
        cuerpo={[info]}
        containerStyle={{ width: '70%', margin: '0 auto', }}
    />

    const extraComponents = [tabla, boton]

    const containerStyle1 = {
        backgroundColor: '#231f20',
        display: 'block',
    }

    return (
        <div className='body'>
            <Container
                titleContent='Organizacion autónoma descentralizada de Ethereum en Ecuador'
                bodyContent="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Container
                bodyContent="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                containerStyle={containerStyle1}
                bodyStyle={{ color: '#ffffff' }}
                extraComponents={extraComponents}
            />
        </div>
    )
}

export default Body;