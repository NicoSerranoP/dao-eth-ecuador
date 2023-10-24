import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Header.css'

import Logo from './img/EthLogo'
import WalletIcon from './img/WalletIcon'

import Boton from "./Boton";


function Header() {
    const navigate = useNavigate();
    const buttonIcon = <WalletIcon color='#ffff' className='icono' sizeFixed='20px' />

    return (
        <header className='header'>
            <button className='logo-grupo' onClick={() => navigate('/')}>
                <Logo className='logo-eth' />
                <h1 className='titulo-logo' >ETH Tricolor</h1>
            </button>
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