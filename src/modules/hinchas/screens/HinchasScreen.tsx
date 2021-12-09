import {
    Container,
    Typography
} from '@mui/material';
import Evento from '../components/Evento';
import BuyProcess from '../components/BuyProcess';

import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";


const HinchasScreen = () => {
    const { path, /* url */ } = useRouteMatch();
    return (
        <>

            <Container maxWidth="xl">


                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/hinchas'}>
                            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                                Proximo a jugarse
                            </Typography>
                            <Evento />
                        </Route>
                        <Route exact path={`${path}/comprar-boleto`}>
                            <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                                Comprar Boleto
                            </Typography>
                            <BuyProcess />
                        </Route>
                        <Route  path={`${path}/otherpath`} >

                        </Route>
                    </Switch>
                </BrowserRouter>

                {/* <Evento /> */}
            </Container>
        </>
    )
}

export default HinchasScreen;