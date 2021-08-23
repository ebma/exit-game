import React from "react"

function ToggleThemeButton() {
  return (
    <button data-toggle-theme="emerald,luxury" data-act-class="ACTIVECLASS">
      Toggle Theme
    </button>
  )
}

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800">
      <nav className="border-b dark:border-gray-700">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Exit Game
              </a>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="items-center lg:flex">
            <div className="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:space-x-16">
              <ToggleThemeButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
