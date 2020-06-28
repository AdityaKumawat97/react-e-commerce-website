import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export default class signIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: "", password: "" })
    }
    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <FormInput type="email" label="Email" name="email" value={this.state.email} required handleChange={e => this.handleChange(e)} />
                    {/* <label >Email</label> */}
                    <FormInput type="password" label="Password" name="password" value={this.state.password} required handleChange={e => this.handleChange(e)} />
                    {/* <label>Password</label> */}
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit From">Sign-In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign-In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
