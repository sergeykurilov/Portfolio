import React from "react";
import st from "./footer.module.css"
import s from "../common/styles/Container.module.css";
import {Nav} from "../nav/Nav";

export const Footer = () => {
    return (
        <footer>
            <div className={st.footerContainer + " " + s.container}>
                <h1 className="footer-title">Сергей Курилов</h1>
                <div className={"navBlock"}>
                    <Nav/>
                </div>
                <p className={"copyright"}>
                    Copyright ©2021  Все права защищены
                </p>
            </div>
        </footer>
    )
}