import './banner.css'
import totoroMovimiento from '../../../assets/img/TotoroMovimiento.gif'
import classnames from 'classnames'
import Title from '../../atoms/Title/Title'
import { useState } from 'react'
import TotoroWhite from '../../models/TotoroWhite/TotoroWhite'
import { useThemeContext } from '../../../context/ThemeContext'
import Icon from '../../atoms/Icons/Icon'


const Banner = ({ image, icon }) => {

  const { contextTheme, toggleTheme } = useThemeContext();





  const [isTotoroVisible, setTotoroVisible] = useState(true);

  const bannerClassNames = classnames('banner', {
    hasImage: !isTotoroVisible,
    hasIcon: icon
  })

  const iconClassNames = classnames('iconss', {
    hasIconn: icon
  })


  const handleClick = () => {
    setTotoroVisible(!isTotoroVisible);
  }


  return (
    <div className={bannerClassNames}>
      <div className="img__banner" >
        <div className="img-ani">
          {isTotoroVisible ? (<img src={totoroMovimiento} alt='totoromov' />) : (<TotoroWhite className="animacion" />)}
        </div>
        <div className={iconClassNames} onClick={handleClick} >
          <Title level={'h3'} text={'Click here!'} />
          {contextTheme == "Dark" ? (
            <Icon type={'arrowWhite'} />
          ) : (
            <Icon type={'arrowBlack'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner