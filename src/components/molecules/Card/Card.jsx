import './card.css';
import classnames from 'classnames';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Title from '../../atoms/Title/Title';



const Card = ({ image, alt, name, description, level }) => {

    const cardClassNames = classnames('card', {
        hasImage: image
    })

    return (
        <div className={cardClassNames} >
            <div className="img">
                {image && <Image source={image} altText={alt} />}
            </div>
            <div className="content-text">
                <Title text={name} level={level || "h3"} />
                <Text text={description} />
            </div>
        </div>
    )
}

export default Card