import React from 'react';
import './css/global.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Wallpaper from './Components/Wallpaper';

function App() {
  return (
    <>
      <Navbar />

      <section className="header">
        <div className="container">
          <Intro />
          <Wallpaper />
        </div>
      </section>
    </>
  );
}

export default App;
