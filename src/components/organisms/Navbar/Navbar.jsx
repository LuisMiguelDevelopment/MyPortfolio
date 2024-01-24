import { useState } from 'react'
import Title from '../../atoms/Title/Title'
import Button from '../../atoms/Button/Button'
import './navbar.css'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'
import Icon from '../../atoms/Icons/Icon'
import { useEffect } from 'react'
import { useThemeContext } from '../../../context/ThemeContext'

const Navbar = ({ icon }) => {

  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(contextTheme === 'Dark');

  const handleSwitch = () => {
    const nextTheme = contextTheme === 'Dark' ? 'Light' : 'Dark';
    setContextTheme(nextTheme);
    setChecked(nextTheme === 'Dark')
  }


  useEffect(() => {
    const bar = document.querySelector(".bar");
    const links = document.querySelector(".ul");


    if (bar && links) {
      const burgermenu = () => {
        links.classList.toggle('mobile-menu');
      };
      bar.addEventListener('click', burgermenu);
      return () => {
        bar.removeEventListener('click', burgermenu);
      }
    }

  })


  const iconClassNames = classnames('icono', {
    hasIcon: icon
  })

  return (
    <div className={`navbar ${iconClassNames}`}>
      <div className={`navbar__title `}>
        {checked ? (
          <Title icon={'totoroWhite'} level={'h3'} text={'Miguel Alvarez'} />
        ) : (
          <Title icon={'totoroBlack'} level={'h3'} text={'Miguel Alvarez'} />
        )}

      </div>
      <div className="navbar__navs">
        <ul className='ul'>
          <NavLink to='/' className="li">
            <a className="a">About</a>
          </NavLink>
          <NavLink to='/Services' className="li">
            <a href="" className="a">Services</a>
          </NavLink>
          <NavLink to='/Projects' className="li">
            <a href="" className="a">Projects</a>
          </NavLink>
          <NavLink to='/Knowledge' className="li">
            <a href="" className="a">Knowledge</a>
          </NavLink>
          <a href='https://github.com/LuisMiguelDevelopment' to="/Source" className="li">
            <Icon type={'github'} />
            <p className="">Source</p>
          </a>
        </ul>
      </div>
      <div className="buttons">
        <div className="navbar__mode" onClick={handleSwitch}>
          {checked ? (
            <Button icon={'sun'} variant={'buttonPurpleGradient'} />
          ) : (
            <Button icon={'moon'} variant={'buttonBlackGradient'} />
          )}
        </div>
        <div className="bar">
          {checked?(<Button icon={'bar'}variant={'buttonBlackGradient'}/>):(<Button icon={'bar'}variant={'buttonPurpleGradient'}/>)}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar