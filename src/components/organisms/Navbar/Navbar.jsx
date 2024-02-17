import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Title from '../../atoms/Title/Title'
import Button from '../../atoms/Button/Button'
import './navbar.css'
import classnames from 'classnames'
import Icon from '../../atoms/Icons/Icon'
import { useThemeContext } from '../../../context/ThemeContext'

const Navbar = ({ icon }) => {
  const { contextTheme, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

   
    window.addEventListener('popstate', handleRouteChange);

   
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const iconClassNames = classnames('icono', {
    hasIcon: icon
  });

  return (
    <div className={`navbar ${iconClassNames}`}>
      <div className={`navbar__title`}>
        {contextTheme === "Dark" ? (
          <Title icon={'totoroWhite'} level={'h3'} text={'Miguel Alvarez'} />
        ) : (
          <Title icon={'totoroBlack'} level={'h3'} text={'Miguel Alvarez'} />
        )}
      </div>
      <div className="navbar__navs">
        <ul className={`ul ${isMenuOpen ? 'mobile-menu' : ''}`}>
          <NavLink to='/' className="li" onClick={toggleMenu}>
            <a className="a">About</a>
          </NavLink>
          <NavLink to='/Services' className="li" onClick={toggleMenu}>
            <a href="" className="a">Services</a>
          </NavLink>
          <NavLink to='/Projects' className="li" onClick={toggleMenu}>
            <a href="" className="a">Projects</a>
          </NavLink>
          <NavLink to='/Knowledge' className="li" onClick={toggleMenu}>
            <a href="" className="a">Knowledge</a>
          </NavLink>
          <a href='https://github.com/LuisMiguelDevelopment' to="/Source" className="li" onClick={toggleMenu}>
            <Icon type={'github'} />
            <p className="">Source</p>
          </a>
        </ul>
      </div>
      <div className="buttons">
        <div className="navbar__mode" onClick={toggleTheme}>
          {contextTheme === "Dark" ? (
            <Button icon={'sun'} variant={'buttonPurpleGradient'} />
          ) : (
            <Button icon={'moon'} variant={'buttonBlackGradient'} />
          )}
        </div>
        <div className="bar" onClick={toggleMenu}>
          {contextTheme === "Dark" ? (
            <Button icon={'bar'} variant={'buttonBlackGradient'}/>
          ) : (
            <Button icon={'bar'} variant={'buttonPurpleGradient'}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
