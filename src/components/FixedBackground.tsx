import { Box, BoxProps, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
    },
}))

export const FixedBackground = (props: BoxProps) => {
    const styles = useStyles()

    return <Box {...props} className={styles.box + ' ' + props.className}></Box>
}
