import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { CartDropDownContainer, CartItemsContainer, EmptyCartMessage, StyledCustomButton } from "./cart-dropdown.styles";
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <EmptyCartMessage>Your Cart is empty</EmptyCartMessage>
            }
        </CartItemsContainer>
        <StyledCustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }
        }>GO TO CHECKOUT
            </StyledCustomButton>
    </CartDropDownContainer>)



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown)) 