import React, { useEffect, useState } from 'react';
import './totoroEyes.css';
import totoro from './img/totoro.png';
import totoroMouth from './img/totoroboca.png';
import totoroBlue from './img/totoroBlue.png';
import totoroWhite from './img/totoroSmall.png';
import totoroEyes from './img/eyestotoro.png';
import {useThemeContext} from '../../../context/ThemeContext'
import Icon from '../../atoms/Icons/Icon';
import Text from '../../atoms/Text/Text';
const TotoroEyes = () => {
  const [totoroImage, setTotoroImage] = useState(totoro);
  const { contextTheme } = useThemeContext();

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      // Your existing mousemove logic here...
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById('anchor');
      const rekt = anchor.getBoundingClientRect();

      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      console.log(angleDeg);

      const eyes = document.querySelectorAll('.eye');

      eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    });

    function angle(cx, cy, ex, ey) {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx); //range (-PI, PI]
      const deg = rad * 180 / Math.PI; // rads to degs , range (-180 , 180]
      return deg;
    }

    const anchor = document.getElementById('anchor');
    const totoroAzul = document.querySelector('.totoroAzul');
    const totoroWhite = document.querySelector('.totoroWhite');

    setTotoroImage(totoroMouth);

    anchor.onmouseover = function () {
      totoroAzul.classList.add("funciona");
      totoroWhite.classList.add("white");
      setTotoroImage(totoro); // Update the state to totoro image
    };

    anchor.addEventListener('mouseout', function () {
      totoroAzul.classList.remove("funciona");
      totoroWhite.classList.remove("white");
      setTotoroImage(totoroMouth); 
    });
  }, []);

  return (
    <div className='totoro__Eyes'>
        <div className="icon_totoro">
            <Text text={'Touches Totoro'} />
            {contextTheme === "Dark" ? ( <Icon type={'arrowWhite'} />):( <Icon type={'arrowBlack'} />)}
        </div>
      <img id="anchor" className="totoro" src={totoroImage} alt="" />
      <img className="totoroAzul" src={totoroBlue} alt="" />
      <img className="totoroWhite" src={totoroWhite} alt="" />

      <div id="eyes">
        <img src={totoroEyes} alt="" className="eye1 eye" />
        <img src={totoroEyes} alt="" className="eye2 eye" />
      </div>
    </div>
  );
}

export default TotoroEyes;
