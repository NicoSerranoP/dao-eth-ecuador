import React, { useEffect } from "react";
import Container from "./Container";
import Boton from "./Boton";
import Lista from "./Lista";
import WalletIcon from "./img/WalletIcon";
import "../styles/Body.css";
import PropuestaParticipante from "./PropuestaParticipante";

import {Contract, getDefaultProvider } from "ethers";
import ABIBaal from "../abi/Baal.json";
import ABIIBaalToken from "../abi/IBaalToken.json";

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

    //minHeight: '100%',
    //height: 'fit-content',
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
const propuesta1 = <PropuestaParticipante
    title='Propuesta 1'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec.'
    createdBy='Juan Perez'
    timeUntil='1 dia'
    cantidadSi='26'
    cantidadNo='12'
/>

const propuesta2 = <PropuestaParticipante
    title='Propuesta 2'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nisl nisl aliquam nisl, nec aliquam nisl nisl nec.'
    createdBy='Kenny Pinchao'
    timeUntil='10 dias'
    cantidadSi='2'
    cantidadNo='10'
/>
const extraComponentsGradient = [propuesta1, propuesta2, propuesta1, propuesta2]

const gradientContainer = <Container
    containerStyle={gradientContainerStyle}
    extraComponents={extraComponentsGradient}
/>

/*---------------[Componentes extra]---------------*/

const extraComponents1 = [boton, boton]
const extraComponents2 = [gradientContainer]

function Body() {
    useEffect(() => {
        const call = async () => {
            const provider = getDefaultProvider('arbitrum');
            const baal = new Contract("0xF52d38c87f016d1a6090Ab356356A4CF1015EB9c", ABIBaal, provider);
            const proposalCount = Number(await baal.proposalCount());

            const baalToken = new Contract(await baal.sharesToken(), ABIIBaalToken, provider);
            console.log( await baalToken.name() )

            let proposals = [];
            for (let i = 0; i < proposalCount; i++) {
                const proposal = await baal.proposals(i);
                proposals.push(proposal);
            }
        }
        call();
    }, []);
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