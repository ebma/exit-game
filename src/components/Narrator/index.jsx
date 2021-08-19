import PropTypes from "prop-types"
import React from "react"
import TextBubble from "../TextBubble"

function Narrator(props) {
  const { sentences } = props

  const [index, setIndex] = React.useState(0)

  const onClick = () => {
    if (index < sentences.length - 1) setIndex((prev) => ++prev)
  }

  return (
    <TextBubble type="speech" onClick={onClick}>
      {sentences[index]}
    </TextBubble>
  )
}

Narrator.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Narrator
