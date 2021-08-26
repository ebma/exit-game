import React from "react"
import TypewriterText from "../components/TypewriterText"

function ErrorPage() {
  return (
    <div className="px-6 mx-auto">
      <div className="min-h-screen hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nothing to see here</h1>
            <TypewriterText className="mb-5 text-3xl">You took a wrong turn buddy.</TypewriterText>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
