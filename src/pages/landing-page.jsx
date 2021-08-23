import Button from "../components/Button"
import React from "react"
import SlidingDoor from "../components/SlidingDoor"
import Header from "../components/Header"

function LandingPage() {
  return (
    <SlidingDoor>
      <div className="container px-6 py-16 mx-auto">
        <Header />
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Subscribe To The <span className="text-indigo-500">Newsletter</span>
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                be the first to knows when our <span className="font-medium text-indigo-500">Brand</span> is live
              </p>

              <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Email Address"
                />

                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Button className="px-32 py-8 bg-green-400" onClick={() => console.log("Test")}>
              Enter
            </Button>
          </div>
        </div>
      </div>
    </SlidingDoor>
  )
}

export default LandingPage
