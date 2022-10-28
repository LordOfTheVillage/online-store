import React from "react"
import "./sorts.css"

const Sorts = (props) => {
  const handleSetSort = (sort, element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active")
      props.updateSorting("")
      return
    }

    ;[...element.parentNode.children].forEach((a) => {
      a.classList.remove("active")
    })
    element.classList.add("active")
    props.updateSorting(sort)
  }

  return (
    <div className="sorts">
      {Object.keys(props.sortings).map((sort) => {
        return (
          <button key={sort} onClick={(e) => handleSetSort(sort, e.target)}>
            {sort}
          </button>
        )
      })}
    </div>
  )
}
export default Sorts
