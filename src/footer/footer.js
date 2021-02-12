import React from "react";
import st from "./footer.module.css"
import s from "../common/styles/Container.module.css";
import {Nav} from "../nav/Nav";

export const Footer = () => {
    return (
        <div className={st.footer}>
            <div className={st.footerContainer + " " + s.container}>
                <h1 className={st.title}>Сергей Курилов</h1>
                <div className={st.socialIcons}>
                    <div className={st.socialIcon}></div>
                    <div className={st.socialIcon}></div>
                    <div className={st.socialIcon}></div>
                    <div className={st.socialIcon}></div>
                </div>
                <span className={st.copyright}>
                    Copyright ©2021  Все права защищены
                </span>
            </div>
        </div>
    )
}