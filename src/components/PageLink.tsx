import { Typography, Button, ButtonProps } from '@material-ui/core'
import { Link } from 'react-router-dom'

type PageLinkProps = ButtonProps & {
    name: string
    path: string
}

export const PageLink = ({ name, path, ...props }: PageLinkProps) => {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            to={{
                pathname: path,
            }}
        >
            <Button variant="contained" color="primary" {...props}>
                <Typography>{name}</Typography>
            </Button>
        </Link>
    )
}
