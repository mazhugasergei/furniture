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
          <li onClick={() => { setCurrSlide(0); setMenuClicked(false) }}><span>Welcome</span></li>
          <li onClick={() => { setCurrSlide(1); setMenuClicked(false) }}><span>Intro</span></li>
          <li onClick={() => { setCurrSlide(2); setMenuClicked(false) }}><span>Features</span></li>
          <li onClick={() => { setCurrSlide(3); setMenuClicked(false) }}><span>Benefits</span></li>
          <li onClick={() => { setCurrSlide(4); setMenuClicked(false) }}><span>About</span></li>
        </ul>
      </menu>
    </nav>
  )
}