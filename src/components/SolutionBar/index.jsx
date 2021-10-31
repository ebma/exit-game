import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router"

function SolutionBar(props) {
  const { placeholder, label = "Solution" } = props

  const history = useHistory()

  const [input, setInput] = React.useState("")

  const handleChange = React.useCallback((e) => setInput(e.target.value), [])

  const onSubmit = React.useCallback(() => history.push(input), [input, history])

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
          placeholder={placeholder}
          type="text"
        ></input>
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
