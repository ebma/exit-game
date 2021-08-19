import PropTypes from "prop-types"
import React from "react"
import clsx from "clsx"

function Button(props) {
  const { children, onClick, type = "info" } = props

  const className = clsx(
    "px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors transform rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none dark:focus:bg-gray-700",
    type === "info" && "bg-blue-500 hover:bg-blue-500 focus:bg-blue-500",
    type === "error" && "bg-red-500 hover:bg-red-500 focus:bg-red-500",
    type === "warning" && "bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400"
  )
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["error", "info", "warning"]),
}

export default Button
