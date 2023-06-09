import { create } from "zustand"

export default create(set => ({
  // slides
  max_slides: 5,
  prev_slide: 0,
  curr_slide: 0,

  // set slide num on link click
  setCurrSlide: (new_num: Number) => set((state: any) => {
    return {
      ...state,
      prev_slide: state.curr_slide,
      curr_slide: new_num
    }
  }),
  
  // set slide num on nav btn click
  nextSlide: () => set((state: any) => {
    if(state.curr_slide === state.max_slides) return ({
      ...state,
      prev_slide: state.curr_slide,
      curr_slide: 0
    })
    else return ({
      ...state,
      prev_slide: state.curr_slide,
      curr_slide: state.curr_slide + 1
    })
  }),
  
  // set slide num on nav btn click
  prevSlide: () => set((state: any) => {
    if(state.curr_slide === 0) return ({
      ...state,
      prev_slide: state.curr_slide,
      curr_slide: state.max_slides
    })
    else return ({
      ...state,
      prev_slide: state.curr_slide,
      curr_slide: state.curr_slide - 1
    })
  })
}))