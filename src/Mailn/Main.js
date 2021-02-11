import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Particles from "react-particles-js";

export function Main() {
    return (
        <div className={style.mainBlock}>


            <div className={styleContainer.container}>
                <div className={style.particles}>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 250,
                                        "duration": 2,
                                        "size": 0,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 4
                                    }
                                }
                            }
                        }}/>
                </div>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I'm Sergey</h1>
                    <p>Frontend Developer.</p>

                </div>
                <div className={style.photo}>


                </div>
            </div>
        </div>
    );
}

