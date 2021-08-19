import clsx from "clsx"
import PropTypes from "prop-types"
import "./index.css"

function TextBubble(props) {
  const { children, onClick, type, orientation = "left" } = props

  const mirrorClass =
    type === "speech" && orientation === "right"
      ? "mirror-x"
      : type !== "speech" && orientation === "left"
      ? "mirror-x"
      : undefined

  return (
    <div className={clsx("bubble", type, mirrorClass)} onClick={onClick}>
      <span className={mirrorClass} style={{ position: "absolute" }}>
        {children}
      </span>
    </div>
  )
}

TextBubble.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["whisper", "speech", "electric"]).isRequired,
  orientation: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
}

export default TextBubble
