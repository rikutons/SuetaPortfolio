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
            <div className="about__icon-name">居田(Sueta)</div>
            <p>松江高専情報工学科から筑波大学情報学群メディア創成学科に編入した情報学徒です。2022年現在は3年生です。</p>
            <p>このポートフォリオサイトは高専4年のときに作ったものです。<br></br>
                アニメーションをしっかり使いつつ、流行り(?)のレスポンシブデザインを意識して作りました。<br></br>
            </p>
            <p>ゲーム大好き・競プロ的なプログラミング大好きな人間なので<br></br>ゲーム制作やゲームAIの研究で食べていく事が人生の目標です。<br></br>
            最近の関心はモーショングラフィックス・音楽制作・maimai(音ゲー)あたりです。</p>
            <p>2022/10/8 更新</p>
            <SNSBar/>
            <Skills/>
        </div>
    )
}

export default About
