import React from 'react';
import style from './Nav.module.css';


export function Nav() {
    return (
        <div className="container">
            <div className={style.navigation}>
                <div className={style.nav}>
                    <a href="">Main</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </div>
            </div>
        </div>
    );
}
