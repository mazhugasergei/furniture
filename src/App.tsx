// handlers
import SldiesAnimationHandler from "./hooks/SldiesAnimationHook"
// components
import Navbar from "./components/Navbar"
import Scroller from "./components/Scroller"
import Slides from "./components/Slides"

export default () => {
  SldiesAnimationHandler()
  
  return (
    <>
      <Navbar />
      <Slides />
      <Scroller />
    </>
  )
}