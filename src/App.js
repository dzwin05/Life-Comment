import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="wrapper">
      <div className="button-container">
        <button className="camera-button">카메라</button>
      </div>
      <div className="video-container">
        <div className="video-item">
          <h2>camera</h2>
          <video id="preview"></video>
        </div>
        <div className="video-item">
          <h2>camera</h2>
          <video id="recording"></video>
        </div>
      </div>
    </div>
  );
}

//https://www.youtube.com/watch?v=g6RpmxvHAZY

export default App;
