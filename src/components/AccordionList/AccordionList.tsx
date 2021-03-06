import { FunctionComponent, useState } from 'react';
import AccordionElement from '../AccordionElement/AccordionElement';

const accordionList = [
    {
        id: 123,
        title: "Test",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 124,
        title: "Test",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 125,
        title: "Test",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
]


const AccordionList: FunctionComponent = () => {
    const [active, setActive] = useState(124)

    let selectAccordion = (id: number) => {
        const current = active === id ? -1 : id;
        setActive(() => (current));
    };

    return (
        <div className={"homework_wrapper"}>
            <h2>Задание : Accordion</h2>
            <div className="wrapper">
                <ul className={'accordion__list'}>
                    {accordionList.map((item) => <li className={'accordion__item'} key={item.id}>
                        <AccordionElement title={item.title} text={item.text} id={item.id} handleAccordionSelect={() => selectAccordion(item.id)}
                            active={item.id === active} />
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default AccordionList;