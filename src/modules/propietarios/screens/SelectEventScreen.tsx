import {
    Container,
    Typography,
    Grid
} from '@mui/material';
import EventCard from '../components/EventCard';
import { Link, useRouteMatch } from "react-router-dom";


const SelectEventScreen = () => {

    return (
        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                Selección de Evento
            </Typography>
            <Grid container>
                <Grid item sm={12} md={3}>
                    <Link style={{textDecoration:'none'}} to={`propietarios/liga-pro`}>
                        <EventCard title='Liga Pro' img='https://ecupunto.com/wp-content/uploads/2021/03/liga-pro.jpg' />
                    </Link>
                </Grid>
                <Grid item sm={12} md={3}>
                    <EventCard title='Copa Libertadores' img='https://gestion.pe/resizer/cGInq4cLgwFyUyRr6ARf7ZqKSIc=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/CGRM7EVLMRA4PA2F5FXJHJDOWU.jpg' />
                </Grid>
                <Grid item sm={12} md={3}>
                    <EventCard title='Noche Amarilla' img='https://radiohuancavilca.com.ec/wp-content/uploads/2021/12/EuOgXB-XIAQ7qeH.jpg' />
                </Grid>
                <Grid item sm={12} md={3}>
                    <EventCard title='Copa Ecuador' img='https://pbs.twimg.com/profile_images/1113098619161399296/PXBCgcNz_400x400.png' />
                </Grid>

            </Grid>

        </Container>
    )
}

export default SelectEventScreen;