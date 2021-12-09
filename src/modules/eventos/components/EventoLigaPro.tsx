import {
    Grid,
    Typography,
} from '@mui/material';

const EventoLigaPro = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#000', mb: 3, maxWidth: '700px' }}>
                <Grid item xs={4} md={4}>
                    <div className="va">
                        <img width="100%" src="https://imperiofutbolec.com/wp-content/uploads/2021/08/Flamengo-vs-Barcelona-SC-EN-VIVO-SEMIFINALES-DE-LA-COPA-LIBERTADORES.png" alt="" />
                    </div>
                </Grid>
                <Grid item xs={8} md={8} sx={{ p: 2 }}>
                    <Typography className="light" variant="h5">
                        Barcelona vs Flamengo
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

export default EventoLigaPro;