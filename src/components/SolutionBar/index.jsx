import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router"
import { encode } from "../../lib/utils"

function SolutionBar(props) {
  const { placeholder, label = "Solution" } = props

  const history = useHistory()

  const [input, setInput] = React.useState("")

  const handleChange = React.useCallback((e) => setInput(e.target.value), [])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      event.stopPropagation()
      onSubmit()
    }
  }

  const onSubmit = React.useCallback(() => {
    try {
      const target = encode(input)
      history.push(target)
    } catch (error) {
      console.error(error)
    }
  }, [input, history])

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

SolutionBar.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
}

export default SolutionBar
