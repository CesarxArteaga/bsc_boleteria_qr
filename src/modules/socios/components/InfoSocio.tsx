import {
    TextField,
    Grid,
    Typography,
    Alert,
    CircularProgress,
} from '@mui/material';
import { Response } from '../../../interface/Socios.interface';
import { ConfirmationNumberSharp, CheckCircleOutlineSharp } from '@mui/icons-material'
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const InfoSocio = (data: Response) => {
    const [sending, setSending] = useState(false);
    const [success, setSucces] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleSubmit = async () => {
        setSending(true);
        const params = new URLSearchParams();

        params.append('email', data.email!);
        //params.append('email', 'ctmces94@gmail.com');
        params.append('name', (data.nombres!) + ' ' + (data.apellidos!));

        await axios.post('https://nodemailqr.herokuapp.com/generateqr', params)
            .then(function (response) {
                if (response.data.code === 1) {
                    setTimeout(() => {
                        setOpen(true);
                        setSucces(true);
                    }, 200);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        setSending(false);

    }

    return (<>
        <Grid container sx={{ p: 4, backgroundColor: '#1A1A1B' }}>
            <Grid item sm={12}>
                <Typography variant="h5" className="yellow" sx={{ mb: 2 }}>Datos de Socio</Typography>
            </Grid>
            <Grid item sm={12}>
                <TextField
                    label="Nombres"
                    value={(data.nombres) + ' ' + (data.apellidos)}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                />
            </Grid>
            <Grid item sm={12}>
                <TextField
                    label="Correo"
                    value={data.email}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                />
            </Grid>
            <Grid item sm={12}>
                <TextField
                    label="Localidad"
                    value={data.localidad}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ mb: 2 }}
                />
            </Grid>
            {data.cuotas_vencidas !== 0 ?
                <Alert severity="warning" variant="filled" sx={{ width: "100%" }}>Presenta una o mas deudas vencidas.</Alert>
                :
                <div className="va" style={{margin: '0 auto'}}>
                    {success ?
                        <>
                            <Typography variant="h6" sx={{mr:1}} className="soft-light">Boleto Enviado</Typography>
                            <CheckCircleOutlineSharp
                                fontSize="large"
                                sx={{ color: 'green' }}
                            />
                        </>
                        :
                        <>
                            {sending ?
                                <CircularProgress /> :
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-yellow"
                                >
                                    Generar Boleto
                                    <ConfirmationNumberSharp className="button__icon button__icon--end" />
                                </button>
                            }
                        </>
                    }
                </div>
            }
        </Grid>

        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Boleto Generado Correctamente
            </Alert>
        </Snackbar>

    </>)
}

export default InfoSocio;