import { MockedProvider } from '@apollo/client/testing'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GraphQLError } from 'graphql'
import { InsertUserDocument } from '../../graphql/autogenerate/hooks'
import { SignupForm } from './SignupForm'

const email = 'react-test-demo@mailinator.com'
const password = 'password'

describe('SignupForm Component', () => {
    it('Renders loading and success message', async () => {
        const mocks = [
            {
                request: {
                    query: InsertUserDocument,
                    variables: {
                        email: 'react-test-demo@mailinator.com',
                        password: 'password',
                    },
                },
                result: {
                    data: {
                        insert_usuarios_one: {
                            id: 8,
                            email: 'react-test-demo@mailinator.com',
                            password: 'password',
                        },
                    },
                },
            },
        ]

        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SignupForm />
            </MockedProvider>
        )
        userEvent.type(screen.getByPlaceholderText(/email/i), email)
        userEvent.type(screen.getByPlaceholderText(/password/i), password)
        userEvent.click(
            screen.getByRole('button', {
                name: /sign up/i,
            })
        )
        await waitFor(() =>
            expect(screen.getByText(/loading.../i)).toBeInTheDocument()
        )
        await waitFor(() =>
            expect(
                screen.getByText(/user created succesfully!/i)
            ).toBeInTheDocument()
        )
    })

    it('Renders loading and error message', async () => {
        const mocks = [
            {
                request: {
                    query: InsertUserDocument,
                    variables: {
                        email: 'react-test-demo@mailinator.com',
                        password: 'password',
                    },
                },
                result: {
                    errors: [new GraphQLError('Error!')],
                },
            },
        ]

        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SignupForm />
            </MockedProvider>
        )
        userEvent.type(screen.getByPlaceholderText(/email/i), email)
        userEvent.type(screen.getByPlaceholderText(/password/i), password)
        userEvent.click(
            screen.getByRole('button', {
                name: /sign up/i,
            })
        )
        await waitFor(() =>
            expect(screen.getByText(/loading.../i)).toBeInTheDocument()
        )
        await waitFor(() =>
            expect(
                screen.getByText(/an error ocurred t.t/i)
            ).toBeInTheDocument()
        )
    })
})
