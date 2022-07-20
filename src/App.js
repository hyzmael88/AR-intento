import logo from './logo.svg';
import './App.css';
import Cobra from './assets/UV_box_GLB.glb'
import Uno from './assets/poly.glb'

function App() {
  return (
    <>
      <p>hola</p>
      {/* <model-viewer bounds="tight" enable-pan src={Cobra} ar ar-modes="scene-viewer webxr quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
   
</model-viewer> */}
<model-viewer bounds="tight" enable-pan src={Uno} ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.jpeg" shadow-intensity="2" exposure="1.19" auto-rotate>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    
</model-viewer>



 
    </>
  );
}

export default App;
