import { FunctionComponent, useState } from "react"
import '../../App.css';
import BtnTest from "./BtnTest";
import InputTest from "./InputTest";
import TitleTest from "./TitleTest";

const SecondTest: FunctionComponent = () => {
  const [value, setValue] = useState<string>('test')
  const [disabled, setDisabled] = useState<boolean>(false)
  const [list, setList] = useState<Array<string>>(['Bill', 'Scot', 'Garry', 'Scot'])
  return (
    <>
      <div className={"homework_wrapper"} style={{display: "none"}}>
        <h2>Задание: 2</h2>
        <TitleTest data={list.length}/>
        <InputTest value={value} setValue={setValue}/>
        <BtnTest disabled={disabled} array={list} setDisabled={setDisabled} setList={setList} newElement={value}/>
      </div>
    </>
  )
}

export default SecondTest;