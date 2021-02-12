import SwiftSlider from 'react-swift-slider'

const data =  [
  {'id':'1','src':'/assets/images/alfa_romeo_stelvio_01.jpg'},
  {'id':'2','src':'/assets/images/alfa_romeo_stelvio_02.jpg'},
  {'id':'3','src':'/assets/images/alfa_romeo_stelvio_03.jpg'},
  {'id':'4','src':'/assets/images/alfa_romeo_giulia_05.png'},
  {'id':'5','src':'/assets/images/alfa_romeo_giulia_01.jpg'},
  {'id':'6','src':'/assets/images/alfa_romeo_giulia_03.png'},
  {'id':'7','src':'/assets/images/alfa_romeo_giulia_04.png'},
  {'id':'8','src':'/assets/images/alfa_romeo_giulia_02.png'}
];
function App() {
  return (
      <SwiftSlider data={data} height={900} />
  );
}

export default App;
