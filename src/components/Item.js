import React, {useState} from "react";

function Item({ name, category }) {

  const [cartState, toggleCart] = useState(true)

  function handleCart(){
    toggleCart(()=> !cartState)
  }
  const cart = cartState ? "" : "in-cart"
  
  const color = cartState ? "yellow" : "Fuchsia"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart} style={{background: color}}>{cartState ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
