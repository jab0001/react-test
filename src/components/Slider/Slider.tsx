import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/Context'
import Slide from './Slide'
import SliderArrow from './SliderArrow'

interface Props {
  sliderData: Array<{
    title: string
  }>,
  initialCurrentSlide?: number
}

const Slider: FunctionComponent<Props> = ( { sliderData, initialCurrentSlide = 0 }: any ) => {
  const [current, setCurrent] = useState<number>( initialCurrentSlide )
  const [slide, setSlide] = useState( sliderData[ initialCurrentSlide ] )
  // const [current, setCurrent] = useState<number>(0);
  // const [slide, setSlide] = useState(sliderData[current])
  const theme = useContext( ThemeContext )


  useEffect(
    () => {
      setSlide( sliderData[ current ] )
      console.log('вызов useEffect')
    },
    [current] //Удалить зависимость slide
  )

  const nextSlide = () => {
    current === sliderData.length - 1 ?
      setCurrent( 0 )
      :
      setCurrent( current + 1 )
    // setCurrent(current === (sliderData.length - 1) ? 0 : current + 1 )

  }

  const prevSlide = () => {
    // current === 0 ?
    //   setCurrent( sliderData.length - 1 )
    //   :
    //   setCurrent( current - 1 )

    setCurrent(!current ? sliderData.length - 1 : current - 1 )
  }

  return (
    <div className="homework_wrapper">
      <h2>Задание : Slider</h2>
      <div className="slider" style={{ background: theme.background }}>
        <Slide title={slide.title}/>
        <SliderArrow
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </div>
  )
}


export default Slider
