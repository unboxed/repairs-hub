import React from 'react'
import PhaseBanner from './PhaseBanner'
import { render } from '@testing-library/react'

describe('PhaseBanner', () => {
  it('renders a PhaseBanner with phase props', () => {
    const phase = 'BETA'
    const { getByText } = render(<PhaseBanner phase={phase} />)
    const phaseBanner = getByText(phase)
    expect(phaseBanner).toBeInTheDocument()
  })
})
