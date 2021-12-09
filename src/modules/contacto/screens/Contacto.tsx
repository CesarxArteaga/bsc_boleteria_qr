import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography , Container , Button } from '@mui/material';

const Contacto = () => {
    return (
        <>
        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
            Contacto
            </Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nombre" variant="filled" />
                <TextField id="filled-basic" label="Edad" variant="filled" />
                <TextField id="standard-basic" label="Correo" variant="filled" />
                <Button variant="contained">Enviar</Button>
            </Box>
        </Container>
        </>
    )
}

export default Contacto;