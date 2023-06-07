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
    console.log(`Slide: ${curr_slide}`)
    console.log(`Direction: ${slide_scroll_direction}`)
  }, [curr_slide])
  
  return (
    <>
      <Navbar />
      <Scroller />
    </>
  )
}