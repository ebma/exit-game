import React from "react"
import TextBubble from "../TextBubble"

interface Props {
  sentences: string[]
}

function Narrator(props: Props) {
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

export default Narrator
