import './App.css';

function App() {

  return (
    <div className="wrapper">
      <div className="button-container">
        <button className="camera-button">카메라</button>
      </div>
      <div className="camera-container">
        <div className="camera-item">
          <h2>camera</h2>
          <video id="preview"></video>
        </div>
      </div>
      
    </div>
  );
}

export default App;
