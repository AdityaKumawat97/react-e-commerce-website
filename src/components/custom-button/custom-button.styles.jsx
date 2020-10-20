import styled, { css } from 'styled-components'

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return GoogleSignInStyles
    }
    return props.inverted ? InvertedButtonStyles : ButtonStyles
}
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`
const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
        &:hover {
            background-color: black;
            color: white;
            border: none;
    }`
const GoogleSignInStyles = css`
        background-color: #4285f4;
        color: white;

        &:hover {
            background-color: white;
            border: 1px solid #4285f4;
            color:black;
        }
`
const ButtonStyles = css`
background-color: black;
color: white;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.3s ease;
}
`


