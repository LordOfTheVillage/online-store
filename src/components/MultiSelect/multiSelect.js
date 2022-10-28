import React, { useState } from "react"
import "./multiSelect.css"

const MultiSelect = (props) => {
  const [checkedlist, setCheckedlist] = useState([])

  const handleSelectItems = ({ target }) => {
    const text = target.parentNode.lastChild.innerText
    const hasElement = checkedlist.includes(text)

    if (hasElement) target.checked = false
    else target.checked = true

    const list = hasElement
      ? checkedlist.filter((item) => item !== text)
      : [text, ...checkedlist]

    setCheckedlist(list)
    props.updateList(list)
  }

  return (
    <div className="color-filter">
      <div className="title">{props.name}</div>
      <div className="checkboxes">
        {props.list.map((item) => (
          <label key={item}>
            <input type="checkbox" onChange={handleSelectItems}></input>
            <p>{item}</p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default MultiSelect
