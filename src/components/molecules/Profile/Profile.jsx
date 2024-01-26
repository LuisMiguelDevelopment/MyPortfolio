import './profile.css';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';


const Profile = ({soruce ,altText ,text , subtitle , level}) => {

  return (
    <div className='profile'>
        <Image source={soruce} altText={altText} />
        <Title text={text} subtitle={subtitle} level={level} />
    </div>
  )
}

export default Profile