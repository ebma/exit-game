import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { themeChange } from "theme-change"
import "./App.css"
import "./index.css"
import { encode } from "./lib/utils"
import ErrorPage from "./pages/error-page"
import BrickInTheWallPage from "./pages/brick-in-the-wall"
import LandingPage from "./pages/landing-page"

function App() {
  React.useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path={`/${encode("Solution")}`}>
          <BrickInTheWallPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
