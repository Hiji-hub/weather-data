import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import StartPage from './Pages/StartPage'
import Time from './Pages/Time'
import Weather from './Pages/Weather'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <StartPage/>
            </Route>
            <Route path="/time" exact>
                <Time/>
            </Route>
            <Route path="/weather" exact>
                <Weather/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
