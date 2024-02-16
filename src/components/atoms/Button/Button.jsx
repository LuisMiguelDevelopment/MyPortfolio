import './Button.css';
import classnames from 'classnames';
import Icon from '../Icons/Icon';
const Button = ({variant , text , icon , link , id}) => {

    const buttonClases = classnames('button',{
        buttonGreyGradient : variant === 'buttonGreyGradient',
        buttonBlackGradient : variant === 'buttonBlackGradient',
        buttonPurple : variant === 'buttonPurple',
        buttonPurple2 : variant === 'buttonPurple2',
        buttonPurplelight : variant === 'buttonPurplelight',
        buttonPurpleGradient :variant === 'buttonPurpleGradient',
        buttonYellowGradient :variant === 'buttonYellowGradient',
        hasIcon: icon
    })

  return (
    <a href={link} className={buttonClases} id={id}  >
        {icon && <Icon className="icono"  type={icon}/>}
        {text}
    </a>
  )
}

export default Button