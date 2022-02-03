import React, { useState } from "react"

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  const cartText = addToCart ? "Remove from Cart" : "Add to Cart"

  const cartClassName = addToCart ? "in-cart" : ""

  const handleClickCart = (e) => {
    setAddToCart((addToCart) => !addToCart)
  }

  return (
    <li className={cartClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClickCart} className="add">
        {cartText}
      </button>
    </li>
  )
}

export default Item
