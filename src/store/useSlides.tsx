import { create } from "zustand"

export default create(set => ({
  // slides
  max_slides: 5,
  curr_slide: 0,
  slide_scroll_direction: "next",

  // set slide num on link click
  setCurrSlide: (new_num: Number) => set((state: any) => {
    let new_slide_scroll_direction = state.curr_slide < new_num ? "next" : "prev"
    return {
      ...state,
      curr_slide: new_num,
      slide_scroll_direction: new_slide_scroll_direction
    }
  }),
  
  // set slide num on nav btn click
  nextSlide: () => set((state: any) => {
    if(state.curr_slide === state.max_slides) return ({
      ...state,
      curr_slide: 0,
      slide_scroll_direction: "next"
    })
    else return ({
      ...state,
      curr_slide: state.curr_slide + 1,
      slide_scroll_direction: "next"
    })
  }),
  
  // set slide num on nav btn click
  prevSlide: () => set((state: any) => {
    if(state.curr_slide === 0) return ({
      ...state,
      curr_slide: state.max_slides,
      slide_scroll_direction: "prev"
    })
    else return ({
      ...state,
      curr_slide: state.curr_slide - 1,
      slide_scroll_direction: "prev"
    })
  })
}))