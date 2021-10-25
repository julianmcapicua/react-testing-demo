import { Box } from '@material-ui/core'
import { useGetYugiohCardQuery } from '../../graphql/autogenerate/hooks'

export const Yugioh = () => {
    const { data, loading, error } = useGetYugiohCardQuery()

    return (
        <Box
            style={{
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            {loading && 'loading'}
            {error && 'error'}
            {data && data?.yugioh_names[0]?.name}
            {data?.yugioh_names.length === 0 && 'no yugioh names found'}
        </Box>
    )
}
