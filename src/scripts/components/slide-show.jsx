import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import images from "../resources/productImages.json";

function SlideShow() {
    const [imageCount, setImageCount] = useState(0)

    function changeImange() {
        var nextCount = (imageCount + 1) % images.length
        setImageCount(nextCount)
    }

    var intervalId = setInterval(changeImange, 5000)
    useEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    })

    var imgTags = []
    var buttons = []
    images.forEach((image, index) => {
        var imageClassNames = "slide-show__image"
        if (index == 0)
            imageClassNames += " slide-show__image--first"
        imgTags.push(
            <CSSTransition in={imageCount == index} timeout={0} key={index} classNames="slide-show__image-">
                <img className={imageClassNames} src={image}/>
            </CSSTransition>
        )

        var buttonClassNames = "slide-show__toggle-button"
        if (index == 0)
            buttonClassNames += " slide-show__toggle-button--first"
        if (index != images.length - 1)
            buttons.push(
                <CSSTransition in={imageCount == index} timeout={0} key={index} classNames="slide-show__toggle-button-">
                    <button className={buttonClassNames} onClick={() => setImageCount(index)} />
                </CSSTransition>
            )
        else
            buttons.push(
                <CSSTransition in={imageCount == index} timeout={0} key={index}
                    classNames={{
                        enter: 'slide-show__toggle-button--enter',
                        enterDone: 'slide-show__toggle-button--enter-done',
                        exit: 'slide-show__toggle-button--exit',
                        exitDone: 'slide-show__toggle-button-last--exit-done',
                    }}
                >
                    <button className={buttonClassNames} onClick={() => setImageCount(index)} />
                </CSSTransition>
            )
    })

    
    return (
        <div className="slide-show" name="slide-show">
            {imgTags}
            <div key={imageCount} className="slide-show__bar" />
            <div className="slide-show__filter" />
            <div className="slide-show__toggle-button-wrapper">
                {buttons}
            </div>
        </div>
    )
}

export default SlideShow
