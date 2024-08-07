import React, { useEffect } from "react";
import Title from "../../components/atoms/Title/Title";
import InfoText from "../../components/atoms/InfoText/InfoText";
import Layout from "../../_config/Layout";
import { useThemeContext } from "../../context/ThemeContext";
import Image from "../../components/atoms/Image/Image";
import Text from "../../components/atoms/Text/Text";
import imageProfile from "../../assets/img/Image Profile.png";
import Button from "../../components/atoms/Button/Button";
import Datatext from "../../components/atoms/Date-text/Datetext";
import signWhite from "../../assets/img/FirmarWhite.png";
import signBlack from "../../assets/img/FirmaBlack.png";
import Recommendations from "../../components/molecules/Recommendations/Recommendations";
import Ade from "../../assets/img/ImageAdelaida.png";
import Yei from "../../assets/img/ImageYeison.png";
import Seba from "../../assets/img/ImageSebas.png";
import totoro from "../../assets/img/totoro.png";
import "./about.css";

const About = () => {
  const { contextTheme } = useThemeContext();
  const abouText = "Hi, I am a web developer in process based in Colombia!";

  useEffect(() => {
    const totoroButton = document.getElementById("totoroBottom");
    const totoroUp = document.querySelector(".totoroUp");

    totoroButton.onmouseover = function () {
      totoroUp.classList.add("up");
    };

    totoroButton.addEventListener("mouseout", function () {
      totoroUp.classList.remove("up");
    });
  }, []);

  const mail = "luismidev09@gmail.com";

  return (
    <Layout className="about">
      <div className="infoTextt">
        {contextTheme === "Dark" ? (
          <InfoText text={abouText} variant={"infoTextBlack"} />
        ) : (
          <InfoText text={abouText} variant={"infoTextPurple"} />
        )}
      </div>
      <div className="infoMe">
        <div className="image-infoMe" id="imgProfile">
          <Image source={imageProfile} altText={"profileImage"} />
        </div>
        <div className="text-infoMe">
          <Title
            text={"Miguel Alvarez"}
            level={"h1"}
            subtitle={"Software analysis and development student (SENA)"}
          />
        </div>
      </div>
      <div className="About">
        <div className="About-title">
          <Title text={"About"} level={"h3"} />
        </div>
        <div className="info-about">
          <Text
            text={
              "Miguel is a web developer in process based in Medellin, he has the ability to capture ideas and translate them into code, he is very creative and very responsible. In his free time he likes to play video games, draw and study."
            }
          />
        </div>
      </div>
      <div className="button-projects">
        <Image source={totoro} className={"totoroUp"} altText={"totoro"} />
        {contextTheme === "Dark" ? (
          <Button
            id={"totoroBottom"}
            link={`mailto:${mail}`}
            text={"Contact me"}
            variant={"buttonPurpleGradient"}
          />
        ) : (
          <Button
            id={"totoroBottom"}
            link={`mailto:${mail}`}
            text={"Contact me"}
            variant={"buttonPurple2"}
          />
        )}
      </div>
      <div className="Bio">
        <div className="bio-title">
          <Title text={"Bio"} level={"h3"} />
        </div>
        <div className="bio-date">
          <Datatext subtitle={"2003"} text={"Born in Itagui , Colombia."} />
          <Datatext
            subtitle={"2022"}
            text={
              "Beginning of software analysis and development studies in SENA."
            }
          />
          <Datatext
            subtitle={"2024 to present"}
            text={"Software developer internship stage completed (SENA)."}
          />
        </div>
        <div className="About-title about-recommendations">
          <Title text={"Recommendations"} level={"h3"} />
        </div>
        <div className="recommendations">
          <Recommendations
            source={Ade}
            altText={"image-ade"}
            text={"Adelaida Cano Molina"}
            level={"h3"}
            subtitle={"Systems engineer"}
            subtitle2={"SENA instructor"}
          />
          <Recommendations
            source={Yei}
            altText={"image-yei"}
            text={"Yeison Gil Alzate"}
            level={"h3"}
            subtitle={"Software development"}
            subtitle2={"SENA student"}
          />
          <Recommendations
            source={Seba}
            altText={"image-seba"}
            text={"Sebastian Vallejo"}
            level={"h3"}
            subtitle={"Software development"}
            subtitle2={"SENA student"}
          />
        </div>
        <div className="sign">
          {contextTheme === "Dark" ? (
            <Image source={signWhite} />
          ) : (
            <Image source={signBlack} altText={"sign"} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;
