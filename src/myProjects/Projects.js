import React from "react";
import st from "./myProjects.module.scss"
import s from "../common/styles/Container.module.css"
import {Project} from "./myProject";
import {Title} from "../common/components/title/Title";
import todoImage from "../assets/image/disc.jpg"
import socialImage from "../assets/image/social.jpg"

const social = {
    backgroundImage: `url(${socialImage})`
}
const todolist = {
    backgroundImage: `url(${todoImage})`
}
export const Projects = () => {
    return (
        <section className={st.projectsBlock}>
            <div className={st.projectsContainer + " " + s.container}>
                <Title text={"Projects"}/>
                <div className={st.projects}>
                    <Project style={social} title={"Title"} description={"description"}/>
                    <Project style={todolist} title={"Title"} description={"description"}/>
                </div>
            </div>
        </section>
    )
}