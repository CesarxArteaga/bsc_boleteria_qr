import {
    Grid,
    Typography,
    /* Button, */
} from '@mui/material';
import { useRouteMatch , useHistory } from 'react-router-dom';

const Evento = () => {
    const history = useHistory();

    const { path } = useRouteMatch();

    return (
        <div className="item-evento">
            <Grid container>
                <Grid item sm={4} md={3}>
                    <img style={{ width: '100%' }} src="https://elbocon.pe/resizer/0DGJQKlWMnHf3TMRNbrP1Qc7Ruc=/980x528/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DUPZW3VYL5B6FJJ5XG6BZTYWG4.jpg" alt="" />
                </Grid>
                <Grid item sm={8} md={4} sx={{ p: 2 }}>
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
                <Grid item sm={12} md={5}>

                    <div className="va">
                        <button className="btn btn-lg btn-yellow" onClick={()=>history.push(`${path}/comprar-boleto`)}>
                            Comprar Boleto
                        </button>
                    </div>


                </Grid>
            </Grid>
        </div>
    )
}

export default Evento;