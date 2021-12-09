import {
    Grid,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography
} from '@mui/material';
import { useEffect } from 'react';
import mapa from '../../../../assets/localidades.jpeg';
import IncrementComponent from '../IncrementComponent';

const Localidades = () => {

    const palcos:any = [];
    
        for(let i = 0; i < 8; i++){
            palcos.push(
                <div key={i}>
                    <Typography variant="body1"> Palco 0{i+1} </Typography>
                    <IncrementComponent />
                </div>
            )
        }
    

    return (
        <>
            <Grid container>
                <Grid item sm={12} md={6} sx={{ p: 4, color: 'whitesmoke' }}>
                <Typography variant="h4" className='yellow'> PALCOS </Typography>
                    {palcos}
                    <Typography variant="h4" className='yellow'> TRIBUNA </Typography>
                        <Typography variant="body1"> Tribuna Este  </Typography>
                        <IncrementComponent />
                        <Typography variant="body1"> Tribuna Oeste </Typography>
                        <IncrementComponent />
                    <Typography variant="h4" className='yellow'> GENERAL </Typography>
                        <Typography variant="body1"> General Alta Norte  </Typography>
                        <IncrementComponent />
                        <Typography variant="body1"> General Baja Norte  </Typography>
                        <IncrementComponent />
                        <Typography variant="body1"> General Alta Sur  </Typography>
                        <IncrementComponent />
                        <Typography variant="body1"> General Baja Sur  </Typography>
                        <IncrementComponent />
                        
                    {/* <FormGroup sx={{mb:2}}>
                        <Typography variant="h4"> PALCOS </Typography>
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Palco Oeste" />
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Palco Este" />
                        <IncrementComponent/>
                    </FormGroup>
                    <FormGroup sx={{mb:2}}>
                        <Typography variant="h4"> TRIBUNAS </Typography>
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Tribuna Oeste" />
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Tribuna Este" />
                    </FormGroup>
                    <FormGroup sx={{mb:2}}>
                        <Typography variant="h4"> GENERAL </Typography>
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="General Norte" />
                        <FormControlLabel sx={{width:'fit-content'}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="General Sur" />
                    </FormGroup> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ padding: '1rem' }} src={mapa} alt="mapa" />
                </Grid>
            </Grid>
        </>
    )
}

export default Localidades;