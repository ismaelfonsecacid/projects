// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <header className="header">
                <div><img src='/img/mask2.png' style={{ width: '200px', marginLeft: '5%' }} /></div>
                <h1 className="golden-title">Fiesta de máscaras</h1>
            </header>
        </>


    );
}

export default Header;
