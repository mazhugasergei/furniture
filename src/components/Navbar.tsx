// react
import { useEffect, useState } from "react"
// zustand
import useSlides from "../store/useSlides"
// images
import { ReactComponent as Logo } from "../assets/images/ui/logo.svg"

export default () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const setCurrSlide = useSlides((state: any) => state.setCurrSlide)

  return (
    <nav className="navbar">
      <div className={menuClicked ? "menu-btn clicked" : "menu-btn"} onClick={() => setMenuClicked(!menuClicked)} />
      <div className="logo"><Logo /></div>
      <menu className={menuClicked ? "opened": ""}>
        <ul>
          <li onClick={() => setCurrSlide(0)}><span>Welcome</span></li>
          <li onClick={() => setCurrSlide(1)}><span>Intro</span></li>
          <li onClick={() => setCurrSlide(2)}><span>Features</span></li>
          <li onClick={() => setCurrSlide(3)}><span>Benefits</span></li>
          <li onClick={() => setCurrSlide(4)}><span>About</span></li>
        </ul>
      </menu>
    </nav>
  )
}