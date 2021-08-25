import React from "react"
import "./index.scss"

function SlidingDoor(props) {
  const { children } = props
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="curtain">
      <div className="curtain__wrapper">
        {checked ? (
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => {
              setChecked(!checked)
            }}
          />
        ) : undefined}

        <div className="curtain__panel curtain__panel--left bg-primary">
          <div className="pr-4 prose prose-lg">
            <h1 className="prose">Exit</h1>
          </div>
        </div>

        <div className="curtain__content">{children}</div>

        <div className="curtain__panel curtain__panel--right bg-primary">
          <div className="pl-4 prose prose-lg">
            <h1 className="prose">Game</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlidingDoor
