import SocialNetworkContainer from "./RedesSociais";
import InformationContainer from "./InformationContainer";
import Foto from "../../assets/Foto.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Foto} alt="José Lemos"></img>
        <p className="title">Desenvolvedor React/NextJS + Java/Spring</p>
        <SocialNetworkContainer />
        <InformationContainer />
        <a href="https://media.licdn.com/dms/document/media/D4D2DAQE76UQeF-DTFQ/profile-treasury-document-pdf-analyzed/0/1695066441204?e=1695859200&v=beta&t=ywbfGrSAdJi-cq3ACz9xgz3LTnIJ7h2bm-woZCJ-n9o" className="btn">
            Currículo
        </a>
    </aside>
  )
}

export default Sidebar