import React from "react";
import st from "./contacts.module.css"
import s from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <section className={st.contacts}>
            <div className={st.contactsContainer + " " + s.container}>
                <form action="#" className={"contactsForm"}>
                    <input type="text" className={"inputForm"}/>
                    <input type="text" className={"inputForm"}/>
                    <input type="text" className={"inputForm"}/>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </section>
    )
}