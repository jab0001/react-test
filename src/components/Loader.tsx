import React, { FunctionComponent } from 'react';
import AccordionList from './AccordionList/AccordionList';
import UserList from './firstHomework/UserList';
import InputGeneric from './InputGeneric';
import SecondTest from './secondHomework/SecondTest';
import TabList from './Tabs/TabList';

interface Props {
    isLoading: boolean
}

const texts = {
    default: "",
    text1: 'text1',
    text2: 'text2',
    text3: 'text3',
  }

const Loader: FunctionComponent<Props> = ({ isLoading }) => {
    let isVisible = (isLoading: boolean) => {
        if (!isLoading) {
            return <>
            <UserList />
            <SecondTest />
            <AccordionList />
            <TabList />
            <InputGeneric texts={texts}/></>
        } else {
            return <p>Waiting...</p>
        }
    };
    return (
        <>
            {isVisible(isLoading)}
        </>
    )
}

export default Loader;