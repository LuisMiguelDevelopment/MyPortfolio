import "./projects.css";
import Title from "../../components/atoms/Title/Title";
import Card from "../../components/molecules/Card/Card";
import Licorera from "../../assets/img/Licorerala69.jpg";
import VisionWeb from "../../assets/img/VISIONWEB.png";
import MyPortfolio from "../../assets/img/MyPortfolio.png";
import PracticasCtm from "../../assets/img/PRACTICASCTM.png";
import StreamingCol from "../../assets/img/streamingCol.png";
import scriptCraftHost from "../../assets/img/scriptCraftHost.png";
import Layout from "../../_config/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="text-title__projects">
        <Title text={"Projects"} level={"h3"} />
      </div>
      <div className="card-projects">
        <Card
          link={"https://script-craft-host.vercel.app/"}
          image={scriptCraftHost}
          alt={"image"}
          name={"ScriptCraftHost"}
          showButton={true}
          icon={"link"}
          colorButton={"buttonPurple"}
          description={
            "Technologies used: Next.js with Chakra UI, Node.js backend, and MySQL database. Integrated Docker for containerized server management, SSH2 for secure connections, and Socket.io for real-time updates."
          }
        />
        <Card
          link={"https://www.streamingcol.online"}
          image={StreamingCol}
          alt={"image"}
          name={"StreamingCol"}
          showButton={true}
          icon={"link"}
          colorButton={"buttonGreyGradient"}
          description={
            "Develop the web application for a client that sells Streaming services. The technologies used are Nextjs with Chakra-ui, NodeJs backend and Mysql database."
          }
        />
        <Card
          link={"https://github.com/LuisMiguelDevelopment/VISIONWEB.git"}
          image={VisionWeb}
          alt={"image"}
          name={"Vision Web"}
          showButton={true}
          icon={"github"}
          colorButton={"buttonPurple"}
          description={
            "Vision web is a social network of video calls which you can interact with friends, it was made with Socket.io , Simple-peer , sql server , nodejs and Nextjs."
          }
        />
        <Card
          link={"https://github.com/LuisMiguelDevelopment/MyPortfolio.git"}
          image={MyPortfolio}
          alt={"image"}
          name={"My Portfolio"}
          showButton={true}
          icon={"github"}
          colorButton={"buttonPurple"}
          description={
            "My portfolio was made with Vitejs, Three.js, a 3D library for JavaScript and Framer Motion an animation library and using atomic design."
          }
        />
        <Card
          link={"https://github.com/LuisMiguelDevelopment/LicoreraLa69.git"}
          image={Licorera}
          alt={"image"}
          showButton={true}
          icon={"github"}
          name={"Licorera la 69"}
          colorButton={"buttonPurple"}
          description={
            "Licorera la 69 is a shopping cart web application for a liquor store in itagui antioquia. This was the project done in the SENA."
          }
        />
      </div>
      <div className="text-title__projects text-title__participation">
        <Title text={"Participation"} level={"h3"} />
      </div>
      <div className="card-projects">
        <Card
          link={"https://github.com/sena-proyectos/practicas-ctm.git"}
          image={PracticasCtm}
          alt={"image"}
          name={"Practicas CTM"}
          showButton={true}
          icon={"github"}
          colorButton={"buttonPurple"}
          description={
            "Project dedicated to the registration and follow-up of trainees who are currently in the practical stage of their training program. "
          }
        />
      </div>
    </Layout>
  );
};

export default Projects;
