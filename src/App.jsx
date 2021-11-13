import { AnimatePresence } from "framer-motion"
import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { themeChange } from "theme-change"
import "./App.css"
import "./index.css"
import { getRouteFor } from "./lib/solutions"
import BrickInTheWallPage from "./pages/brick-in-the-wall"
import ErrorPage from "./pages/error-page"
import LandingPage from "./pages/landing-page"
import ThirdPuzzlePage from "./pages/third-puzzle-page"

function App() {
  React.useEffect(() => {
    themeChange(false)
  }, [])

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path={`/${getRouteFor("bricks")}`} element={<BrickInTheWallPage />} />
        <Route exact path={`/${getRouteFor("third")}`} element={<ThirdPuzzlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
