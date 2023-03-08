import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") // whether dark mode is enabled
  function toggleMode() {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode Disabled")
      document.title = "TextUtils - Light Mode"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Enabled")
      document.title = "TextUtils - Dark Mode"
    }
  }
  const [alert, setAlert] = useState("")
  function showAlert(msg) {
    setAlert(msg)
    setTimeout(() => {
      setAlert("")
    }, 2000)
  }
  return (
    <>
      {/* <div className='container'>
        <About />
        <Textform heading="Enter text below" mode={mode} showAlert={showAlert} />
      </div> */}

      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

        {/* <div style={{height:'50px'}}>
          <Alert alert={alert} />
        </div> */}

        <div className='container'>
          <Routes>

            <Route path="/" element={<Textform heading="Try TextUtils :" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
