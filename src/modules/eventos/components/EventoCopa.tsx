import {
    Grid,
    Typography,
} from '@mui/material';

const EventoCopa = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#000', mb: 3, width: '700px' }}>
                <Grid item xs={4} md={4}>
                    <div className="va">
                        <img width="100%" height="100px" src="https://imperiofutbolec.com/wp-content/uploads/2021/08/VER-IDV-vs-BARCELONA-SC-PARTIDO-EN-VIVO-GOL-TV-FECHA-6-LIGA-PRO.png" alt="" />
                    </div>
                </Grid>
                <Grid item xs={8} md={8} sx={{ p: 2 }}>
                    <Typography className="light" variant="h5">
                        Barcelona vs Independiente del Valle
                    </Typography>
                    <br></br>
                    <Typography className="soft-light" variant="subtitle1">
                        Fecha: Sabado 15 de diciembre
                    </Typography>
                    <Typography className="soft-light" variant="subtitle1">
                        Hora: 20h00
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default EventoCopa;