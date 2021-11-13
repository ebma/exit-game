import { motion, useMotionValue } from "framer-motion"
import React from "react"
import RevealingText from "../components/RevealingText"
import SlidingDoor from "../components/SlidingDoor"
import SolutionBar from "../components/SolutionBar"
import TypewriterText from "../components/TypewriterText"

function LandingPage() {
  const [step, setStep] = React.useState(0)
  const [showButton, setShowButton] = React.useState(false)
  const [showBar, setShowBar] = React.useState(false)

  const showButtonCallback = React.useCallback(() => setShowButton(true), [])
  const showBarCallback = React.useCallback(() => setShowBar(true), [])

  const buttonOpacity = useMotionValue(0)

  React.useEffect(() => {
    showButton ? buttonOpacity.set(1) : buttonOpacity.set(0)
  }, [buttonOpacity, showButton])

  return (
    <SlidingDoor
      leftPanel={
        <div className="pr-4 prose prose-lg">
          <RevealingText className="flex flex-col">Exit</RevealingText>
        </div>
      }
      rightPanel={
        <div className="pl-4 prose prose-lg">
          <RevealingText delay={4}>Game</RevealingText>
        </div>
      }
    >
      <div className="px-6 mx-auto">
        <div className="min-h-screen hero">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            {showBar && (
              <motion.div
                className="absolute w-1/3 top-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <SolutionBar label="" placeholder="Solution" />
              </motion.div>
            )}
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
              {step === 0 ? (
                <TypewriterText callback={showButtonCallback} className="mb-5 text-3xl">
                  Welcome to an all new and exciting adventure. This game consists of several puzzles that you need to
                  solve.
                </TypewriterText>
              ) : (
                <TypewriterText callback={showBarCallback} className="mb-5 text-3xl">
                  Every puzzle has a solution. To solve your first puzzle enter Solution in the bar at the top.
                </TypewriterText>
              )}
              <motion.button
                className="mt-8 btn btn-primary"
                disabled={!showButton}
                onClick={() => {
                  setShowButton(false)
                  setStep(1)
                }}
                style={{ opacity: buttonOpacity }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </SlidingDoor>
  )
}

export default LandingPage
