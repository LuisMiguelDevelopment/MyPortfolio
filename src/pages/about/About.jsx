import Title from "../../components/atoms/Title/Title"
import InfoText from "../../components/atoms/InfoText/InfoText"
import { useThemeContext } from '../../context/ThemeContext'
import Image from '../../components/atoms/Image/Image'
import Text from "../../components/atoms/Text/Text"
import imageProfile from '../../assets/img/Image Profile.png'
import Button from '../../components/atoms/Button/Button'
import Datatext from "../../components/atoms/Date-text/Datetext"
import signWhite from '../../assets/img/FirmarWhite.png'
import signBlack from '../../assets/img/FirmaBlack.png'
import Recommendations from '../../components/molecules/Recommendations/Recommendations'
import Ade from '../../assets/img/ImageAdelaida.png'
import Yei from '../../assets/img/ImageYeison.png'
import Seba from '../../assets/img/ImageSebas.png'

import './about.css';
import { useEffect } from "react"
import { Link } from "react-router-dom"
const About = () => {

  const { contextTheme } = useThemeContext();
  const abouText = 'Hi, I am a web developer in process based in Colombia!'


  useEffect(() => {
    const animationImage = document.getElementById('imgProfile');

    const Animation = (inputs, observerr) => {
      inputs.forEach((input) => {
        if (input.isIntersecting) {
          input.target.classList.add('visible');

        } else {
          input.target.classList.remove('visible')
        }
      });
    }


    const observer = new IntersectionObserver(Animation, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1
    })

    observer.observe(animationImage);

  })


  return (
    <div className="" >
      <div className="infoTextt">
        {contextTheme === 'Dark' ? (<InfoText text={abouText} variant={'infoTextBlack'} />) : (<InfoText text={abouText} variant={'infoTextPurple'} />)}
      </div>
      <div className="infoMe">
        <div className="image-infoMe" id="imgProfile">
          <Image source={imageProfile} />
        </div>
        <div className="text-infoMe">
          <Title text={'Miguel Alvarez'} level={'h1'} subtitle={'Software analysis and development student (SENA)'} />
        </div>
      </div>
      <div className="About">
        <div className="About-title">
          <Title text={'About'} level={'h3'} />

        </div>
        <div className="info-about">
          <Text text={'Miguel is a web developer in process based in Medellin, he has the ability to capture ideas and translate them into code, he is very creative and very responsible. In his free time he likes to play video games, draw and study.'} />
        </div>
      </div>

      <Link to={'/Projects'}>
        <div className="button-projects">
          {contextTheme === "Dark" ? (<Button  text={'Projects'} variant={'buttonPurpleGradient'} />) : (<Button text={'Projects'} variant={'buttonPurplelight'} />)}
        </div>
      </Link>

      <div className="Bio">
        <div className="bio-title">
          <Title text={'Bio'} level={'h3'} />

        </div>
        <div className="bio-date">
          <Datatext subtitle={'2003'} text={'Born in Itagui , Colombia.'} />
          <Datatext subtitle={'2022'} text={'Beginning of software analysis and development studies in SENA.'} />
          <Datatext subtitle={'2024 to present'} text={'Internship stage as a software developer (SENA).'} />
        </div>

        <div className="About-title about-recommendations">
          <Title text={'Recommendations'} level={'h3'} />
        </div>

        <div className="recommendations">
          <Recommendations source={Ade} text={'Adelaida Cano Molina'} level={'h3'} subtitle={'Systems engineer'} subtitle2={'SENA instructor'} />
          <Recommendations source={Yei} text={'Yeison Gil Alzate'} level={'h3'} subtitle={'Software development'} subtitle2={'SENA student'} />
          <Recommendations source={Seba} text={'Sebastian Vallejo'} level={'h3'} subtitle={'Software development'} subtitle2={'SENA student'} />
        </div>

        <div className="sign">
          {contextTheme === "Dark" ? (<Image source={signWhite} />) : (<Image source={signBlack} />)}
        </div>

      </div>

    </div>
  )
}

export default About