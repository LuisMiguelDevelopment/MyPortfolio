import './infoText.css'
import classnames from 'classnames'
const InfoText = ({text , variant }) => {

    const infoClass = classnames('infoText',{
        infoTextBlack : variant === 'infoTextBlack',
        infoTextPurple : variant === 'infoTextPurple'
    })


  return (
    <div className={infoClass}>
      <p>{text}</p>  
    </div>
  )
}

export default InfoText