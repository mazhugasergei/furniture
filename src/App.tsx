// react
import { useEffect } from "react"
// zustand
import useSlides from "./store/useSlides"
// components
import Navbar from "./components/Navbar"
import Scroller from "./components/Scroller"
import Slides from "./components/Slides"

export default () => {
  const curr_slide = useSlides((state: any) => state.curr_slide)
  // const slide_scroll_direction = useSlides((state: any) => state.slide_scroll_direction)
  const prev_slide = useSlides((state: any) => state.prev_slide)

  useEffect(()=>{
    console.log(`slide: ${curr_slide}; prev: ${prev_slide}`)
    // console.log(`slide: ${curr_slide}; direction: ${slide_scroll_direction}`)
  }, [curr_slide])
  
  return (
    <>
      <Navbar />
      <Slides />
      <Scroller />
    </>
  )
}