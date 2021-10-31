import { render, screen } from '@testing-library/react'
import { useAuth } from './useAuth'
import { WelcomeUser } from './WelcomeUser'

// First mock method
// jest.mock('./useAuth', () => ({
//     useAuth: () => ({
//         teacher: { name: 'jhon', age: 30, id: 1 },
//         student: {},
//     }),
// }))

// Second mock method
jest.mock('./useAuth')

describe('WelcomeUser component', () => {
    it('Renders the teacher name', () => {
        useAuth.mockReturnValue({
            teacher: { name: 'jhon', age: 30, id: 1 },
            student: {},
        })
        render(<WelcomeUser />)
        expect(screen.getByText(/welcome jhon/i)).toBeInTheDocument()
    })

    it('Renders the student name', () => {
        useAuth.mockReturnValue({
            student: { name: 'martha', age: 30, id: 1 },
            teacher: {},
        })
        render(<WelcomeUser />)
        expect(screen.getByText(/welcome martha/i)).toBeInTheDocument()
    })

    it('Renders "stranger" when no name provided', () => {
        useAuth.mockReturnValue({
            student: {},
            teacher: {},
        })
        render(<WelcomeUser />)
        expect(screen.getByText(/welcome stranger/i)).toBeInTheDocument()
    })
})
