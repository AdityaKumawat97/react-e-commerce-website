import React from 'react'
import './cart-item.styles.scss'
function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity}*${price}</span>
            </div>
        </div>
    )
}

export default CartItem
