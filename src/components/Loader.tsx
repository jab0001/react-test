import React, { FunctionComponent } from 'react'
import AccordionList from './AccordionList/AccordionList'
import UserList from './firstHomework/UserList'
import InputGeneric, {
  InputGenericEditVersion,
} from './InputGeneric'
import SecondTest from './secondHomework/SecondTest'
import TabList from './Tabs/TabList'

interface Props {
  isLoading: boolean
}

const texts = {
  default: '',
  text1: 'text1',
  text2: 'text2',
  text3: 'text3'
}

const Loader: FunctionComponent<Props> = ( { isLoading } ) => {
  let isVisible = ( isLoading: boolean ) => {
    if( !isLoading ) {
      return <>
        <UserList/>
        <SecondTest/>
        <AccordionList/>
        <TabList/>
        <InputGeneric
          texts={texts}
        />
        <InputGenericEditVersion
          selectData={[
            { title: '123', id: '1', subTitle: '1', optionKey: 'Привет, Андрей', data: {value: 22, address: {street: 'Улица 1'}} },
            { title: '123', id: '2', subTitle: '1', optionKey: 'Привет, Роман', data: {value: 22, address: {street: 'Улица 2'}} },
            { title: '123', id: '3', subTitle: '1', optionKey: 'Привет, Евгений', data: {value: 22, address: {street: 'Улица 3'}} },
            { title: '123', id: '4', subTitle: '1', optionKey: 'Привет, Дмитрий', data: {value: 22, address: {street: 'Улица 4'}} },
          ]}
          inSelectItemRenderKey={'optionKey'}
          renderOption={(data) => {
            return data.data.address.street
          }}
        />
      </>

    } else {
      return <p>Waiting...</p>
    }
  }
  return (
    <>
      {isVisible( isLoading )}
    </>
  )
}

export default Loader
