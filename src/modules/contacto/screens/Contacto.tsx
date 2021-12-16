import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Typography, Container, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { style } from '../../../constants/styles';
const Contacto = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                    Contacto
                </Typography>

                <Grid
                    container
                    sx={{
                        backgroundColor: style.backgroundColor,

                    }}>
                    <Grid item sm={12} md={6} sx={{ p: 3 }}>
                        <Typography variant="h5" className="light">Mayor Información</Typography>
                        <br></br>
                        <List dense={false}>
                            <ListItem>
                                <ListItemIcon>
                                    <Email />
                                </ListItemIcon>
                                <ListItemText className="light">
                                    bsc@bsc.com.ec
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                <ListItemText className="light">
                                    123456789
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOn />
                                </ListItemIcon>
                                <ListItemText className="light">
                                    Av. Barcelona
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={12} md={6} sx={{ p: 3 }}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Nombre"
                            variant="filled"
                            sx={{ m: 1 }}
                        />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Correo"
                            variant="filled"
                            sx={{ m: 1 }}
                        />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Asunto"
                            variant="filled"
                            sx={{ m: 1 }}
                        />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Mensaje"
                            variant="filled"
                            multiline
                            rows={4}
                            sx={{ m: 1 }}
                        />
                        <button
                            className='btn btn-yellow btn-block'
                            style={{ margin: '.55rem' }}
                        >
                            Enviar
                        </button>

                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Contacto;