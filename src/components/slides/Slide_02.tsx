export default () => {
  return (
    <div className="slide">
      <div className="left">
        <div className="pic-cont scroll-cont">
          <div className="pic scroll-element" data-delay={.1}></div>
        </div>
      </div>
      <div className="right">
        <div className="pic-cont scroll-cont">
          <div className="pic scroll-element" data-delay={.1}></div>
        </div>
      </div>
    </div>
  )
}