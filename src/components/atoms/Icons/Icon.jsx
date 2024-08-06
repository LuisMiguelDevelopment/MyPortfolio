import { BsMoon , BsSun , BsGithub , BsList } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import TotoroWhite from './TotoroLogoWhite.png'
import TotoroBlack from './TotoroLogoBlack.png'
import ArrowWhite from './Arrow 1.svg'
import ArrowBlack from './Arrow Black.svg'

const Icon = ({type}) => {
  return (
    <>
        {type === 'moon' && <BsMoon />}
        {type === 'sun' &&  <BsSun  />}
        {type === 'github' &&  <BsGithub/>} 
        {type === 'bar' && <BsList />} 
        {type === 'link' && <CiLink />} 
        {type === 'totoroWhite' &&  <img src={TotoroWhite} alt="totoro logo white" />} 
        {type === 'totoroBlack' && <img src={TotoroBlack} alt="totoro logo black"/>}
        {type === 'arrowWhite' && <img src={ArrowWhite} alt="ArrowWhite"/>}
        {type === 'arrowBlack' && <img src={ArrowBlack} alt="ArrowBlack"/>}
    </>
  )
}

export default Icon