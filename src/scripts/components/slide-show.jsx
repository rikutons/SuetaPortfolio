import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';

function SlideShow() {
    const [imageCount, setImageCount] = useState(0)
    const imagePath = "images/products/"
    const images = [
        "danmaku-renkeitan.png",
        "intro-of-masuda.png",
        "motion-graphics.png",
        "sukue-salary-man.png",
        "wander-tempo.png"
    ]

    function changeImange() {
        var nextCount = (imageCount + 1) % images.length
        setImageCount(nextCount)
    }

    var intervalId = setInterval(changeImange, 2000)
    useEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    })

    var imgTags = []
    images.forEach((image, index) => {
        var classNames = "slide-show__image"
        if (index == 0)
            classNames += " slide-show__image--first"
        imgTags.push(
            <CSSTransition in={imageCount == index} timeout={0} key={index} classNames="slide-show__image-">
                <img className={classNames} src={imagePath + image}/>
            </CSSTransition>
        )
    })

    return (
        <div className="slide-show">
            {imgTags}
        </div>
    )
}

export default SlideShow
