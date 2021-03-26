import React from 'react';
import './App.css';
import Script from './components/Script';
import './assets/stylesheet.css';

function App() {
  console.log('test');



  return (
    <div className="App">
    <h1>My google map</h1>
      <div id='map'>

      </div>
      <Script />
    </div>
  );
}

export default App;
