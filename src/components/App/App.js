import "./App.css"
import React, { useEffect, useMemo, useState } from "react"
import { generateGoods } from "../../utils/generate-goods"
import { FILTERS_CONFIG, SORTINGS_CONFIG } from "../../utils/config"
import Products from "../Products/products"
import Search from "../Search/search"
import Sorts from "../Sorts/sorts"
import MultiSelect from "../MultiSelect/multiSelect"
import RangeFilter from "../RangeFilter/rangeFilter"

function App() {
  const [cards] = useState(generateGoods())
  const [sorting, setSorting] = useState()
  const [filters, setFilters] = useState([])
  const [colors] = useState(generateColors(cards))
  const debouncedFilters = useDebounce(filters, 1000)
  const debouncedSorting = useDebounce(sorting, 1000)

  const handleUpdateColorFilters = (checkedColors) => {
    setFilters({ ...filters, color: checkedColors })
  }

  const handleUpdateSearchFilters = (name) => {
    setFilters({ ...filters, name: name })
  }

  const handleUpdateRangeFilters = (range) => {
    setFilters({ ...filters, price: range })
  }

  const products = useMemo(() => {
    return cards
      .filter((card) => {
        for (let key in debouncedFilters) {
          if (
            debouncedFilters[key].length !== 0 &&
            !FILTERS_CONFIG[key](debouncedFilters[key], card[key])
          )
            return false
        }
        return true
      })
      .sort(SORTINGS_CONFIG[debouncedSorting])
  }, [cards, debouncedFilters, debouncedSorting])

  return (
    <div className="app">
      <Search updateName={handleUpdateSearchFilters}></Search>
      <Sorts sortings={SORTINGS_CONFIG} updateSorting={setSorting}></Sorts>
      <div className="body">
        <div className="filters">
          <MultiSelect
            name={"По цвету"}
            list={colors}
            updateList={handleUpdateColorFilters}
          ></MultiSelect>
          <RangeFilter updateRange={handleUpdateRangeFilters}></RangeFilter>
          <p className="counter">Количество товаров: {products.length}</p>
        </div>
        <Products cards={products}></Products>
      </div>
    </div>
  )
}

function generateColors(cards) {
  let colors = []
  ;[...cards].forEach((element) =>
    colors.indexOf(element.color) !== -1 ? null : colors.push(element.color)
  )

  return colors.sort()
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default App
