import {
    Grid,
    Typography,
} from '@mui/material';
import {
    ArrowForward
} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks';
import { Evento } from '../../../../interface/Evento.interface';
import { setEvent } from '../../slices/propietariosSlice';

interface props {
    evento: Evento;
}

const Event = (props: props) => {
    const dispatch = useAppDispatch();
    const navigation = useHistory()

    const handleSelection = () =>{
        
        dispatch(setEvent({
            time: props.evento.time,
            name: props.evento.name,
            location: props.evento.location,
            id: props.evento.id,
            date: props.evento.date
        }))

        navigation.push('/propietarios/form');
    }

    return (
        <div className='evento' onClick={handleSelection}>
            <Grid  container sx={{ backgroundColor: '#000', color: '#fff' }}>
                <Grid item sm={12} md={4}>
                    <img style={{ width: '100%', height: '160px', objectFit: 'cover' }} src={props.evento.img} alt="" />
                </Grid>
                <Grid item sm={12} md={7} sx={{ p: 4 }}>
                    <Typography variant="h4">{props.evento.name}</Typography>
                    <Typography variant="body1">Fecha: Sabado, 19 de diciembre</Typography>
                    <Typography variant="body1">Hora: 20h00</Typography>
                    <Typography variant="body1">Lugar: Estadio Monumental</Typography>
                </Grid>
                <Grid item sm={12} md={1}>
                    <div className='va'>
                        <ArrowForward sx={{ fontSize: 48 }} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Event;