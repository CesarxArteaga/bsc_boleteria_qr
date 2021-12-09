import {
    Container,
    Typography
} from '@mui/material';
import Form from '../components/Form';

const PropietariosScreen = () => {
    return (
        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                Propietarios
            </Typography>
            <Form/>
        </Container>
    )
}

export default PropietariosScreen;