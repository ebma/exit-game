import { motion } from "framer-motion"
import React from "react"
import PageAnimation from "../components/PageAnimation"
import TypewriterText from "../components/TypewriterText"
import { useSolution } from "../lib/solutions"

interface BrickProps {
  selected?: boolean
  onClick?: () => void
}

function Brick(props: BrickProps) {
  const { selected, onClick } = props

  return (
    <motion.button
      animate={selected ? "selected" : "normal"}
      initial="normal"
      className="flex-1 opacity-50 btn"
      style={{
        height: "unset",
        minHeight: "unset",
      }}
      onClick={onClick}
      variants={{
        selected: { backgroundImage: "linear-gradient(to bottom right, rgb(170,98,15), rgb(61,35,4)" },
        normal: { backgroundImage: "linear-gradient(to bottom right, rgb(121,73,10), rgb(71,41,4)" },
      }}
    />
  )
}

interface BrickWallProps {
  columns: number
  rows: number
  selected: { row: number; column: number }
  onSelectedClick?: () => void
  onNormalClick?: () => void
}

function BrickWall(props: BrickWallProps) {
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
  { row: 22, column: 23 },
  { row: 5, column: 26 },
  { row: 24, column: 13 },
  { row: 0, column: 1 },
  { row: 29, column: 29 },
  { row: 15, column: 15 },
]

function BrickInTheWallPage() {
  const [step, setStep] = React.useState(0)

  const { goNext } = useSolution("bricks")

  const selectedBrick = step < selectedBricks.length ? selectedBricks[step] : { row: -1, column: -1 }

  React.useEffect(() => {
    if (step === selectedBricks.length) {
      goNext()
    }
  }, [goNext, step])

  return (
    <PageAnimation>
      <div className="mx-auto overflow-hidden">
        <div className="min-h-screen hero">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-lg">
              <TypewriterText className="mb-5 text-3xl">Another brick in the wall</TypewriterText>
            </div>
          </div>
          <BrickWall
            selected={selectedBrick}
            onSelectedClick={() => setStep((prev) => ++prev)}
            onNormalClick={undefined}
            rows={30}
            columns={30}
          />
        </div>
      </div>
    </PageAnimation>
  )
}

export default BrickInTheWallPage
