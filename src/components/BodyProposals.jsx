import React from "react";
import Container from "./Container";
import Boton from "./Boton";
import Lista from "./Lista";
import WalletIcon from "./img/WalletIcon";
import "../styles/Body.css";
import PropuestaParticipante from "./PropuestaParticipante";

/*---------------[Estilos]---------------*/
const gradientContainerStyle = {
    '--gradient': 'linear-gradient(90deg, #fddb22, #1b77ae, #ba2733)',
    border: 'calc(0.5vh + 0.08vw) solid transparent',
    background: 'linear-gradient(#f5f5f5, #f5f5f5) padding-box, var(--gradient) border-box',
    borderRadius: '5vh',
    width: '85vw',
    height: 'fit-content',
    display: 'flex',
    margin: '3vh auto',
}

const containerStyle1 = {
    backgroundColor: '#231f20',
    height: '100%',
    //display: 'block',
    //padding: '1vh 1vw',
}

/*---------------[Componentes]---------------*/
/*---------------[Boton]---------------*/
const buttonIcon = <WalletIcon
    color='#000'
    className='icono'
/>

const boton = <Boton
    icono={buttonIcon}
    contenido='Agregar miembro'
    colorFondo='#fedd00'
    textStyle={{ color: '#231f20' }}
    margin='1vh auto'

/>

/*---------------[Lista1]---------------*/
const encabezado1 = ['Token Holders', 'Shamans', 'ETHec', 'ETHec Loot']
const info1 = [["6"], ["0"], ["6"], ["0"]]
const lista1 = <Lista
    encabezado={encabezado1}
    cuerpo={info1}
/>


/*---------------[Contenedor Gradiente]---------------*/
const propuesta = <PropuestaParticipante
    title='Propuesta 1'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec.'
    createdBy='Juan Perez'
    timeUntil='1 dia'
/>
const extraComponentsGradient = [propuesta]

const gradientContainer = <Container
    containerStyle={gradientContainerStyle}
    extraComponents={extraComponentsGradient}
/>

/*---------------[Componentes extra]---------------*/

const extraComponents1 = [boton, boton]
const extraComponents2 = [gradientContainer]

function Body() {
    return (
        <div className='body'>
            <Container
                containerStyle={{ padding: '2vh 0' }}
                titleContent='Propuestas'
                extraComponents={extraComponents1}
            />

            <Container
                containerStyle={containerStyle1}
                extraComponents={extraComponents2}
            />
        </div>
    )
}

export default Body;