import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { DefaultLayout } from '../layouts/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])
