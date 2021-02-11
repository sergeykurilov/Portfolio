import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"sdfsdfsf"}/>
                    <Skill title={"CSS"} description={"asdasdasdsad"}/>
                    <Skill title={"React"} description={"asdasdasdasdasd"}/>
                </div>
                </div>
        </div>
    );
}

