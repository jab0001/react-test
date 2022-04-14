import { useRef, useState } from "react";


const SliderRef = ({ sliderData }: any) => {
    const [currentSlide, setCurrent] = useState(0);
    const sliderPrev = useRef(null)
    const sliderNext = useRef(null)

    const Slide = (element:any) => {
        if (element.current.className.includes("slider__arrow--next")) {
            currentSlide === sliderData.length - 1 ?
            setCurrent(0)
            :
            setCurrent(currentSlide + 1)
        } else {
            currentSlide === 0 ?
            setCurrent(sliderData.length - 1)
            :
            setCurrent(currentSlide - 1)
        }
    }


    return (
        <div className="homework_wrapper">
            <h2>Задание : Slider</h2>
            <div className="slider">
                <div className="slider__item">
                    <p className="slider__title">{sliderData[currentSlide].title}</p>
                </div>
                <button ref={sliderPrev} onClick={() =>Slide(sliderPrev)} className="slider__arrow slider__arrow--prev">&#10094;</button>
                <button ref={sliderNext} onClick={() =>Slide(sliderNext)} className="slider__arrow slider__arrow--next">&#10095;</button>
            </div>
        </div>
    )
}



export default SliderRef