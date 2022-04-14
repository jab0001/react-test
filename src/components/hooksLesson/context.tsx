import { createContext, FC } from 'react'

export type AnyObject<T = string> = { [ key: string ]: T }

type ThemeTypes = 'light' | 'dark'

interface CurrentThemeProps {
  primaryTextColor: string,
  dividerColor: string
}

const DefaultTheme: Record<ThemeTypes, CurrentThemeProps> = {
  light: {
    primaryTextColor: '#fff',
    dividerColor: 'rgba(70,70,70,.3)'
  },
  dark: {
    primaryTextColor: '#fff',
    dividerColor: 'rgba(255,255,255,1)'
  }
}

export const ThemeContext = createContext<CurrentThemeProps>( DefaultTheme.light )


export const ThemeProvider: FC<{ theme: 'light' | 'dark' }> = ( { theme, children } ) => {
  const CurrentTheme = DefaultTheme[ theme ]

  return (
    <ThemeContext.Provider value={CurrentTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
