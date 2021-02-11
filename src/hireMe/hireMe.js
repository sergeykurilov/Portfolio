import React from "react";
import st from "./hireMe.module.css"
import s from "../common/styles/Container.module.css";

export const HireMe = () => {
    return (
        <section className={st.hireMe}>
            <div className={st.hireMeContainer + " " + s.container}>
                <div className="hireMeBlocks">
                    <div className="hireMeBlocks-content">
                        <h1 className={"hireMeBlocks-hireMeBlocks__title"} >Рассматриваю варианты удалённой работы</h1>
                        <button className={"hireMeBlocks-hireMeBlocks__btn"}>Нанять меня</button>
                    </div>
                </div>
            </div>
        </section>
    )
}