import "./index.css"
import "./App.css"
import Header from "./components/Header"
import LandingPage from "./pages/landing-page"

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <LandingPage />
    </div>
  )
}

export default App
