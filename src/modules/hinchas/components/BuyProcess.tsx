import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Localidades from './steps/Localidades';
//import FormPago from './steps/FormPago';
import Complete from './steps/Complete';
import {
    Grid,
    TextField,
    /* Typography */
} from '@mui/material';

import tarjeta from '../../../assets/tarjetas.png';
import { /* useTheme, */ ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const steps = ['Seleccione su localidad', 'Pague su localidad'];

const BuyProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        if (activeStep === 1) {
            console.log('nombres')
            const params = new URLSearchParams();

            params.append('email', email!);
            //params.append('email', 'ctmces94@gmail.com');
            params.append('name', (name));

            axios.post('https://nodemailqr.herokuapp.com/generateqr', params)
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: '#1A1A1B', p: 4 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>

                    <Complete />
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Aceptar</Button>
                    </Box>
                </>
            ) : (
                <>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography> */}
                    {activeStep === 0 ?
                        <Localidades />
                        :

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
                                            value={name}
                                            onChange={handleChangeName}
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
                                            value={email}
                                            onChange={handleChangeEmail}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ThemeProvider>



                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            variant="contained"
                        >
                            Atras
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} variant="contained">
                            {activeStep === steps.length - 1 ? 'Pagar' : 'Siguiente'}
                        </Button>
                    </Box>
                </>
            )
            }
        </Box >
    )
}
export default BuyProcess;
