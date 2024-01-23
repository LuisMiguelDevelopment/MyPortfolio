import './Button.css';
import classnames from 'classnames';
import Icon from '../Icons/Icon';
const Button = ({variant , text , icon}) => {

    const buttonClases = classnames('button',{
        buttonGreyGradient : variant === 'buttonGreyGradient',
        buttonPurple : variant === 'buttonPurple',
        buttonPurpleGradient :variant === 'buttonPurpleGradient',
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