// handlers
import SldiesAnimationHandler from "../../hooks/SldiesAnimationHook"

export default () => {
  SldiesAnimationHandler(0)

  return (
    <div className="slide">
      <div className="left">
        <div className="pic-1 scroll-element scroll-element-1">
          <div className="num-cont cont">
            <div className="num scroll-element scroll-element-1">01</div>
          </div>
          <div className="headline-cont cont">
            <div className="headline scroll-element scroll-element-1">Handmade<br/>Furniture</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="pic-2-cont cont">
        <div className="pic-2 scroll-element scroll-element-1" />
        </div>
        <div className="p-cont cont">
          <p className="scroll-element scroll-element-1">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas facilisis.</p>
        </div>
      </div>
    </div>
  )
}