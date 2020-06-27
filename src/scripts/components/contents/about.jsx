import React from 'react'
import SNSBar from './sns-bar'
import Skills from './skills'

function About() {
    return (
        <div>
            <h1 name="about">About</h1>
            <p>こんにちは！私はSuetaという名前で活動している、フリーランスのWebデザイナー兼ゲームクリエイターです。
学生生活をしつつ、授業や独学で得た知見をもとに様々な創作活動を行っています。</p>
            <SNSBar/>
            <Skills/>
        </div>
    )
}

export default About
