import { Box, Button } from '@material-ui/core'
import { useCounter } from './useCounter'

export const CounterHook = () => {
    const { count, increment, decrement } = useCounter()
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            style={{ maxWidth: 250, margin: '0 auto' }}
        >
            <Button onClick={decrement}>Decrement</Button>
            <Box style={{ margin: '0 20px' }}>{count}</Box>
            <Button onClick={increment}>Increment</Button>
        </Box>
    )
}
