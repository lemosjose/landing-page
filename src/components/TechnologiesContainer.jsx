import {
    DiReact,
    DiJava,
    DiPython,
    DiGit,
    DiLinux,
    DiDocker,
} from "react-icons/di";

import "../styles/components/technologiescontainer.scss";

const techs = [
    { id: "react", name: "ReactJS", icon: <DiReact />, info: "Utilizado para criação de front-ends para aplicações web"},
    { id: "java", name: "Java", icon: <DiJava />, info: "Utilizado para aplicações desktop e também back-ends de aplicações web com Spring Framework"},
    { id: "python", name: "Python", icon: <DiPython />, info: "Utilizado para diversas finalidades, utilizo em meus projetos para automatizações e criações de back-ends" },
    { id: "git", name: "Git", icon: <DiGit />, info: "Utilizado para gerenciar e versionar projetos" },
    { id: "linux", name: "Linux", icon: <DiLinux />, info: "Meu sistema operacional principal. Também utilizado em servidores" },
    { id: "docker", name: "Docker", icon: <DiDocker />, info: "Sistema de contêineres, utilizado em deploy de aplicações, serviços de CI/CD, etc" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias/Stacks</h2>
        <div className="technologies-grid">
            {techs.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tech-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.info}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer