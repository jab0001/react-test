import { FunctionComponent } from 'react';

interface Props {
    id: number
    title: string
    text: string
    active: boolean
    handleAccordionSelect: (e: React.MouseEvent<HTMLElement>) => void
}

const AccordionElement: FunctionComponent<Props> = ({ id, title, text, active, handleAccordionSelect }) => {
    return (
        <div className="accordion-wrapper">

            <div
                className={`accordion-title ${active ? "open" : ""}`}
                onClick={handleAccordionSelect}
            >
                <h3>{title + id}</h3>
                <span>{active ? "Открыт" : "Закрыт"}</span>
            </div>
            <div className={`accordion-item ${!active ? "collapsed" : ""}`}>
                <div className="accordion-content">{text}</div>
            </div>
        </div>
    )
}

export default AccordionElement;
