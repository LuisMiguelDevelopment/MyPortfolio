import { BsMoon , BsSun , BsGithub } from "react-icons/bs";
import TotoroWhite from './TotoroLogoWhite.png'
import TotoroBlack from './TotoroLogoBlack.png'

const Icon = ({type}) => {
  return (
    <>
        {type === 'moon' && <BsMoon />}
        {type === 'sun' &&  <BsSun  />}
        {type === 'github' &&  <BsGithub />} 
        {type === 'totoroWhite' &&  <img src={TotoroWhite} alt="totoro logo white" />} 
        {type === 'totoroBlack' && <img src={TotoroBlack} alt="totoro logo black"/>}
    </>
  )
}

export default Icon