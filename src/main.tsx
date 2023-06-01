import './i18n'
import './index.css'

import React from 'react'

import ReactDOM from 'react-dom/client'

import AppRouter from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
