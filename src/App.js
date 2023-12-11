import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/About/about.js";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Testimonal from "./components/testimonals/testimonals";


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Testimonal />
      
      
    </div>
  );
}

export default App;
