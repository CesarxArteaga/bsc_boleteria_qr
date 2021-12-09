import {
    Container,
    Typography
} from '@mui/material';
import Form from '../components/Form';

const SociosScreen = () => {
    return (
        <>
        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                Socios
            </Typography>
            <Form/>
        </Container>
        </>
    )
}

export default SociosScreen;