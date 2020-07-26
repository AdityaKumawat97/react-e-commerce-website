import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignInForm from '../../components/sign-in/sign-in.component'
import SignUpForm from '../../components/sign-up/sign-up.component'
export default function SignInAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
