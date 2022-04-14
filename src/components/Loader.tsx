import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import AccordionList from './AccordionList/AccordionList';
import { ThemeProvider } from './Context/Context';
import UserList from './firstHomework/UserList';
import SecondTest from './secondHomework/SecondTest';
import Slider from './Slider/Slider';
import SliderRef from './Slider/SliderRef';
import TabList from './Tabs/TabList';


interface Props {
    isLoading: boolean
}

const sliderData = [
    {
        title: "Slider 1",
    },
    {
        title: "Slider 2",
    },
    {
        title: "Slider 3",
    }
];

const themes = ['dark','light','impaired']

const Loader: FunctionComponent<Props> = ({ isLoading }) => {
    const [theme, setTheme] = useState<'light' | 'dark'| 'impaired'>('dark')
    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        setTheme(():any => {
            let res = themes[current]
            return res
        })
    },[current])

    const changeTheme = () => {
        setCurrent(():any => {
            current === themes.length - 1 ?
            setCurrent(0)
            :
            setCurrent(current + 1)

        })
    }

    let isVisible = (isLoading: boolean) => {
        if (!isLoading) {
            return <>
                <ThemeProvider theme={theme}>
                    <UserList />
                    <SecondTest />
                    <AccordionList />
                    <TabList />
                    <Slider sliderData={sliderData} />
                    <SliderRef sliderData={sliderData} />
                </ThemeProvider>
                <button onClick={changeTheme}>change theme</button>
            </>
        } else {
            return (
                <>
                    <p>Waiting...</p>
                </>
            )
        }
    };
    return (
        <>
            {isVisible(isLoading)}
        </>
    )
}

export default Loader;