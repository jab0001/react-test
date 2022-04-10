import { FunctionComponent } from "react"

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputTest: FunctionComponent<Props> = ({ value, setValue }) => {
    return (
      <input className={"second__input"} value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
    )
  }

  export default InputTest;