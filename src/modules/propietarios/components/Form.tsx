import {
    TextField,
    Grid,
    Typography,
    CircularProgress,
    Alert,
} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoPropietario from './InfoPropietario';
import { PropietarioResponse, Response } from '../../../interface/Propietario.interface';
//0912729183

const Form = () => {
    const [logged, setLogged] = useState(false)
    const [error, setError] = useState(false)
    const [cedula, setCedula] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCedula(event.target.value);
    };
    const [data, setData] = useState<Response|null>();

    const [isLoading, setLoading] = useState(false);
    const [token, setToken] = useState(0);

    const handleSubmit = () => {
        if( cedula.length !== 10 ){
            return alert('Ingrese un numero de cedula correcto')
        }

        setLoading(true);
        setLogged(false);
        setError(false);
        setTimeout(() => {
            login();
        }, 200);

    }

    const getToken = async () => {
        await axios.get('https://clpreprod.bscpropietarios.com.ec:9797/security/token')
            .then(function (response) {
                if (response.data.code === 200) {
                    setToken(response.data.token)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getToken();
    }, [])

    const login = async () => {
        
        await axios.get<PropietarioResponse>(`https://clpreprod.bscpropietarios.com.ec:9797/obtelsa/v1.0/information/getInformation/C/${cedula}`, { headers: { 'Authorization': '' + token } })
            .then(function (response) {
                if (response.data.CODE === 200 && response.data.RESPONSE.CODIGO !== 0) {
                    setLogged(true);
                    setData(response.data.RESPONSE);
                }

                if (response.data.CODE === 400 || response.data.RESPONSE.CODIGO === 0) {
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
                    <InfoPropietario {...data} />
                </> :
                <Grid container sx={{ backgroundColor: '#1A1A1B', borderBottom: '5px solid yellow' }}>
                    <Grid item sm={12} md={12} sx={{ p: 2 }}>
                        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <Typography variant="h5" className="light" sx={{ mt: 4 }}>Ingrese su cedula para verificar sus datos</Typography>

                            {
                                error ? <Alert variant="filled" severity="error" sx={{ mt: 4 }}> Usuario no encontrado.</Alert> : ''
                            }
                            <TextField
                                id='cedulapropietario'
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