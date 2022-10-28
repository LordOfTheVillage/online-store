import React, { useEffect } from "react"
import Product from "../Product/product"
import "./products.css"

const Products = ({ cards }) => {
  useEffect(() => {
    const div = document.querySelector(".no-data")
    if (cards.length !== 0) div.classList.add("none")
    else div.classList.remove("none")
  }, [cards.length])

  return (
    <div className="cards">
      <div className="no-data">По вашему запросу ничего не найдено</div>
      {cards.map((e) => (
        <Product
          key={e.id}
          name={e.name}
          description={e.description}
          color={e.color}
          price={e.price}
          rating={e.rating}
          imageUrl={e.imageUrl}
        ></Product>
      ))}
    </div>
  )
}

export default Products
