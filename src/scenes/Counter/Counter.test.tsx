import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'

describe('Simple Counter', () => {
    it('Buttons work', () => {
        render(<Counter />)

        expect(screen.getByText(/0/i)).toBeInTheDocument()
        userEvent.click(
            screen.getByRole('button', {
                name: /increment/i,
            })
        )
        expect(screen.getByText(/1/i)).toBeInTheDocument()
        userEvent.click(
            screen.getByRole('button', {
                name: /decrement/i,
            })
        )
        expect(screen.getByText(/0/i)).toBeInTheDocument()
    })
    it('Buttons work with props', () => {
        render(<Counter initialValue={5} />)

        expect(screen.getByText(/5/i)).toBeInTheDocument()
        userEvent.click(
            screen.getByRole('button', {
                name: /increment/i,
            })
        )
        expect(screen.getByText(/6/i)).toBeInTheDocument()
        userEvent.click(
            screen.getByRole('button', {
                name: /decrement/i,
            })
        )
        expect(screen.getByText(/5/i)).toBeInTheDocument()
    })
})
