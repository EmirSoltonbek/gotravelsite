import React, { useEffect } from 'react'
import "./Cart.css"
import { useCart } from '../../contexts/CartContextProvider'

const Cart = () => {
    const {getCart,
        cart, deleteCartProduct, changeProductCount} = useCart()

        useEffect(() => {
            getCart();
          }, []);

  return (
    <div>
         <div className="cart">
    <h2>Корзина</h2>
    <ul className="cart-items">
        {cart?.products.map((row,index)=>(
            console.log(row),
  <li className="cart-item" key={index}>
  <div className="item-name">{row.item.location}</div>
  <input className="item-price" value={row.count} min={1} onChange={(e)=>changeProductCount(e.target.value, row.item.id)}/>
  <div className="item-price">{row.item.price} $ </div>
  <div className="item-price">{row.subPrice} $ </div>
  <button className="remove-button" onClick={()=>deleteCartProduct(row.item.id)}>Удалить</button>
</li>
        ))}
    </ul>
    <div className="total">Общая сумма: {cart.totalPrice}</div>
  </div>
    </div>
  )
}

export default Cart