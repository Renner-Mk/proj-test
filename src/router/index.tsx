import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { HomePage2 } from '../pages/HomePage2'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Home2',
    element: <HomePage2 />,
  },
])
