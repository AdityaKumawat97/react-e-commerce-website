import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({ children, ...otherProps }) {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}
