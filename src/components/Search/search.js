import "./search.css"
import React, { useState } from "react"

const Search = (props) => {
  const [name, setName] = useState("")

  const handleSetName = ({ target: { value } }) => {
    const searchName = value.trim()

    setName(searchName)
    props.updateName(searchName)
  }

  return (
    <div className="search-bar">
      <input
        type={"text"}
        value={name}
        onChange={handleSetName}
        placeholder="Поиск"
      ></input>
      <img src="icons/search.png" className="icon" alt=""></img>
    </div>
  )
}

export default Search
