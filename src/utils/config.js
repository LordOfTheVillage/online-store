export const FILTERS_CONFIG = {
  color: (color, sec) => {
    return color.includes(sec)
  },
  name: (name, src) => {
    return src.toLowerCase().includes(name.trim().toLowerCase())
  },
  price: (range, src) => {
    return (
      (range["min"] === 0 || range["min"] === ""
        ? true
        : src >= range["min"]) &&
      (range["max"] === 0 || range["max"] === "" ? true : src <= range["max"])
    )
  },
}

export const SORTINGS_CONFIG = {
  "Сначала дешевые": (left, right) => left.price - right.price,
  "Сначала дорогие": (left, right) => right.price - left.price,
  "Сначала популярные": (left, right) => right.rating - left.rating,
}
