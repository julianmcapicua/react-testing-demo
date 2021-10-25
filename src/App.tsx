import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Box, createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { pages, Pages } from './scenes/Pages'

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
})

const client = new ApolloClient({
    uri: process.env.REACT_APP_HASURA_ENDPOINT || '',
    headers: {
        'x-hasura-admin-secret':
            process.env.REACT_APP_HASURA_ADMIN_SECRET || '',
    },
    cache: new InMemoryCache(),
})

console.log(process.env.REACT_APP_HASURA_ADMIN_SECRET)

function App() {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Pages />
                    <Box
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '50%',
                        }}
                    >
                        <Link to={pages.Yugioh.path}>Request Testing</Link>
                        <Link to={pages.Counter.path}>Simple Counter</Link>
                    </Box>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default App
