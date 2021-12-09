import EventoCopa from "../components/EventoCopa";

const LigaProScreen = () => {

    const cards = [];
    for(let i = 0; i < 5; i++) {
        cards.push(
            <EventoCopa key={i}/>
        )
    }

    return (
        <>
            { cards }
        </>
    )
}

export default LigaProScreen;