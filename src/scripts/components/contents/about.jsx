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
            <p>松江高専情報工学科から筑波大学情報学群メディア創成学類に編入した情報学徒です。2023年現在は3年生です。</p>
            <p>このポートフォリオサイトは高専4年のときに作ったものです。<br></br>
                アニメーションをしっかり使いつつ、流行り(?)のレスポンシブデザインを意識して作りました。<br></br>
            </p>
            <p>ゲーム大好き・競プロ的なプログラミング大好きな人間なので<br></br>
            ゲーム制作やゲームAIの研究で食べていく事が人生の目標です。<br></br>
            Webコンテンツを作ること(特に見た目に拘って現代的なUIを作ること)にも興味があります。<br></br>
            最近の関心は専らArchLinux周りの環境を弄ることです。</p>
            <p>2023/2/24 更新</p>
            <SNSBar/>
            <Skills/>
        </div>
    )
}

export default About
