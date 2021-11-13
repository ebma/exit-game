import { motion } from "framer-motion"
import React from "react"
import "./index.scss"

interface Props {
  children: React.ReactNode
  leftPanel?: React.ReactNode
  rightPanel?: React.ReactNode
}

function SlidingDoor(props: Props) {
  const { children, leftPanel, rightPanel } = props
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="curtain">
      <div className="curtain__wrapper">
        {checked && (
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
          />
        )}

        <div className="curtain__panel curtain__panel--left bg-primary">{leftPanel}</div>
        {!checked && (
          <motion.div
            className="curtain__content"
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            {children}
          </motion.div>
        )}
        <div className="curtain__panel curtain__panel--right bg-primary">{rightPanel}</div>
      </div>
    </div>
  )
}

export default SlidingDoor
