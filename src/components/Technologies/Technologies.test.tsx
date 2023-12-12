import { render, screen } from '@testing-library/react'

import { expect, test } from 'vitest'

import { Technologies } from './Technologies'

import '@testing-library/jest-dom'
import theme from '@/styled.config'
import { ThemeProvider } from 'styled-components'

test('renders Technologies component', () => {
  const technologiesComponent = render(
    <ThemeProvider theme={theme}>
      <Technologies />
    </ThemeProvider>
  )
  const iconsAlt = ['Vite Logo', 'React Logo', 'Typescript Logo', 'Playwright Logo', 'Hygen Logo', 'Styled Components Logo']
  const icons = technologiesComponent.getAllByRole('img').map((icon) => icon.getAttribute('alt'))
  expect(screen.getByText('Which technologies do we use?')).toBeInTheDocument()
  expect(screen.getByText('We provide the latest technology stack to make the best product')).toBeInTheDocument()
  expect(icons).toHaveLength(6)
  expect(icons).toEqual(iconsAlt)
})
