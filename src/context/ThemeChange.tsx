import { createContext, ReactNode, useState } from 'react'

import { darkTheme } from '../themes/dark'
import { lightTheme } from '../themes/light'

import { ThemeProvider } from 'styled-components'

interface IThemeContext {
  toggle: () => void
  isDarkTheme: boolean
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggle = () => setIsDarkTheme((prevTheme) => !prevTheme)

  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ toggle, isDarkTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
