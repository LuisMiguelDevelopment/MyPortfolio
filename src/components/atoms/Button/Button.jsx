import './Button.css';
import classnames from 'classnames';
import Icon from '../Icons/Icon';
const Button = ({variant , text , icon}) => {

    const buttonClases = classnames('button',{
        buttonGreyGradient : variant === 'buttonGreyGradient',
        buttonBlackGradient : variant === 'buttonBlackGradient',
        buttonPurple : variant === 'buttonPurple',
        buttonPurplelight : variant === 'buttonPurplelight',
        buttonPurpleGradient :variant === 'buttonPurpleGradient',
        buttonYellowGradient :variant === 'buttonYellowGradient',
        hasIcon: icon
    })

  return (
    <button className={buttonClases}>
        {icon && <Icon className="icono" type={icon}/>}
        {text}
    </button>
  )
}

export default Button