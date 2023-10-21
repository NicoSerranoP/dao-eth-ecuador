import React from "react";
import Container from "./Container";
import Boton from "./Boton";
import Lista from "./Lista";
import WalletIcon from "./img/WalletIcon";

import "../styles/Body.css";

/*---------------[Estilos]---------------*/
const gradientContainerStyle = {
    '--gradient': 'linear-gradient(90deg, #fddb22, #1b77ae, #ba2733)',
    border: 'calc(0.5vh + 0.08vw) solid transparent',
    background: 'linear-gradient(#f5f5f5, #f5f5f5) padding-box, var(--gradient) border-box',
    borderRadius: '5vh',
    width: '85vw',
    height: 'fit-content',
    display: 'block',
    margin: '3vh auto',
}

const containerStyle1 = {
    backgroundColor: '#231f20',
    //display: 'block',
    //padding: '1vh 1vw',
    height: '100%',
}

/*---------------[Componentes]---------------*/
/*---------------[Boton]---------------*/
const buttonIcon = <WalletIcon color='#000' className='icono' sizeFixed='20px' />
const boton = <Boton
    contenido='Agregar miembro'
    colorFondo='#fedd00'
    textStyle={{ color: '#231f20' }}
    margin='1vh auto'
    icono={buttonIcon}
/>

/*---------------[Lista1]---------------*/
const encabezado1 = ['Token Holders', 'Shamans', 'ETHec', 'ETHec Loot']
const info1 = [["6"], ["0"], ["6"], ["0"]]
const lista1 = <Lista
    encabezado={encabezado1}
    cuerpo={info1}
/>

/*---------------[Lista2]---------------*/
const encabezado2 = ['Miembros',]
const info2 = [["N1995_00", "N1995_01", "N1995_02", "N1995_03", "PRUEBAAA"]]

const lista2 = <Lista
    encabezado={encabezado2}
    cuerpo={info2}
    containerStyle={{
        width: '85vw', padding: '0', margin: '0 auto', alignSelf: 'flex-start',
    }}
    titleStyle={{ color: '#ffffff' }}
    bodyStyle={{ color: '#ffffff', margin: '1vh 2vw' }}
/>

/*---------------[Contenedor Gradiente]---------------*/
const extraComponentsGradient = [lista1]

const gradientContainer = <Container
    containerStyle={gradientContainerStyle}
    extraComponents={extraComponentsGradient}
/>

/*---------------[Componentes extra]---------------*/

const extraComponents1 = [boton]
const extraComponents2 = [gradientContainer, lista2]

function Body() {
    return (
        <div className='body'>
            <Container
                containerStyle={{ padding: '2vh 0' }}
                titleContent='Miembros'
                extraComponents={extraComponents1}
            />

            <Container
                containerStyle={containerStyle1}
                bodyStyle={{ color: '#ffffff' }}
                extraComponents={extraComponents2}
            />
        </div>
    )
}

export default Body;