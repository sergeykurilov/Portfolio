import React from "react";
import st from "./Title.module.scss"

export const Title = (props) => {
    return (
                <div className={st.title}>
                    <h2>{props.text}</h2>
                </div>
    )
}