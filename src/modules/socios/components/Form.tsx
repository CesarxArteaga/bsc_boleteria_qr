import {
    TextField,
    Grid,
    Typography,
    CircularProgress,
    Alert,
} from '@mui/material';
import { useState,/*  useEffect */ } from 'react';
import axios from 'axios';
import InfoSocio from './InfoSocio';

import { SociosResponse, Response } from '../../../interface/Socios.interface';
import TabsSocio from './TabsSocio';
//0912729183

const Form = () => {
    const [logged, setLogged] = useState(false)
    const [error, setError] = useState(false)
    const [cedula, setCedula] = useState('');
    const [data, setData] = useState<Response | null>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCedula(event.target.value);
    };

    const [isLoading, setLoading] = useState(false);
    const handleSubmit = () => {
        if (cedula.length !== 10) {
            return alert('Ingrese un numero de cedula correcto')
        }

        setLoading(true);
        setLogged(false);
        setError(false);
        setTimeout(() => {
            login();
        }, 200);

    }

    const login = async () => {

        await axios.get<SociosResponse>(`https://sociosbsc.online/v1/boletos?identificacion=${cedula}`)
            .then(function (response) {
                if (response.data.status === 3 || response.data.status === 2 || response.data.status === 1) {
                    setLogged(true);
                    setData(response.data.data);
                } else {
                    setError(true);
                    setData(null);
                }
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                setError(true);
                setData(null);
                console.log(error);
            })
        setLoading(false)

    }

    const handleCancel = () => {
        setLogged(false);
        setData(null);
    }

    return (
        <>

            {logged ?
                <>
                    { <TabsSocio {...data} /> }
                    {/* <div style={{ backgroundColor: '#1A1A1B', textAlign: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '5px solid yellow' }}>
                        <button className="btn" onClick={handleCancel}> Cancelar </button>
                    </div> */}
                </> :
                <Grid container sx={{ backgroundColor: '#1A1A1B', borderBottom: '5px solid yellow' }}>
                    <Grid item sm={12} md={12} sx={{ p: 2 }}>
                        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <Typography variant="h5" className="light" sx={{ mt: 4 }}>Ingrese su cedula para verificar sus datos</Typography>

                            {
                                error ? <Alert variant="filled" severity="error" sx={{ mt: 4 }}> Usuario no encontrado.</Alert> : ''
                            }
                            <TextField
                                label="Cedula"
                                value={cedula}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                sx={{ mt: 4 }}
                            />
                            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                                <button disabled={isLoading} onClick={handleSubmit} className="btn btn-yellow">Ingresar</button>
                                {isLoading ?
                                    <div className="text-center"><CircularProgress /></div> : ''}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default Form;