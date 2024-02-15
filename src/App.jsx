
import './App.css'
import './_config/mode_white_Black.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
import { useThemeContext } from './context/ThemeContext'
import DefaultLayout from './components/templates/DefaultLayout';
import Text from './components/atoms/Text/Text';
import Knowledge from './pages/knowledge/Knowledge';

function App() {


  const { contextTheme, setContextTheme } = useThemeContext();


  return (
    <div className="general" id={contextTheme}>
      <BrowserRouter>
        <DefaultLayout />
        <div className="central">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Knowledge' element={<Knowledge />} />
          </Routes>
        </div>
        <div className="copyright">
          <Text text={'Miguel Alvarez © 2024'} />
        </div>
      </BrowserRouter>


    </div>
  )
}

export default App
