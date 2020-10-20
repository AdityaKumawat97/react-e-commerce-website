import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartIconContainer, ShoppingIconF, ItemCountData } from "./cart-icon.styles";

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconF />
            <ItemCountData>{itemCount}</ItemCountData>
        </CartIconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)