import { RouterProvider } from 'react-router-dom'

import { router } from './router'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

// import light from "./themes/light";
import dark from './themes/dark'

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
