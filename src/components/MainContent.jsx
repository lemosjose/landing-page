import ProjectsContainer from "./ProjectsContainer";
import AboutContainer from "./AboutContainer.jsx";
import TechnologiesContainer from "./TechnologiesContainer";


import "../styles/components/maincontent.scss";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <ProjectsContainer />
      <TechnologiesContainer />
    </main>
  )
}

export default MainContent