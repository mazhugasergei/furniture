// react
import { useEffect } from "react"
// zustand
import useSlides from "../store/useSlides"

export default (SLIDE_NUM: number) => {
  const max_slides = useSlides((state: any) => state.max_slides)
  const curr_slide = useSlides((state: any) => state.curr_slide)
  const prev_slide = useSlides((state: any) => state.prev_slide)

  
  useEffect(()=>{
    const NEXT_SLIDE = SLIDE_NUM + 1 > max_slides ? 0 : SLIDE_NUM + 1
    const PREV_SLIDE = SLIDE_NUM - 1 < 0 ? max_slides : SLIDE_NUM - 1
  
    document.querySelectorAll(`.scroll-element-${SLIDE_NUM+1}`).forEach((item: any) => {
      if(curr_slide === SLIDE_NUM){
        if(prev_slide === NEXT_SLIDE){
          item.style.transition = "0s"
          item.style.transform = "translateY(100%)"
          setTimeout(() => {
            item.style.transition = ".75s"
            item.style.transform = "unset"
          })
        }
        else if(prev_slide === PREV_SLIDE){
          item.style.transition = "0s"
          item.style.transform = "translateY(-100%)"
          setTimeout(() => {
            item.style.transition = ".75s"
            item.style.transform = "unset"
          })
        }
        else item.style.transform = "unset"
      }
      if(prev_slide === SLIDE_NUM){
        if(curr_slide === NEXT_SLIDE) item.style.transform = "translateY(100%)"
        else if(curr_slide === PREV_SLIDE) item.style.transform = "translateY(-100%)"
      }
    })
  }, [curr_slide])
}