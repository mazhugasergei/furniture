// react
import { useEffect } from "react"
// zustand
import useSlides from "../store/useSlides"

export default () => {
  const max_slides = useSlides((state: any) => state.max_slides)
  const curr_slide = useSlides((state: any) => state.curr_slide)
  const prev_slide = useSlides((state: any) => state.prev_slide)

  
  useEffect(()=>{
    for(let SLIDE_NUM = 0; SLIDE_NUM < 2; SLIDE_NUM++){ // TODO: change `SLIDE_NUM < x` to `SLIDE_NUM < max_slides`
      const NEXT_SLIDE = SLIDE_NUM + 1 > max_slides ? 0 : SLIDE_NUM + 1
    
      document.querySelectorAll(`.slide`)[SLIDE_NUM].querySelectorAll(`.scroll-element`).forEach((item: any) => {
        // behaviour for the slide u switched to
        if(curr_slide === SLIDE_NUM){
          item.style.transitionDuration = "0s"
          item.style.opacity = "1"
          item.style.transform = `translateY(${prev_slide === NEXT_SLIDE ? "100%" : "-100%"})`
          setTimeout(() => {
            item.style.transitionDuration = ".75s"
            item.style.transitionDelay = item.dataset.delay ? `${item.dataset.delay}s` : "0s"
            item.style.transform = "unset"
          })
        }
        // behaviour for the slide u switched from
        else if(prev_slide === SLIDE_NUM){
          item.style.transitionDelay = "0s"
          if(item.classList.contains("pic")) item.style.opacity = ".5"
          item.style.transform = `translateY(${curr_slide === NEXT_SLIDE ? "100%" : "-101%"})`
        }
      })
    }
  }, [curr_slide])
}