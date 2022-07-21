import logo from './logo.svg';
import './App.css';
import Cobra from './assets/UV_box_GLB.glb'
import Uno from './assets/poly.glb'

function App() {
  return (
    <>
      {/* <model-viewer bounds="tight" enable-pan src={Cobra} ar ar-modes="scene-viewer webxr quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1">
    <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
   
</model-viewer> */}
<model-viewer className="center-block" bounds="tight" enable-pan src={Uno} ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.jpeg" shadow-intensity="2" exposure="1.19" auto-rotate>
    <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        Prueba en tu entorno
    </button>
    
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
    <button id="ar-failure">
    AR is not tracking!
  </button>
</model-viewer>



 
    </>
  );
}

export default App;
