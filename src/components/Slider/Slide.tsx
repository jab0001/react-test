import { FunctionComponent, useContext } from "react"
import { ThemeContext } from "../Context/Context"
type Props = {
    title: string
}

const Slide: FunctionComponent<Props> = ({ title }) => {
    const theme = useContext( ThemeContext )
    return (
        <div className="slider__item">
            <p className="slider__title" style={{ color: theme.textColor, fontSize: theme.fontSize }}>{title}</p>
        </div>
    )
}

export default Slide