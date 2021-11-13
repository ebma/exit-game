import React from "react"
import { useNavigate } from "react-router-dom"
import { encode } from "../../lib/utils"

interface Props {
  placeholder?: string
  label?: string
}

function SolutionBar(props: Props) {
  const { placeholder, label = "Solution" } = props

  const navigate = useNavigate()

  const [input, setInput] = React.useState("")

  const handleChange = React.useCallback((e) => setInput(e.target.value), [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault()
      event.stopPropagation()
      onSubmit()
    }
  }

  const onSubmit = React.useCallback(() => {
    try {
      const target = encode(input)
      navigate(target)
    } catch (error) {
      console.error(error)
    }
  }, [input, navigate])

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="relative">
        <input
          className="w-full pr-16 input input-primary input-bordered"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          type="text"
        />
        <button className="absolute top-0 right-0 rounded-l-none btn btn-primary" onClick={onSubmit}>
          Go
        </button>
      </div>
    </div>
  )
}

export default SolutionBar
