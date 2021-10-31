import { Box, Button, Dialog, DialogTitle, TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useInsertUserMutation } from '../../graphql/autogenerate/hooks'

export const SignupForm = () => {
    const [insertUserMutation, { error, loading }] = useInsertUserMutation()
    const [dialogOpen, setDialogOpen] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (e) => {
            const { email, password } = e
            handleSubmit(email, password)
        },
    })

    const handleSubmit = async (email: string, password: string) => {
        if (!email || !password) return
        setDialogOpen(true)
        try {
            await insertUserMutation({
                variables: { email, password },
                onError: () => {},
            })
        } catch (e) {
            console.error(e)
        }
    }

    const closeDialog = () => setDialogOpen(false)

    return (
        <Box>
            Sign up!
            <form
                onSubmit={formik.handleSubmit}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '200px',
                    justifyContent: 'space-around',
                }}
            >
                <TextField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    onChange={(e) =>
                        formik.setFieldValue('email', e.target.value)
                    }
                />
                <TextField
                    label="Password"
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    onChange={(e) =>
                        formik.setFieldValue('password', e.target.value)
                    }
                />
                <Button onClick={formik.submitForm}>Sign up</Button>
            </form>
            <Dialog onClose={closeDialog} open={dialogOpen}>
                <DialogTitle>
                    {loading
                        ? 'Loading...'
                        : error
                        ? 'An error ocurred T.T'
                        : 'User created succesfully!'}
                </DialogTitle>
                <Button
                    style={{ margin: 15 }}
                    color="primary"
                    variant="contained"
                    onClick={closeDialog}
                    disabled={loading}
                >
                    Close
                </Button>
            </Dialog>
        </Box>
    )
}
