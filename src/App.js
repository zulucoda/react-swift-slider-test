import React, { Component } from 'react';
import SwiftSlider from 'react-swift-slider'

class App extends Component {
  render() {
    const data =  [
      {'id':'1','src':'/assets/images/2017_alfa-romeo_stelvio_leaked_02.jpg'},
      {'id':'2','src':'/assets/images/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
      {'id':'3','src':'/assets/images/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
      {'id':'4','src':'/assets/images/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
      {'id':'5','src':'/assets/images/ARWP_Infra_Desk_1920_1080_Quad.png'},
      {'id':'6','src':'/assets/images/ARWP_RearRunning_Desk_1920_1080_Hero.png'},
      {'id':'7','src':'/assets/images/ARWP_Running_Desk_1920_1080_Engine.png'},
      {'id':'8','src':'/assets/images/ARWP_Rear34Run_Desk_1920_1080_Hero.png'}
    ];

    return (
      <SwiftSlider data={data} height={900} enableNextAndPrev={false} />
    );
  }
}

export default App;
