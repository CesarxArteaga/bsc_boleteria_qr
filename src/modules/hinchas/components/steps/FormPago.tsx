import {
    Grid,
    TextField,
    Typography
} from '@mui/material';
import tarjeta from '../../../../assets/tarjetas.png';
import { /* useTheme, */ ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const FormPago = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <Grid container alignContent="center" sx={{ p: 4, maxWidth: '600px', m: '0 auto', backgroundColor: 'white' }}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Pagar con Tarjeta de Crédito o Débito</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={tarjeta} alt="tarjetas" width="100%" />
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-required"
                                label="Número de Tarjeta"
                                placeholder=""
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-required"
                                label="Fecha de Expiración"
                                placeholder=""
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-required"
                                label="CVV"
                                placeholder=""
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-required"
                                label="Nombre"
                                placeholder=""
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sx={{ p: 1 }}>
                            <TextField
                                id="outlined-required"
                                label="Email"
                                placeholder=""
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default FormPago;