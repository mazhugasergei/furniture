// handlers
import SldiesAnimationHandler from "../../hooks/SldiesAnimationHook"

export default () => {
  SldiesAnimationHandler(1)
  
  return (
    <div className="slide">
      <div className="left">
        <div className="pic-cont scroll-cont">
          <div className="pic scroll-element" data-delay={.1}></div>
        </div>
      </div>
    </div>
  )
}