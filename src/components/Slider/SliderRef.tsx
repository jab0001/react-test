import { FunctionComponent, useEffect, useRef, useState } from 'react'

interface Props {
  sliderData: Array<{
    title: string
  }>
}


const SliderRef: FunctionComponent<Props> = ( { sliderData } ) => {
  const [currentSlide, setCurrent] = useState<number>( 0 )
  const sliderPrev = useRef<HTMLButtonElement>( null )
  const sliderNext = useRef<HTMLButtonElement>( null )

  useEffect( () => {
    Slide( currentSlide )
  }, [currentSlide] )

  const ref = useRef<HTMLDivElement>( null )
  const sliderContainerRef = useRef<HTMLDivElement>( null )
  const Slide = ( currentSlide: number ) => {
    // if( element.current.className.includes( 'slider__arrow--next' ) ) {
    //   currentSlide === sliderData.length - 1 ?
    //     setCurrent( 0 )
    //     :
    //     setCurrent( currentSlide + 1 )
    // } else {
    //   currentSlide === 0 ?
    //     setCurrent( sliderData.length - 1 )
    //     :
    //     setCurrent( currentSlide - 1 )
    // }

    if(!sliderContainerRef.current){
      return
    }

    const width = sliderContainerRef.current.offsetWidth
    const { current: currentElement } = ref

    const translateX = `${currentSlide * width}px`

    if( currentElement ) {
      currentElement.style.transform = `translateX(-${translateX})`
    }

  }


  return (
    <div className="homework_wrapper">
      <h2>Задание : Slider</h2>
      <div className="slider" ref={sliderContainerRef}>
        <div className={'slider__body'} ref={ref}>
          {sliderData.map( item => (
            <div className="slider__item">
              <p className="slider__title">
                {item.title}
              </p>
            </div>
          ) )}
        </div>
        <button
          onClick={() => setCurrent( prev => prev - 1 < 0 ? 0 : prev - 1 )}
          className="slider__arrow slider__arrow--prev"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrent( prev => prev + 1 > sliderData.length - 1 ? prev : prev + 1 )}
          className="slider__arrow slider__arrow--next"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}


export default SliderRef
