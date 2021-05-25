import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import StartPage from './Pages/StartPage'
import Time from './Pages/Time'
import Weather from './Pages/Weather'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/weather-data" exact>
                <StartPage/>
            </Route>
            <Route path="/weather-data/time" exact>
                <Time/>
            </Route>
            <Route path="/weather-data/weather" exact>
                <Weather/>
            </Route>
            <Redirect to="/weather-data"/>
        </Switch>
    )
}
