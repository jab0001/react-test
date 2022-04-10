import { FunctionComponent, useEffect } from "react"

interface Props {
    newElement: string
    disabled: boolean
    array: Array<string>
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>
    setList: React.Dispatch<React.SetStateAction<Array<string>>> // MouseEvent
}

const BtnTest: FunctionComponent<Props> = ({ disabled, setDisabled, setList, newElement, array }) => {

    useEffect(() => {
        if (array.length >= 8) {
            setDisabled(!disabled)
        }
    },[array])
    
    return (
        <button className={"second__btn"} disabled={disabled} onClick={(e) => {
            setList(oldArray => {return [...oldArray, newElement]})
        }}>Button</button>
    )
}

export default BtnTest;