import React from "react"
import { useNavigate } from "react-router"
import { encode } from "./utils"

export const solutions = {
  intro: "Solution",
  bricks: "after-bricks",
  third: "after-third",
}

export type Page = keyof typeof solutions

export function useSolution(page: Page) {
  const navigate = useNavigate()

  const goNext = React.useCallback(() => {
    const solution = solutions[page]
    navigate(`/${encode(solution)}`)
  }, [page, navigate])

  return { goNext }
}

// Return the page name by encoding the solution of the preceeding puzzle
export function getRouteFor(page: Page) {
  const index = Object.keys(solutions).findIndex((solution) => solution === page)
  const key = index > 0 ? index - 1 : 0
  const route = Object.values(solutions)[key]
  return encode(route)
}
