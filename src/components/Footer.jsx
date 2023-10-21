import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Footer.css'

import WalletIcon from './img/WalletIcon';

import Boton from "./Boton";


function Header() {
    const navigate = useNavigate();
    const buttonIcon = <WalletIcon color='#333' className='icono' sizeFixed='20px' />
    const buttonStyle = {
        backgroundColor: '#f5f5f5',
        color: '#231f20',
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
                        buttonStyle={buttonStyle}
                        textStyle={{ color: '#231f20' }}
                        onClick={() => navigate('/members')}
                    />
                </div>
                <div className="footer-boton-grupo">
                    <Boton
                        contenido='Propuestas'
                        icono={buttonIcon}
                        buttonStyle={buttonStyle}
                        textStyle={{ color: '#231f20' }}
                        onClick={() => navigate('/proposals')}
                    />
                </div>

            </div>

        </footer>
    )
}

export default Header;