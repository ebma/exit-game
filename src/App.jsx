import React from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
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

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path={`/${getRouteFor("bricks")}`} element={<BrickInTheWallPage />} />
        <Route exact path={`/${getRouteFor("third-puzzle")}`} element={<ThirdPuzzlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
