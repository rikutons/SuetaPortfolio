import React from 'react'
import images from "../../resources/productImages.json";
import { Scene, Controller } from 'react-scrollmagic';

function Work(props) {
    return (
        <Controller>
            <Scene duration={10000} classToggle="work__active" triggerHook="onEnter">
                <div className="work">
                    <img src={images[props.imageID]} className="work__image" />
                    <div className="work__discription-wrapper">
                        <div className="work__title">{props.children}</div>
                        <a href={props.link}>
                            <img src="./images/sns-icons/GitHub-Mark-Small.svg" className="work__gihub-icon" />
                        </a>
                    </div>
                </div>
            </Scene>
        </Controller>
    )
}

export default Work
