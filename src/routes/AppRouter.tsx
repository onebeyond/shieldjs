import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { About } from '../pages/About'
import { NoMatch } from '../pages/NoMatch'

interface RouteType {
  key: string;
  path: string;
  element: ReactElement;
}

const routes: RouteType[] = [
  {
    key: 'app',
    path: '/',
    element: <App />
  },
  {
    key: 'about',
    path: '/about',
    element: <About />
  },
  {
    key: 'no-match',
    path: '/*',
    element: <NoMatch />
  }
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ key, path, element }: RouteType) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
