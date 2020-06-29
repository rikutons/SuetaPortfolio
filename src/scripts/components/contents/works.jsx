import React from 'react'
import Work from './work'

function Works() {
  return (
    <div>
      <h1 id="works">Works</h1>
      <div>
        <Work link="https://github.com/rikutons/WanderTempo" imageID="4">
          Wander Tempo<br />
          Unityを利用した3D音楽ゲーム
        </Work>
        <Work link="https://github.com/rikutons/IntroOfMyCity" imageID="1">
          IntroOfMasuda<br />
          学校の課題製作<br />
          HTML + CSSを使った島根県益田市の紹介サイト
        </Work>
        <Work link="https://github.com/rikutons/BulletCooperationStory" imageID="0">
          弾幕連携譚<br />
          Dxlibを使った弾幕シューティングゲーム
        </Work>
      </div>
    </div>
  )
}

export default Works
