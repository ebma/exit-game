import PropTypes from "prop-types"
import React from "react"
import Typewriter from "typewriter-effect"
import "./index.scss"

function TypewriterText(props) {
  const { children, className } = props

  const stringArray = React.useMemo(() => {
    const strings = children
      .split(".")
      .filter((s) => s)
      .map((s) => s.trim() + ". ")
    return strings
  }, [children])

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.pauseFor(1000)
        for (const string of stringArray) {
          typewriter.typeString(string)
          typewriter.pauseFor(1000)
        }
        typewriter.start()
      }}
      options={{ delay: 50, wrapperClassName: className }}
    />
  )
}

TypewriterText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default TypewriterText
