import React, { FunctionComponent } from 'react';

interface Props {
    id: number
    tabTitle: string
    active: boolean
    handleTabSelect: (e: React.MouseEvent<HTMLElement>) => void
}

const TabItem: FunctionComponent<Props> = ({ id, active, handleTabSelect, tabTitle }) => {
    return (
        <div className={active ? 'tab__item tab__item--active' : 'tab__item tab__item--inactive'} onClick={handleTabSelect}>
            <h2>{tabTitle + id}</h2>
        </div>
    )
}

export default TabItem;
