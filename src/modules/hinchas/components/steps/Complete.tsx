import { CheckCircleOutlineSharp } from '@mui/icons-material'
import { Typography, Grid } from '@mui/material';

const Complete = () => {
    return (
        <>
           <Grid container sx={{textAlign: 'center'}}>
               <Grid item xs={12}>
               <CheckCircleOutlineSharp sx={{color: 'green', fontSize: 70}}></CheckCircleOutlineSharp>

               </Grid>
               <Grid item xs={12}>
                <Typography variant="h3" className="light">Exito</Typography>
                   
               </Grid>
               <Grid item xs={12}>
                <Typography variant="body1" className="soft-light">Su transacción se ha realizado correctamente.</Typography>
                   
               </Grid>

           </Grid>
            
        </>
    )
}

export default Complete;