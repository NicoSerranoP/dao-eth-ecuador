import React from 'react';
import '../styles/Header.css'

import Logo from './img/eth-ecuador-logo'
import WalletIcon from './img/wallet-icon'

import Boton from "./Boton";


function Header() {
    const buttonIcon = <WalletIcon color='#ffff' className='icono' sizeFixed='20px' />

    return (
        <header className='header'>
            <div className='logo-grupo'>
                <Logo />
                <h1>ETH Tricolor</h1>
            </div>
            <div className="boton-grupo">
                <Boton
                    contenido='Conectar Wallet'
                    colorFondo='#be1e2d'
                    colorTexto='#ffff'
                    icono={buttonIcon}
                />
            </div>

        </header>
    )
}

export default Header;