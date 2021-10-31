import { MockedProvider } from '@apollo/client/testing'
import { render, screen, waitFor } from '@testing-library/react'
import { GraphQLError } from 'graphql'
import { GetYugiohCardDocument } from '../../graphql/autogenerate/hooks'
import { Yugioh } from './Yugioh'

// We'll fill this in next
describe('Yugioh Component', () => {
    it('Renders yugioh card name', async () => {
        const mocks = [
            {
                request: {
                    query: GetYugiohCardDocument,
                },
                result: {
                    data: {
                        yugioh_names: [
                            {
                                id: 1,
                                name: 'Exodia',
                            },
                        ],
                    },
                },
            },
        ]
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Yugioh />
            </MockedProvider>
        )

        expect(screen.getByText('loading')).toBeVisible()

        await waitFor(() => expect(screen.getByText('Exodia')).toBeVisible())
    })

    it('Renders error', async () => {
        const mocks = [
            {
                request: {
                    query: GetYugiohCardDocument,
                },
                result: { errors: [new GraphQLError('Error!')] },
            },
        ]
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Yugioh />
            </MockedProvider>
        )

        expect(screen.getByText('loading')).toBeVisible()

        await waitFor(() => expect(screen.getByText('error')).toBeVisible())
    })

    it('Renders text on empty yugioh names', async () => {
        const mocks = [
            {
                request: {
                    query: GetYugiohCardDocument,
                },
                result: {
                    data: {
                        yugioh_names: [],
                    },
                },
            },
        ]
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Yugioh />
            </MockedProvider>
        )

        expect(screen.getByText('loading')).toBeVisible()

        await waitFor(() =>
            expect(screen.getByText('no yugioh names found')).toBeVisible()
        )
    })
})
