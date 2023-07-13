export default () => {
  return (
    <div className="slide">
      <div className="left">
        <div className="pic-cont scroll-cont">
          <div className="pic scroll-element" data-delay={.2}></div>
        </div>
      </div>
      <div className="right">
        <div className="pic-cont scroll-cont">
          <div className="pic scroll-element" data-delay={.2}></div>
        </div>
      </div>
      <div className="center">
        <div className="num-cont scroll-cont">
          <div className="num scroll-element">02</div>
        </div>
        <div className="headline-cont scroll-cont">
          <div className="headline scroll-element" data-delay={.3}>Impeccable<br/>Craftsmanship</div>
        </div>
        <div className="p-cont scroll-cont">
          <div className="p scroll-element" data-delay={.3}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas facilisis.</div>
        </div>
      </div>
    </div>
  )
}