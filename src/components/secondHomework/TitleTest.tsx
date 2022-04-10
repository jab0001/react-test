import { FunctionComponent } from "react"

interface Props {
  data: number
}

const InputTest: FunctionComponent<Props> = ({ data }) => {
    return (
        <h3 className={"second__title"}>Длина списка {data} шт</h3>
    )
  }

  export default InputTest;