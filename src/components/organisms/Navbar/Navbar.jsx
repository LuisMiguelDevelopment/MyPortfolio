import Title from '../../atoms/Title/Title'
import Button from '../../atoms/Button/Button'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__title">
          <Title icon={'totoroWhite'} level={'h3'} text={'Miguel Alvarez'}/>
        </div>
        <div className="navbar__navs">
          <ul className='ul'>
            <div className="li">
              <a href="" className="a">About</a>
            </div>
            <div className="li">
              <a href="" className="a">Services</a>
            </div>
            <div className="li">
              <a href="" className="a">Projects</a>
            </div>
            <div className="li">
              <a href="" className="a">Knowledge</a>
            </div>
            <div className="li">
              <a href="" className="a">Source</a>
            </div>
          </ul>
        </div>
        <div className="navbar__mode">
          <Button icon={'sun'}/>
        </div>
    </div>
  )
}

export default Navbar