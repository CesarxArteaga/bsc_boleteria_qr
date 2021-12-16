import {
    TextField,
    Grid,
    Typography,
    Alert
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Response } from '../../../interface/Propietario.interface';
import ButtonQR from './ButtonQR';
import { useAppSelector } from '../../../hooks';

const InfoPropietario = (response: Response) => {
    //https://nodemailqr.herokuapp.com/generateqr
    const evento = useAppSelector((state) => state.evento)

    return (

        <Grid container sx={{ backgroundColor: '#1A1A1B', p: 2 }}>
            {response.CODIGO === 0 &&
                <>
                    <Alert severity='error' variant='filled' sx={{ mb: 2, width: '100%' }}>Usuario No Encontrado</Alert>
                </>
            }
            {response.CODIGO === 2 &&
                <>
                    <Alert severity='warning' variant='filled' sx={{ mb: 2, width: '100%' }}>Usuario con Falta de Información</Alert>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Grid item sm={12}>
                                <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Datos de Propietario</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='nombrePropietario'
                                    label="Nombres"
                                    value={response.NOMBRE || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='emailPropietario'
                                    label="Correo"
                                    value={response.EMAIL || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
            {response.CODIGO === 3 &&
                <>
                    <Alert severity='warning' variant='filled' sx={{ mb: 2, width: '100%' }}>Usuario No Esta Al Día</Alert>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Grid item sm={12}>
                                <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Datos de Propietario</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='nombrePropietario'
                                    label="Nombres"
                                    value={response.NOMBRE || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='emailPropietario'
                                    label="Correo"
                                    value={response.EMAIL || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
            {response.CODIGO === 4 &&
                <>
                    <Alert severity='warning' variant='filled' sx={{ mb: 2, width: '100%' }}>Usuario Con Subscripción inactiva o Propiedas No estan al día</Alert>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Grid item sm={12}>
                                <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Datos de Propietario</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='nombrePropietario'
                                    label="Nombres"
                                    value={response.NOMBRE || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='emailPropietario'
                                    label="Correo"
                                    value={response.EMAIL || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
            {response.CODIGO === 1 &&
                <>
                    <Alert severity='success' variant='filled' sx={{ mb: 2, width: '100%' }}>Usuario al día</Alert>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Grid item sm={12}>
                                <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Datos de Propietario</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='nombrePropietario'
                                    label="Nombres"
                                    value={response.NOMBRE || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='emailPropietario'
                                    label="Correo"
                                    value={response.EMAIL || ''}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ mb: 2 }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <Grid item sm={12}>
                                <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Datos de Evento</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='eventoPropietario'
                                    label="Partido"
                                    value={evento.name}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    size='small'
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='eventoFecha'
                                    label="Fecha"
                                    value={evento.date}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    size='small'
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='eventoHora'
                                    label="Hora"
                                    value={evento.time}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    size='small'
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    id='eventoLugar'
                                    label="Lugar"
                                    value={evento.location}
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    size='small'
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <Typography variant="h5" className="yellow" sx={{ borderBottom: '1px solid yellow', mb: 2 }}>Propiedades</Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="yellow" sx={{ fontWeight: '600' }}>LOCALIDAD</TableCell>
                                            <TableCell className="yellow" sx={{ fontWeight: '600' }} align="center">CÓDIGO DE PROPIEDAD</TableCell>
                                            <TableCell className="yellow" sx={{ fontWeight: '600' }} align="center">BOLETO PROPIETARIO</TableCell>


                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {response?.PROPIEDADES?.map((row, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.LOCALIDAD}
                                                </TableCell>
                                                <TableCell align="center">{row.CODIGO_PROPIEDAD}</TableCell>
                                                <TableCell align="center"><ButtonQR name={response.NOMBRE || 'Desconocido'} email={response.EMAIL!} /></TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </>
            }

        </Grid>
    )
}

export default InfoPropietario;