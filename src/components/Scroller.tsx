// zustand
import useSlides from "../store/useSlides"

export default () => {
  const nextSlide = useSlides((state: any) => state.nextSlide)
  const prevSlide = useSlides((state: any) => state.prevSlide)

  return (
    <nav className="scroller">
      <div onClick={prevSlide} className="btn prev">
        <span className="material-symbols-outlined">arrow_upward</span>
      </div>
      <div onClick={nextSlide} className="btn next">
        <span className="material-symbols-outlined">arrow_downward</span>
      </div>
    </nav>
  )
}