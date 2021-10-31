import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {
    Box,
    createTheme,
    IconButton,
    Paper,
    styled,
    ThemeProvider,
    useTheme,
} from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { pages, Pages } from './scenes/Pages'
import { PageLink } from './components/PageLink'
import { createContext, useContext, useMemo, useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { FixedBackground } from './components/FixedBackground'

// const theme = createTheme({
//     palette: {
//         secondary: {
//             // light: will be calculated from palette.primary.main,
//             main: '#ff4400',
//             // dark: will be calculated from palette.primary.main,
//             // contrastText: will be calculated to contrast with palette.primary.main
//         },
//         primary: {
//             light: '#0066ff',
//             main: '#0044ff',
//             // dark: will be calculated from palette.secondary.main,
//             contrastText: '#ffcc00',
//         },
//         // Used by `getContrastText()` to maximize the contrast between
//         // the background and the text.
//         contrastThreshold: 3,
//         // Used by the functions below to shift a color's luminance by approximately
//         // two indexes within its tonal palette.
//         // E.g., shift from Red 500 to Red 300 or Red 700.
//         tonalOffset: 0.2,
//     },
// })

const client = new ApolloClient({
    uri: process.env.REACT_APP_HASURA_ENDPOINT || '',
    headers: {
        'x-hasura-admin-secret':
            process.env.REACT_APP_HASURA_ADMIN_SECRET || '',
    },
    cache: new InMemoryCache(),
})

const ColorModeContext = createContext({ toggleColorMode: () => {} })

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 200,
    width: '50%',
    lineHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px solid rgba(0,0,0,0.1)',
    fontSize: 20,
}))

const Container = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-20%)',
}))

function App() {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <FixedBackground />
                <Router>
                    <Container>
                        <IconButton onClick={() => colorMode.toggleColorMode()}>
                            {theme.palette.type === 'dark' ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                        <Item elevation={6}>
                            <Pages />
                        </Item>
                        <Box display="flex" alignItems="center" mt={10}>
                            {Object.keys(pages).map((key) => (
                                <PageLink
                                    name={pages[key].name}
                                    path={pages[key].path}
                                    style={{ marginLeft: 10 }}
                                />
                            ))}
                        </Box>
                    </Container>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    )
}

enum Mode {
    Light = 'light',
    Dark = 'dark',
}

export default function ToggleColorMode() {
    const [mode, setMode] = useState<Mode>(Mode.Light)
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === Mode.Light ? Mode.Dark : Mode.Light
                )
            },
        }),
        []
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: mode,
                    primary: {
                        main: mode === Mode.Light ? '#2e2e2e' : '#d9d9d9',
                    },
                },
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
