import './Recomendations.css';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';

const Recommendations = ({source ,altText ,text , subtitle , subtitle2 , level}) => {
  return (
    <div className='recoment'>
        <Image source={source} altText={altText} />
        <Title text={text} subtitle={subtitle} subtitle2={subtitle2} level={level} />
    </div>
  )
}

export default Recommendations