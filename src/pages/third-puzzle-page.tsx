import PageAnimation from "../components/PageAnimation"
import TypewriterText from "../components/TypewriterText"

function ThirdPuzzlePage() {
  return (
    <PageAnimation>
      <div className="mx-auto overflow-hidden">
        <div className="min-h-screen hero">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-lg">
              <TypewriterText className="mb-5 text-3xl">Test</TypewriterText>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default ThirdPuzzlePage
