import './services.css';
import Title from '../../components/atoms/Title/Title';
import Card from '../../components/molecules/Card/Card';
import frontEnd from '../../assets/img/ServicesFrontEnd.png'
import backEnd from '../../assets/img/ServicesBackEnd.png'
import TotoroEyes from '../../components/models/AnimationTotoro/TotoroEyes';

const Services = () => {
  return (
    <div className='cardd'>
      <div className="text-title__services">
        <Title text={'Services'} level={'h3'} />
      </div>
      <div className="card-services">
        <Card image={frontEnd} name={'Front End'} description={'Passionate about front-end development, he enjoys transforming creative designs into interactive and functional experiences.'} />
        <Card image={backEnd} name={'Back End'} description={'Although he is not fully dedicated to the back end, he knows how to create node js cruds and connect it to the front end.'} />
      </div>
      <div className="animation-eyes">
        <TotoroEyes />
      </div>
    </div>
  )
}

export default Services