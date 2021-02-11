import React from 'react';
import style from './Header.module.css';
import {Nav} from "../nav/Nav";


export function Header() {
    return (
        <header className={style.header}>
                <Nav/>
        </header>
    );
}

