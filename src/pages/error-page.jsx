import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import TypewriterText from "../components/TypewriterText"

function ErrorPage() {
  const navigate = useNavigate()

  const goBack = React.useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="px-6 mx-auto">
      <div className="min-h-screen hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nothing to see here</h1>
            <TypewriterText className="mb-5 text-3xl">You took a wrong turn buddy.</TypewriterText>
            <button className="mt-4 btn btn-lg" onClick={goBack}>
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
