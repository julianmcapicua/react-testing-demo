import { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'

export const GeoLocation = () => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            setLatitude(data.coords.latitude)
            setLongitude(data.coords.longitude)
        })
    }, [])

    return (
        <Box>
            <Typography>Latitude: {latitude}</Typography>
            <Typography>Longitude: {longitude}</Typography>
        </Box>
    )
}
