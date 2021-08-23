import React from "react"
import { themeChange } from "theme-change"
import "./App.css"
import "./index.css"
import LandingPage from "./pages/landing-page"

function App() {
  React.useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default App
