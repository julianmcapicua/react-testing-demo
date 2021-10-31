import { Box } from '@material-ui/core'
import { useAuth } from './useAuth'

export const WelcomeUser = () => {
    const { teacher, student } = useAuth()

    return <Box>Welcome {teacher?.name || student?.name || 'stranger'}</Box>
}
