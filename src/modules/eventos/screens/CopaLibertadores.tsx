import EventoLigaPro
 from "../components/EventoLigaPro";
const CopaLibertadores = () => {

    const cards = [];
    for(let i = 0; i < 5; i++) {
        cards.push(
            <EventoLigaPro key={i} />
        )
    }

    return (
        <>
        {cards}
        </>
    )
}

export default CopaLibertadores;