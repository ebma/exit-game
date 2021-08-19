import Button from "../components/Button"
import React from "react"

function LandingPage() {
  const [started, setStarted] = React.useState(false)
  const onClick = () => {
    setStarted(true)
  }

  return (
    <div className="container mx-auto">
      <Button onClick={onClick}>Start</Button>
      {started ? <div>Game started</div> : <div>Game not yet started</div>}
    </div>
  )
}

export default LandingPage