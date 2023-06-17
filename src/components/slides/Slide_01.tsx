export default () => {
  return (
    <div className="slide">
      <div className="left">
        <div className="pic-cont scroll-element">
          <div className="num-cont scroll-cont">
            <div className="num scroll-element" data-delay={.1}>01</div>
          </div>
          <div className="headline-cont scroll-cont">
            <div className="headline scroll-element" data-delay={.1}>Handmade<br/>Furniture</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="pic-cont scroll-cont">
        <div className="pic scroll-element" />
        </div>
        <div className="p-cont scroll-cont">
          <p className="scroll-element" data-delay={.15}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas facilisis.</p>
        </div>
      </div>
    </div>
  )
}