import React from 'react';
import '../styles/Footer.css'

import Logo from './img/eth-ecuador-logo'
import WalletIcon from './img/wallet-icon'

import Boton from "./Boton";


function Header() {
    const buttonIcon = <WalletIcon color='#333' className='icono' sizeFixed='20px' />
    const buttonStyle = {
        backgroundColor: '#f5f5f5',
        color: '#333',
        width: '100%',
        height: '100%',
        borderRadius: '0',
    }
    return (
        <footer className='footer'>
            <div className='gradient-separator' />
            <div className='footer-botones-grupo'>
                <div className='footer-boton-grupo'>
                    <Boton
                        contenido='Miembros'
                        icono={buttonIcon}
                        style={buttonStyle}
                    />
                </div>
                <div className="footer-boton-grupo">
                    <Boton
                        contenido='Propuestas'
                        icono={buttonIcon}
                        style={buttonStyle}
                    />
                </div>

            </div>

        </footer>
    )
}

export default Header;