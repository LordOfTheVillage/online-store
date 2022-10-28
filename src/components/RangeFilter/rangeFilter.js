import React, { useState } from "react"
import "./rangeFilter.css"

const PriceFilter = (props) => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const handleChangeMin = (e) => {
    const value = e.target.value
    let minimal
    if (value[0] === "0") e.target.value = ""
    if (+value < +max || +max === 0) minimal = value === "" ? 0 : e.target.value
    else e.target.value = ""
    setMin(minimal)
    handleFilter(minimal, max)
  }
  const handleChangeMax = (e) => {
    const value = e.target.value
    let maximal
    if (value[0] === "0") e.target.value = ""
    maximal = value === "" ? 0 : e.target.value

    setMax(maximal)
    handleFilter(min, maximal)
  }
  const handleFilter = (minimal, maximal) => {
    props.updateRange({ min: minimal, max: maximal })
  }

  return (
    <div className="price-container">
      <div className="title">По цене</div>
      <div className="range">
        <input
          type="number"
          placeholder="от"
          min="0"
          onChange={handleChangeMin}
        ></input>
        <input
          type="number"
          placeholder="до"
          max="9999"
          onChange={handleChangeMax}
        ></input>
      </div>
    </div>
  )
}

export default PriceFilter
