import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/Context";
import Slide from "./Slide";
import SliderArrow from "./SliderArrow";


const Slider = ({ sliderData }: any) => {
    const [current, setCurrent] = useState(0);
    const [slide, getSlide] = useState(sliderData[current])
    const theme = useContext( ThemeContext )
    

    useEffect(
        () => getSlide(sliderData[current]),
        [current, slide]
    )

    const nextSlide = () => {
        current === sliderData.length - 1 ?
            setCurrent(0)
            :
            setCurrent(current + 1)
    }

    const prevSlide = () => {
        current === 0 ?
            setCurrent(sliderData.length - 1)
            :
            setCurrent(current - 1)
    }

    return (
        <div className="homework_wrapper">
            <h2>Задание : Slider</h2>
            <div className="slider" style={{ background: theme.background }}>
                <Slide title={slide.title} />
                <SliderArrow nextSlide={nextSlide}
                    prevSlide={prevSlide} />
            </div>
        </div>
    )
}



export default Slider