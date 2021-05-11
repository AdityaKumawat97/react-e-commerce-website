import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 1;
    box-shadow: 0px 7px 16px 7px rgba(0,0,0,0.5);
`

export const CartItemsContainer = styled.div`
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        `


export const EmptyCartMessage = styled.span`
        font-size: 25px;
        margin: 50px auto;
`

export const StyledCustomButton = styled(CustomButton)`
margin-top: auto;
`