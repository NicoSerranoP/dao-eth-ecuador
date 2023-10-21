import React from 'react';

import '../../styles/Page.css';

import Body from '../BodyInfo';
import Header from '../Header';
import Footer from '../Footer';

function Info() {
    return (
        <div className='page-principal-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Info;
