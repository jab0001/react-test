import { FunctionComponent } from "react"

type Props = {
    nextSlide: (e: React.MouseEvent<HTMLElement>) => void
    prevSlide: (e: React.MouseEvent<HTMLElement>) => void
}

const SliderArrow: FunctionComponent<Props> = ({ nextSlide, prevSlide }) => {
    return (
        <>
            <button onClick={prevSlide} className="slider__arrow">&#10094;</button>
            <button onClick={nextSlide} className="slider__arrow slider__arrow--next">&#10095;</button>
        </>
    )
}

export default SliderArrow