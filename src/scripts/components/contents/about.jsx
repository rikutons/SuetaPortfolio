import React from 'react'
import SNSBar from './sns-bar'
import Skills from './skills'

function About() {
    return (
        <div>
            <h1 id="about">About</h1>
            <div className="about__icon-wrapper">
                <img src="images/others/icon.jpg"/>
            </div>
            <div className="about__icon-name">Sueta</div>
            <p>こんにちは！私はSuetaという名前で活動している、フリーランスのWebデザイナー兼ゲームクリエイターです。
学生生活をしつつ、授業や独学で得た知見をもとに様々な創作活動を行っています。</p>
            <SNSBar/>
            <Skills/>
        </div>
    )
}

export default About
