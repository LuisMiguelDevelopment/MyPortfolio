import './projects.css';
import Title from '../../components/atoms/Title/Title';
import Card from '../../components/molecules/Card/Card';
import Licorera from '../../assets/img/Licorerala69.jpg'
import Studio from '../../assets/img/StudioGhibli.jpg'
import Login from '../../assets/img/LoginMEAN.jpg'
import Layout from "../../_config/Layout"


const Projects = () => {
  return (
    <Layout>
        <div className="text-title__projects">
        <Title text={'Projects'} level={'h3'} />
      </div>
      <div className="card-projects">
        <Card link={'https://github.com/LuisMiguelDevelopment/LicoreraLa69.git'} image={Licorera} alt={'image'} showButton={true} icon={'github'}   name={'Licorera la 69'} description={'Licorera la 69 is a shopping cart web application for a liquor store in itagui antioquia. This was the project done in the SENA.'} />
        <Card link={'https://github.com/LuisMiguelDevelopment/StudioGhibli.git'} image={Studio} alt={'image'}  name={'Studio Ghibli'} showButton={true} icon={'github'}  description={'Studio ghibli is a portfolio of images made using flex is a work done for the SENA.'} />
        <Card link={'https://github.com/LuisMiguelDevelopment/CRUD-18-07-2023.git'} image={Login} alt={'image'} name={'Login Mean'} showButton={true} icon={'github'}  description={'Login Mean is a full stack work done with angular and a node js server for SENA.'} />
      </div>
    </Layout>
  )
}

export default Projects