import React, { FunctionComponent, useState } from 'react';

interface Props {
    texts: Texts
}

interface Texts {
    default: string
    text1: string
    text2: string
    text3: string
}




const InputGeneric: FunctionComponent<Props> = ({texts}) => {
    const [text, setText] = useState(texts.default)
    return (
        <>
            <div className={"homework_wrapper"}>
                <h2>Задание : Generic</h2>

                <select value={text} onChange={e => setText(e.target.value)}>
                    {Object.entries(texts).map(item => (
                        <option value={item[1]}>{item[0]}</option>
                    ))}
                </select>
                <h2>{text}</h2>
            </div>
        </>
    )
}

export default InputGeneric;