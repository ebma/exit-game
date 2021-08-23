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

        <div className="curtain__panel curtain__panel--left">
          <h1>Click to reveal&nbsp;</h1>
        </div>

        <div className="curtain__content">{children}</div>

        <div className="curtain__panel curtain__panel--right">
          <h1>a special reward...</h1>
        </div>
      </div>
    </div>
  )
}

export default SlidingDoor
