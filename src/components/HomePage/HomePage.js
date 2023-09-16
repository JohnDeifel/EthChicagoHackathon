import "./HomePage.css"
import Resume from "../../assets/Mark Nguyen Resume 2023-4.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';

export default function HomePage() {
    const myStyle = { 
      backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/02/03/97/01/1000_F_203970166_N0J03DDS5GWIyQgwR93lvXGjE9vcLY7Z.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "79vh",
      width: "auto",
      }

    return (
      <>
        <div className="home" style={myStyle}>
            <h1>BarterChat</h1>
            <h2>A Revolutionary Platform to trade NFTs in real time.</h2>
            <a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">
        View Resume
        <i className="chevron-right"></i>
      </a>
        </div>
        <AboutPage/>
        <ExperiencePage/>
        <ProjectPage/>
        <ContactPage/>
      </>
    );
  }