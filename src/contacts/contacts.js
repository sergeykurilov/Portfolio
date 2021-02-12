import React from "react";
import st from "./contacts.module.css"
import s from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <section className={st.contactsBlock}>
            <div className={st.contactsContainer + " " + s.container}>
                <h2 className={st.title}>Contact</h2>
                <form action="#" className={st.contactForm}>
                    <input type="text" />
                    <input type="text" />
                    <textarea />
                    <button type="submit" className={st.submitBtn}>Отправить</button>
                </form>
            </div>
        </section>
    )
}