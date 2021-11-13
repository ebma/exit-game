import clsx from "clsx"
import "./index.css"

interface Props {
  children: React.ReactNode
  onClick: () => void
  type: "speech" | "whisper" | "electric"
  orientation?: "left" | "right"
}

function TextBubble(props: Props) {
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

export default TextBubble
