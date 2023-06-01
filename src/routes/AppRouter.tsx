import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { NotFound } from '../pages/NotFound'
import FetchExample from '@/pages/FetchExample/FetchExample'
import { Home } from '@/pages/Home'

interface RouteType {
  key: string;
  path: string;
  element: ReactElement;
}

const routes: RouteType[] = [
  {
    key: 'home',
    path: '/',
    element: <Home />
  },
  {
    key: 'fetch-example',
    path: '/fetch-example',
    element: <FetchExample/>
  },
  {
    key: 'about',
    path: '/about',
    element: <About />
  },
  {
    key: 'not-found',
    path: '/*',
    element: <NotFound />
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
