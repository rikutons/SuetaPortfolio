import React from 'react'
import Work from './work'

function Works() {
  return (
    <div>
      <h1 id="works">Works</h1>
      <div>
        <Work link="https://github.com/rikutons/WanderTempo" image="wander-tempo.png">
          Wander Tempo<br />
          Unityを利用した3D音楽ゲーム
        </Work>
        <Work link="https://rikutons.github.io/IntroOfMyCity/" image="intro-of-masuda.png" snsicon="web.svg">
          IntroOfMasuda<br />
          学校の課題製作<br />
          Reactを使った島根県益田市の紹介サイト
        </Work>
        <Work link="https://github.com/rikutons/BulletCooperationStory" image="danmaku-renkeitan.png">
          弾幕連携譚<br />
          Dxlibを使った弾幕シューティングゲーム
        </Work>
        <Work link="https://www.youtube.com/watch?v=__7tULAgyv8" image="motion-graphics_thumb.png" snsicon="YouTube.svg">
          After Effects買って一週間でMG作ってみた<br />
          After Effectsの習作
        </Work>
      </div>
    </div>
  )
}

export default Works
