import { Route, Switch } from 'react-router-dom'
import { Counter } from './Counter/Counter'
import { Yugioh } from './Yugioh/Yugioh'

type PagesType = {
    name: string
    path: string
    Component: <T>(props: T) => JSX.Element
}
export const pages: { [key: string]: PagesType } = {
    Yugioh: {
        name: 'Yugioh',
        path: '/yugioh',
        Component: Yugioh,
    },
    Counter: {
        name: 'Counter',
        path: '/counter',
        Component: Counter,
    },
}

export const Pages = () => {
    return (
        <Switch>
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
