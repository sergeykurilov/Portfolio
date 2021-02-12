import React from "react";
import style from "./Hire.module.css"
import s from "../common/styles/Container.module.css";

export const Hire = () => {
    return (
        <section className={style.hireBlock}>
            <div className={style.hireContainer + " " + s.container}>
                <h1 className={style.title}>Рассматриваю варианты удалённой работы</h1>
                <button className={style.hireBtn}>Нанять меня</button>
            </div>
        </section>
    )
}