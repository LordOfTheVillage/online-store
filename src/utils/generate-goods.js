import { WORDS, URLS, COLORS, NAMES } from "./constants"

export const generateGoods = (n = 500) => {
  const goods = []

  for (let i = 0; i < n; i++) {
    goods.push(generateProduct())
  }

  return goods
}

const generateProduct = () => ({
  id: Date.now() + getRandomString(),
  name: getRandomElement(NAMES),
  description: shuffle(WORDS).join(" "),
  color: getRandomElement(COLORS),
  price: getRandomNumber(10, 9999),
  rating: getRandomNumber(1, 100),
  imageUrl: getRandomElement(URLS),
})

const getRandomString = () => Math.random().toString(36).substring(2)

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length)

  return array[index]
}
