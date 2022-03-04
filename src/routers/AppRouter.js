
import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

const {dni} = useSelector(state=>state.auth)
// extraigo el dni del state de auth y lo utilizo para saber si el usuario esta autenticado,
// de ser asi lo dejo continuar navegando.

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={!!dni}

                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuthenticated={!!dni}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
    )
}
