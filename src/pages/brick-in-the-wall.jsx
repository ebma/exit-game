import { motion } from "framer-motion"
import React from "react"
import { useHistory } from "react-router"
import TypewriterText from "../components/TypewriterText"
import { encode } from "../lib/utils"

function Brick(props) {
  const { selected, onClick } = props

  return (
    <motion.button
      animate={selected ? "selected" : "normal"}
      initial="normal"
      className="flex-1 opacity-50 btn"
      style={{ height: "unset" }}
      onClick={onClick}
      variants={{ selected: { backgroundColor: "rgb(57,7,7)" }, normal: { backgroundColor: "rgb(0,0,0)" } }}
    />
  )
}

function BrickWall(props) {
  const { rows, columns, onSelectedClick, onNormalClick } = props

  return (
    <div className="absolute top-0 left-0 flex flex-col items-stretch w-screen h-screen overflow-hidden">
      {Array(rows)
        .fill(0)
        .map((_, row) => (
          <div key={row} className="flex flex-row flex-wrap items-stretch flex-1">
            {Array(columns)
              .fill(0)
              .map((_, column) => {
                const selected = row === props.selected.row && column === props.selected.column
                return (
                  <Brick
                    key={`${row}-${column}`}
                    selected={selected}
                    onClick={selected ? onSelectedClick : onNormalClick}
                  />
                )
              })}
          </div>
        ))}
    </div>
  )
}

const selectedBricks = [
  { row: 3, column: 10 },
  { row: 12, column: 3 },
  { row: 5, column: 6 },
  { row: 14, column: 13 },
  { row: 7, column: 5 },
]

function BrickInTheWallPage() {
  const [step, setStep] = React.useState(0)

  const history = useHistory()

  const selectedBrick = step < selectedBricks.length ? selectedBricks[step] : { row: -1, column: -1 }

  React.useEffect(() => {
    if (step === selectedBricks.length) {
      const target = encode("bricks")
      history.push(target)
    }
  }, [history, step])

  return (
    <div className="mx-auto overflow-hidden">
      <div className="min-h-screen hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-lg">
            <TypewriterText className="mb-5 text-3xl">Another brick in the wall</TypewriterText>
          </div>
        </div>
        <BrickWall selected={selectedBrick} onSelectedClick={() => setStep((prev) => ++prev)} rows={20} columns={20} />
      </div>
    </div>
  )
}

export default BrickInTheWallPage
