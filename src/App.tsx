// react
import { useEffect } from "react"
// zustand
import useSlides from "./store/useSlides"
// components
import Navbar from "./components/Navbar"
import Scroller from "./components/Scroller"

export default () => {
  const curr_slide = useSlides((state: any) => state.curr_slide)
  const slide_scroll_direction = useSlides((state: any) => state.slide_scroll_direction)

  useEffect(()=>{
    console.log(`slide: ${curr_slide}; direction: ${slide_scroll_direction}`)
  }, [curr_slide])
  
  return (
    <>
      <Navbar />
      <div className="slides">
        <div className="slide">
          <div className="left">
            <div className="pic-1">
              <div className="num-cont cont">
                <div className="num">01</div>
              </div>
              <div className="headline-cont cont">
                <div className="headline">Handmade<br/>Furniture</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="pic-2-cont cont">
            <div className="pic-2" />
            </div>
            <div className="p-cont cont">
              <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas facilisis.</p>
            </div>
          </div>
        </div>
      </div>
      <Scroller />
    </>
  )
}