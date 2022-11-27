import { render, screen } from '@testing-library/react'
import { Home } from './index'

describe('Page Home', () => {
  it('should be render logo in page Home', () => {
    render(<Home />)
    expect(screen.getByAltText(/logo to-do/i)).toBeInTheDocument()
  })
})
