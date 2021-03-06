import {
    CircularProgress,
    TextField,
    Grid,
    Button
} from '@mui/material';
import { ConfirmationNumberSharp, CheckCircleOutlineSharp } from '@mui/icons-material'
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import { beneficiarioSchema } from '../schemas/validationSchema';
import axios from 'axios';

interface PropietarioDatos {
    name: string;
    email: string;
}

const ButtonQR = (data: PropietarioDatos) => {

    const [sending, setSending] = useState(false);
    const [success, setSucces] = useState(false);
    const [toGuest, setToGuest] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClickOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setToGuest(false);
        setOpenModal(false);
    };

    const handleSubmit = async () => {
        setSending(true);
        handleCloseModal();
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

    const formik = useFormik({
        initialValues: {
            email: '',
            cedula: undefined,
            nombres: '',
            apellidos: '',
        },
        validationSchema: beneficiarioSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            setOpen(true);
            setSucces(true);
            handleCloseModal();
        },
    });

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
                                //onClick={handleSubmit}
                                onClick={() => setOpenModal(true)}
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

            <Dialog open={openModal} onClose={handleCloseModal}>

                {toGuest ?
                    <>
                        <DialogTitle>Generar Boleto Beneficiario</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Ingrese los siguientes campos para generar el boleto de beneficiario
                            </DialogContentText>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{ m: 1 }}
                                />
                                <TextField
                                    fullWidth
                                    id="cedula"
                                    name="cedula"
                                    label="Cedula"
                                    value={formik.values.cedula}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cedula && Boolean(formik.errors.cedula)}
                                    helperText={formik.touched.cedula && formik.errors.cedula}
                                    sx={{ m: 1 }}
                                />
                                <TextField
                                    fullWidth
                                    id="nombres"
                                    name="nombres"
                                    label="Nombres"
                                    value={formik.values.nombres}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nombres && Boolean(formik.errors.nombres)}
                                    helperText={formik.touched.nombres && formik.errors.nombres}
                                    sx={{ m: 1 }}
                                />
                                <TextField
                                    fullWidth
                                    id="apellidos"
                                    name="apellidos"
                                    label="Apellidos"
                                    value={formik.values.apellidos}
                                    onChange={formik.handleChange}
                                    error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
                                    helperText={formik.touched.apellidos && formik.errors.apellidos}
                                    sx={{ m: 1 }}
                                />
                                <Grid container direction="row-reverse">
                                    <Button type="submit">Generar</Button>
                                    <Button onClick={handleCloseModal}>Cancelar</Button>
                                </Grid>
                            </form>
                        </DialogContent>
                    </>
                    :
                    <>
                        <DialogTitle>??Desea Generar el Boleto Para un Invitado/Beneficiario?</DialogTitle>
                        <DialogContent>
                            <Grid container direction="column">
                                <Button size='large' onClick={()=>setToGuest(true)}> S??, Agregar Beneficiario</Button>
                                <Button size='large' onClick={handleSubmit} >No, Enviar solo a m??</Button>
                            </Grid>
                        </DialogContent>
                    </>
                }

            </Dialog>

        </>
    )
}

export default ButtonQR;