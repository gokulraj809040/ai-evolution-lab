import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe("App smoke Test", () => {
    it('renders the header correctly', () => {
        render(<App />)
        expect(screen.getByText(/n-gram/i)).toBeInTheDocument()
    })
})