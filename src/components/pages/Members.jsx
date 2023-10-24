import React from 'react';

import '../../styles/Page.css';

import Body from '../BodyMembers';
import Header from '../Header';
import Footer from '../Footer';

function Members() {
    return (
        <div className='page-principal-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Members;
