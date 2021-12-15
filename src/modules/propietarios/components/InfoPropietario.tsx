import {
    TextField,
    Grid,
    Typography,
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
import ButtonBeneficiario from './ButtonBeneficiario';

const InfoPropietario = (response: Response) => {
    //https://nodemailqr.herokuapp.com/generateqr

    return (
        <>
            <Grid container sx={{ p: 4, backgroundColor: '#1A1A1B' }}>
            <Grid item sm={12}>
                <Typography variant="h5" className="yellow" sx={{mb:2}}>Datos de Propietario</Typography>
            </Grid>
                <Grid item sm={12}>
                    <TextField
                        label="Nombres"
                        value={response.NOMBRE}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{mb:2}}
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        label="Correo"
                        value={response.EMAIL}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{mb:2}}
                    />
                </Grid>
                <Grid container>
                    <Grid item sm={12}>
                        <Typography variant="h5" className="yellow">Propiedades</Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>LOCALIDAD</TableCell>
                                        <TableCell align="center">CÓDIGO DE PROPIEDAD</TableCell>
                                        <TableCell align="center">BOLETO PROPIETARIO</TableCell>
                                        <TableCell align="center">BOLETO BENEFICIARIO</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {response?.PROPIEDADES?.map((row,index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.LOCALIDAD}
                                            </TableCell>
                                            <TableCell align="center">{row.CODIGO_PROPIEDAD}</TableCell>
                                            <TableCell align="center"><ButtonQR name={response.NOMBRE || 'Desconocido'} email={ response.EMAIL!} /></TableCell>
                                            <TableCell align="center"><ButtonBeneficiario name={response.NOMBRE || 'Desconocido'} email={ response.EMAIL!} /></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default InfoPropietario;