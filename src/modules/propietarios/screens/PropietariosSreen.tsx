import {
    Container,
    Typography
} from '@mui/material';
import Form from '../components/Form';
import SelectEventScreen from './SelectEventScreen';
import LigaProScreen from './LigaProScreen';
import VerificationScreen from './VerificationScreen';
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

const PropietariosScreen = () => {
    const { path } = useRouteMatch();

    return (
        <Container maxWidth="lg">
            {/* <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                Propietarios
            </Typography>
            <Form/> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/propietarios'}>
                        <SelectEventScreen />
                    </Route>
                    <Route path={`${path}/liga-pro`}>
                        <LigaProScreen/>
                    </Route>
                    <Route path={`${path}/form`}>
                        <VerificationScreen/>
                    </Route>
                    {/* <Route exact path={`${path}/comprar-boleto`}>
                        <Typography textAlign="center" variant="h3" className="yellow" sx={{ m: 5 }}>
                            Comprar Boleto
                        </Typography>
                        <BuyProcess />
                    </Route>
                    <Route path={`${path}/otherpath`} >

                    </Route> */}
                </Switch>
            </BrowserRouter>
        </Container>
    )
}

export default PropietariosScreen;