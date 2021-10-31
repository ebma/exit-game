import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import { themeChange } from "theme-change"
import "./App.css"
import "./index.css"
import ErrorPage from "./pages/error-page"
import LandingPage from "./pages/landing-page"

function App() {
  React.useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Router>
  )
}

export default App
