import { render, screen } from '@testing-library/react'
import { EmptyInfo } from './index'

describe('Empty component', () => {
  it('should be render logo in empty task container', () => {
    render(<EmptyInfo />)
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument()
  })
})
