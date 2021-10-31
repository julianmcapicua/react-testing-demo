import { Box, Button } from '@material-ui/core'
import { useState } from 'react'

export const Counter = ({ initialValue = 0 }: { initialValue?: number }) => {
    const [counter, setCounter] = useState(initialValue)
    const handleIncrement = () => setCounter((prev) => prev + 1)
    const handleDecrement = () => setCounter((prev) => prev - 1)
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            style={{ maxWidth: 250, margin: '0 auto' }}
        >
            <Button onClick={handleDecrement}>Decrement</Button>
            <Box style={{ margin: '0 20px' }}>{counter}</Box>
            <Button onClick={handleIncrement}>Increment</Button>
        </Box>
    )
}
