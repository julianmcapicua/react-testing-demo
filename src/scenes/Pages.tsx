import { Route, Switch } from 'react-router-dom'
import { Counter } from './Counter/Counter'
import { Yugioh } from './Yugioh/Yugioh'
import { GeoLocation } from './GeoLocation/GeoLocation'
import { WelcomeUser } from './WelcomeUser/WelcomeUser'
import { CounterHook } from './useCounter/CounterHook'
import { SignupForm } from './SignupForm/SignupForm'
import { Typography } from '@material-ui/core'

type PagesType = {
    name: string
    path: string
    Component: <T>(props: T) => JSX.Element
}
export const pages: { [key: string]: PagesType } = {
    Counter: {
        name: 'Simple Counter',
        path: '/counter',
        Component: Counter,
    },
    GeoLocation: {
        name: 'Geo Location',
        path: '/geolocation',
        Component: GeoLocation,
    },
    WelcomeUser: {
        name: 'Welcome User',
        path: '/welcome_user',
        Component: WelcomeUser,
    },
    Yugioh: {
        name: 'Yugioh Query',
        path: '/yugioh',
        Component: Yugioh,
    },
    SignupForm: {
        name: 'Signup Form',
        path: '/signup',
        Component: SignupForm,
    },
    CounterHook: {
        name: 'Counter Hook',
        path: '/counter_hook',
        Component: CounterHook,
    },
}

export const Pages = () => {
    return (
        <Switch>
            <Route
                exact
                path={'/'}
                component={() => (
                    <Typography variant="h3">React Testing Demo ⚛️</Typography>
                )}
            ></Route>
            {Object.keys(pages).map((i) => (
                <Route
                    exact
                    path={pages[i].path}
                    component={pages[i].Component}
                ></Route>
            ))}
        </Switch>
    )
}
