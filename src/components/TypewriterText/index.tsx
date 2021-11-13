import React from "react"
import Typewriter, { TypewriterClass } from "typewriter-effect"
import "./index.scss"

interface Props {
  children: string
  className?: string
  callback?: () => void
}

function TypewriterText(props: Props) {
  const { children, className, callback } = props

  const [typewriter, setTypewriter] = React.useState<null | TypewriterClass>(null)

  React.useEffect(() => {
    if (!typewriter) return
    typewriter.stop()
    typewriter.deleteAll(1)

    const strings = children
      .split(".")
      .filter((s) => s)
      .map((s) => s.trim() + ". ")

    typewriter.pauseFor(1000)
    for (const string of strings) {
      typewriter.typeString(string)
      typewriter.pauseFor(1000)
    }
    if (callback) typewriter.callFunction(callback)
    typewriter.start()
  }, [children, callback, typewriter])

  return (
    <Typewriter
      onInit={(tp) => {
        setTypewriter(tp)
      }}
      options={{ delay: 50, wrapperClassName: className }}
    />
  )
}

export default TypewriterText
