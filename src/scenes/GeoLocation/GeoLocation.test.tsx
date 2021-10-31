import { screen, render, waitFor } from '@testing-library/react'
import { GeoLocation } from './GeoLocation'

describe('GeoLocation Component', () => {
    beforeEach(() => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
                Promise.resolve(
                    success({
                        coords: {
                            latitude: 51.1,
                            longitude: 45.3,
                        },
                    })
                )
            ),
        }
        global.navigator.geolocation = mockGeolocation
    })
    it('renders the latitude and longitude', async () => {
        render(<GeoLocation />)
        await waitFor(() =>
            expect(screen.getByText(/latitude: 51.1/i)).toBeInTheDocument()
        )
        expect(screen.getByText(/longitude: 45.3/i)).toBeInTheDocument()
    })
})
