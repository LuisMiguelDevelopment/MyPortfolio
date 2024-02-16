import './knowledge.css';
import Title from '../../components/atoms/Title/Title';
import SectionAnimated from '../../components/models/SectionAnimated/SectionAnimated'
import Image from '../../components/atoms/Image/Image';
import mouseBlack from '../../assets/img/MouseBlack.png'
import mouseWhite from '../../assets/img/MouseWhite.png'
import Layout from "../../_config/Layout"
import { useThemeContext } from '../../context/ThemeContext'

const Knowledge = () => {


  const { contextTheme } = useThemeContext();

  return (
    <div className="Knowledge_general">
      <Title level={'h3'} text={'Knowledge'} />
      <div className='knowledge'>
        <SectionAnimated />
        {contextTheme === 'Dark' ? (<Image source={mouseWhite} />) : (<Image source={mouseBlack} />)}

      </div>
    </div>
  )
}

export default Knowledge