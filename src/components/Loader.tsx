import React, { FunctionComponent, useContext, useEffect, useRef } from 'react'
import { ThemeContext } from './hooksLesson/context'

interface Props {
  isLoading: boolean
}

const Loader: FunctionComponent<Props> = ( { children, isLoading } ) => {
  const theme = useContext( ThemeContext )
  const ref = useRef<HTMLDivElement>( null )

  return (
    <>
      {isLoading && (
        <div className={'my__loader'} ref={ref} style={{ background: theme.primaryTextColor }}>
          Загрузка...
        </div>
      )}
      {children}
    </>
  )
}

export default Loader
