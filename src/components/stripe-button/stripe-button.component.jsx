import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr'

    const onToken = token => {
        console.log(token)
        alert("dummy payment successfull")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name='AK Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/QaG.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
