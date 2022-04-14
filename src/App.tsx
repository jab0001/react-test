import React, { Component, FunctionComponent, useEffect, useState } from 'react'
import Loader from './components/Loader'
import UserList from './components/firstHomework/UserList'
import SecondTest from './components/secondHomework/SecondTest'
import AccordionList from './components/AccordionList/AccordionList'
import TabList from './components/Tabs/TabList'
import InputGeneric, { InputGenericEditVersion } from './components/InputGeneric'
import { ThemeProvider } from './components/hooksLesson/context'

const texts = {
  default: '',
  text1: 'text1',
  text2: 'text2',
  text3: 'text3'
}

class ErrorBoundary extends Component<any, any> {
  constructor( props: any ) {
    super( props )

    this.state = {
      hasError: false,
      errorInfo: ''
    }
  }

  componentDidCatch( error: Error, errorInfo: React.ErrorInfo ) {
    this.setState( {
        hasError: true,
        errorInfo
      }
    )
  }

  render() {
    if( this.state.hasError ) {
      return <>Произошла ошибка</>
    }

    return this.props.children
  }
}

const App: FunctionComponent = () => {
  const [loader, setLoader] = useState<boolean>( true )
  const [theme, setTheme] = useState<'light' | 'dark'>( 'light' )

  useEffect(() => {
    setTimeout(() => {
      setLoader(prev => !prev)
    }, 3000)
  }, [loader])
  return (
    <ThemeProvider theme={theme}>
      <Loader isLoading={loader}>
        <UserList/>
        <SecondTest/>
        <AccordionList/>
        <TabList/>
        <ErrorBoundary>
          <InputGeneric
            texts={texts}
          />
        </ErrorBoundary>
        <InputGenericEditVersion
          selectData={[
            {
              title: '123',
              id: '1',
              subTitle: '1',
              optionKey: 'Привет, Андрей',
              data: { value: 22, address: { street: 'Улица 1' } }
            },
            {
              title: '123',
              id: '2',
              subTitle: '1',
              optionKey: 'Привет, Роман',
              data: { value: 22, address: { street: 'Улица 2' } }
            },
            {
              title: '123',
              id: '3',
              subTitle: '1',
              optionKey: 'Привет, Евгений',
              data: { value: 22, address: { street: 'Улица 3' } }
            },
            {
              title: '123',
              id: '4',
              subTitle: '1',
              optionKey: 'Привет, Дмитрий',
              data: { value: 22, address: { street: 'Улица 4' } }
            }
          ]}
          inSelectItemRenderKey={'optionKey'}
          renderOption={( data ) => {
            return data.data.address.street
          }}
        />
      </Loader>
    </ThemeProvider>
  )
}

export default App
