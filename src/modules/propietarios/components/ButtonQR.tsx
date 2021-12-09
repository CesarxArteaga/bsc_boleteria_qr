import {
    CircularProgress
} from '@mui/material';
import { ConfirmationNumberSharp, CheckCircleOutlineSharp } from '@mui/icons-material'
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';

interface PropietarioDatos {
    name: string;
    email: string;
}

const ButtonQR = (data: PropietarioDatos) => {

    const [sending, setSending] = useState(false);
    const [success, setSucces] = useState(false);

    const handleSubmit = async () => {
        setSending(true);
        const params = new URLSearchParams();

        params.append('email', data.email);
        //params.append('email', 'ctmces94@gmail.com');
        params.append('name', data.name);

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

    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <div className="va">
                {success ?
                    <CheckCircleOutlineSharp
                        fontSize="large"
                        sx={{ color: 'green' }}
                    />
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
        </>
    )
}

export default ButtonQR;