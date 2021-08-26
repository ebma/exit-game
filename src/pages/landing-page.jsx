import React from "react"
import SlidingDoor from "../components/SlidingDoor"
import TypewriterText from "../components/TypewriterText"
import RevealingText from "../components/RevealingText"

function LandingPage() {
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
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <TypewriterText className="mb-5 text-3xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </TypewriterText>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </SlidingDoor>
  )
}

export default LandingPage
