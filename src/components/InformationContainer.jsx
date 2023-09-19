import "../styles/components/informationcontainer.scss";

const InfoContainer = [
    { nome: "Telefone",info: "(34) 99971-1049"},
    { nome: "Email", info: "devlemosjose@gmail"},
    {nome: "Localização", info: "Ituiutaba/MG"}
];

const InformationContainer = () => {
  return (
    <section id="information">
        {InfoContainer.map((info) => (
            <div className='info-card' key={info.nome}>
                <h3 key={info.nome}> {info.nome}</h3>
                <p key={info.nome}>{info.info}</p>
            </div>
        ))}
    </section>
  )
}


export default InformationContainer