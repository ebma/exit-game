import PropTypes from "prop-types"
import React from "react"
import clsx from "clsx"

function Button(props) {
  const { children, onClick, variant = "info" } = props

  const className = clsx("btn btn-primary", props.className)
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["error", "info", "warning"]),
}

export default Button
