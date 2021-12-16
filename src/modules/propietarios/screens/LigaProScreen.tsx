import {
    Container,
    Typography,
    Grid
} from '@mui/material';
import Event from '../components/liga-pro/Event';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setEvent } from '../slices/propietariosSlice';
//import { decrement, increment } from './counterSlice'

const LigaProScreen = () => {
    //const count = useSelector((state) => state.counter.value)
    const count = useAppSelector((state) => state.evento)
    

    const eventos = [
        {
            id: 1,
            name: 'Barcelona vs Deflin',
            date: 'Sabado, 19 de diciembre',
            time: '20h00',
            location: 'Estadio Monumental',
            img: 'https://imperiofutbolec.com/wp-content/uploads/2019/10/Barcelona-SC-vs.-Delf%C3%ADn-EN-VIVO-ONLINE-CopaEcuador.jpg'
        },
        {
            id: 2,
            name: 'Barcelona vs Manta',
            date: 'Sabado, 19 de diciembre',
            time: '20h00',
            location: 'Estadio Monumental',
            img: 'https://i1.wp.com/imperiofutbolec.com/wp-content/uploads/2021/01/Barcelona-SC-vs-Manta-FC-EN-VIVO-01.png?resize=678%2C449&ssl=1'
        },
        {
            id: 3,
            name: 'Barcelona vs Emelec',
            date: 'Sabado, 19 de diciembre',
            time: '20h00',
            location: 'Estadio Monumental',
            img: 'https://i1.wp.com/imperiofutbolec.com/wp-content/uploads/2021/01/Barcelona-SC-vs-Manta-FC-EN-VIVO-01.png?resize=678%2C449&ssl=1'
        }
    ]

    return (
        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                Selección de Evento
            </Typography>
            <Grid container spacing={2}>
                {
                    eventos.map(evento => (
                        <Grid key={evento.id} item sm={12} md={12}>
                            <Event evento={evento} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default LigaProScreen;