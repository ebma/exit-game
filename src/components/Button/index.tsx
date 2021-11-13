import clsx from "clsx"
import React from "react"

interface Props {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  variant?: "info" | "error" | "warning"
}

function Button(props: Props) {
  const { children, onClick } = props

  const className = clsx("btn btn-primary", props.className)
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default Button
