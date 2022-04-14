import { FunctionComponent, useState } from 'react';
import TabItem from './TabItem';


const tabList = [
    {
        id: 133,
        tabTitle: "Tab",
        render: "Tab 1",
    },
    {
        id: 134,
        tabTitle: "Tab",
        render: "Tab 2",

    },
    {
        id: 135,
        tabTitle: "Tab",
        render: "Tab 3",
    }
]

interface Props {
    initialTabActive?: number
}


const TabList: FunctionComponent<Props> = ({initialTabActive = 1}) => {
    const [active, setActive] = useState(initialTabActive)

    return (
        <div className={"homework_wrapper"}>
            <h2>Задание : Tabs</h2>
            <div className="wrapper">
                <ul className={'tab__list'}>
                    {tabList.map((item, i) => <li className={'tab__item'} key={item.id}>
                        <TabItem active={active === i} tabTitle={item.tabTitle} id={item.id} handleTabSelect={() => setActive(i)} />
                    </li>
                    )}
                </ul>
            </div>
            <div className="tab__render">
                {tabList.map((item, i) => {
                    return active === i ? item.render + item.id : ''
                })}
            </div>
        </div>
    )
}

export default TabList;