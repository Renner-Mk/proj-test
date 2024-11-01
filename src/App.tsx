import { RouterProvider } from 'react-router-dom'

import { router } from './router'

import GlobalStyle from './styles/global'

import { ThemeContextProvider } from './context/ThemeChange'

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}
