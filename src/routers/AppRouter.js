import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { MundialScreen } from '../components/principal/MundialScreen'
import { PaisesScreen } from '../components/principal/PaisesScreen'
import { PrincipalScreen } from '../components/principal/PrincipalScreen'
import { VacunasScreen } from '../components/principal/VacunasScreen'
import { BotonFlotante } from '../components/ui/BotonFlotante'
import { Navbar } from '../components/ui/Navbar'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={PrincipalScreen} />
                    <Route exact path="/paises" component={PaisesScreen} />
                    <Route exact path="/mundial" component={MundialScreen} />
                    <Route exact path="/vacunas" component={VacunasScreen} />
                    <Redirect to="/" />
                </Switch>
                <BotonFlotante />
            </div>
        </Router>
    )
}
