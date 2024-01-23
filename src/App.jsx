import { useState } from 'react';
import './App.css'
import './_config/mode_white_Black.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Services from './pages/services/Services';
import { useThemeContext } from './context/ThemeContext'
import Navbar from './components/organisms/Navbar/Navbar';

function App() {


  const { contextTheme, setContextTheme } = useThemeContext();


  return (
    <div className="general" id={contextTheme}>

      <BrowserRouter>
      <Navbar/>
        <div className="central">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Services' element={<Services />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
