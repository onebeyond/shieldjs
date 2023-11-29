import './i18n/config'
import './index.css'
import theme from './styled.config'
import { ThemeProvider } from 'styled-components'

import React from 'react'

import ReactDOM from 'react-dom/client'

import AppRouter from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
)
