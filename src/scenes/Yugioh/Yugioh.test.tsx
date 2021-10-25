import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { GetYugiohCardDocument } from '../../graphql/autogenerate/hooks'
import { Yugioh } from './Yugioh'

// We'll fill this in next
describe('yugioh', () => {
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

        const yugiohName = await screen.findByText('Exodia')

        expect(yugiohName).toBeVisible()
    })

    it('Renders error', async () => {
        const mocks = [
            {
                request: {
                    query: GetYugiohCardDocument,
                },
                result: {
                    errors: [
                        {
                            extensions: {
                                path: '$.selectionSet.yugioh_names.selectionSet.namea',
                                code: 'validation-failed',
                            },
                            message:
                                'field "namea" not found in type: \'yugioh_names\'',
                        },
                    ],
                },
            },
        ]
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Yugioh />
            </MockedProvider>
        )

        expect(screen.getByText('loading')).toBeVisible()

        const yugiohName = await screen.findByText('error')

        expect(yugiohName).toBeVisible()
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

        const yugiohName = await screen.findByText('no yugioh names found')

        expect(yugiohName).toBeVisible()
    })
})
