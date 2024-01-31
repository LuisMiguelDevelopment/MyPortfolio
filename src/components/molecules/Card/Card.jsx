import './card.css';
import classnames from 'classnames';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';


const Card = ({ image, alt, name, description, level, showButton , text , icon , link}) => {

    const cardClassNames = classnames('card', {
        hasImage: image
    })

    return (
        <div className={cardClassNames} >
            <div className="img">
                {image && <Image source={image} altText={alt} />}
                {showButton && (
                    <div className="button__card">
                        <Button text={text} icon={icon} variant={'buttonPurple'} link={link}/>
                    </div>
                )}
            </div>
            <div className="content-text">
                <Title text={name} level={level || "h3"} />
                <Text text={description} />
            </div>
        </div>
    )
}

export default Card