import './services.css';
import Title from '../../components/atoms/Title/Title';
import Card from '../../components/molecules/Card/Card';
import frontEnd from '../../assets/img/ServicesFrontEnd.png'
import backEnd from '../../assets/img/ServicesBackEnd.png'
import TotoroEyes from '../../components/models/AnimationTotoro/TotoroEyes';
import Layout from "../../_config/Layout"
const Services = () => {
  return (
    <Layout className='cardd'>
      <div className="text-title__services">
        <Title text={'Services'} level={'h3'} />
      </div>
      <div className="card-services">
        <Card image={frontEnd} alt={'image-frontend'} name={'Front End'} description={'Passionate about front-end development, he enjoys transforming creative designs into interactive and functional experiences.'} />
        <Card image={backEnd} alt={'image-backend'} name={'Back End'} description={'Throughout his learning and projects he knows how to work with cruds, websockets, database connections, tokens, cookies and password encryption.'} />
      </div>
      <div className="animation-eyes">
        <TotoroEyes/>
      </div>
    </Layout>
  )
}

export default Services