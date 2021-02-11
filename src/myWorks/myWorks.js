import React from "react";
import st from "./myWorks.module.css"
import s from "../common/styles/Container.module.css"
export const MyWorks = () => {
    return (
        <section className={st.myWorks}>
            <div className={st.worksContainer + " " + s.container}>
                <div className={"myWorks-blocks"}>
                    <div className={"titleBlock"}>
                        <h1>MyWorks</h1>
                    </div>
                    <div className={st.myWorksBlock}>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-first  ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-second ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-third ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-fourth ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-fifth ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                        <div className={`${st.myWorksBlockMain} myWorks-block__block-sixth ${st.bg}`}>
                            <button>Смотреть</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}