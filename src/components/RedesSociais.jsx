import { FaLinkedinIn, FaGithub} from "react-icons/fa";

import "../styles/components/redes.scss";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/lemosjose/"},
  { name: "github", icon: <FaGithub />, link: "https://github.com/lemosjose" }
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;