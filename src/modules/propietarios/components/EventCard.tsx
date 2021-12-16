import {
    Grid,
    Typography
} from '@mui/material';

interface card {
    title: string;
    img: string;
}

const EventCard = (props: card) => {
    return (
        <>
            <div className='card-evento' style={{ backgroundColor: '#000', margin: '.3rem' }}>
                <div>
                    <img style={{ width: '100%', height: '350px', objectFit: 'cover' }} src={props.img} alt={props.title} />
                </div>
                <div style={{minHeight: '120px'}}>
                    <Typography
                        className='yellow'
                        variant='h5'
                        sx={{
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            p: 3,
                        }}>{props.title}</Typography>
                </div>
            </div>
        </>
    )
}


export default EventCard;