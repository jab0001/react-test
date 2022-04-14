import { createContext, FC } from 'react'

/* export type AnyObject<T = string> = { [ key: string ]: T } */

type ThemeTypes = 'light' | 'dark' | 'impaired'

interface CurrentThemeProps {
  background: string,
  textColor: string,
  fontSize: string
}

const DefaultTheme: Record<ThemeTypes, CurrentThemeProps> = {
  light: {
    background: '#fff',
    textColor: '#000',
    fontSize: '14px'
  },
  dark: {
    background: '#000',
    textColor: 'white',
    fontSize: '14px'
  },
  impaired: {
    background: 'grey',
    textColor: 'white',
    fontSize: '25px'
  }
}

export const ThemeContext = createContext<CurrentThemeProps>( DefaultTheme.light )


export const ThemeProvider: FC<{ theme: 'light' | 'dark' | 'impaired' }> = ( { theme, children } ) => {
  const CurrentTheme = DefaultTheme[ theme ]

  return (
    <ThemeContext.Provider value={CurrentTheme}>
      {children}
    </ThemeContext.Provider>
  )
}