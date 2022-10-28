import "./product.css"
import React from "react"

const Product = (props) => {
  return (
    <div className="card" id={props.id}>
      <img src={"images/" + props.imageUrl} alt=""></img>
      <div className="text">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <ul className="information">
          <li>
            <p className="bold">Цвет:</p>
            <p>{props.color}</p>
          </li>
          <li>
            <p className="bold">Цена:</p>
            <p>{props.price + " BYN"}</p>
          </li>
          <li>
            <p className="bold">Рейтинг:</p>
            <p>{props.rating}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Product
