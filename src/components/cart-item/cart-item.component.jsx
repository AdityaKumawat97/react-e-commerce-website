import React from 'react'
import { CartItemContainer, ItemDetailsContainer, NameSpanner, QuantitySpanner, ImageHolder } from "./cart-item.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <CartItemContainer>
            <ImageHolder src={imageUrl} alt={name} />
            <ItemDetailsContainer>
                <NameSpanner>{name}</NameSpanner>
                <QuantitySpanner>{quantity}* ${price}</QuantitySpanner>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem
