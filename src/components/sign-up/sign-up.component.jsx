import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("passwords do not  match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Signup with your email and password</span>

                <form action="" onSubmit={this.handleSubmit} className="sign-up-form">

                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label="Email-Id"
                        required
                    />
                    <FormInput type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SignUp</CustomButton>

                </form>
            </div>
        )
    }
}
