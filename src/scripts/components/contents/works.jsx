import React from 'react'
import Work from './work'
import { Controller, Scene } from 'react-scrollmagic';
import Appup from '../../app';

const App = () => (
  <div>
    <Controller>
      <Scene duration={600} pin>
        <div>Sticky Example</div>
      </Scene>
    </Controller>
  </div>
);

function Works() {
  return (
    <div>
      <h1 name="works">Works</h1>
      <div>
        <Work link="https://github.com/rikutons/WanderTempo" imageID="4">
          Wander Tempo<br />
          Unityを利用した3D音楽ゲーム
        </Work>
        <Work link="" imageID="1">
          IntroOfMasuda<br />
          学校の課題製作<br />
          HTML + CSSを使った島根県益田市の紹介サイト
        </Work>
      </div>
    </div>
  )
}

export default Works
