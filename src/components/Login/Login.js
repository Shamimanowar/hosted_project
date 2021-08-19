import React from 'react';
import './Login.css'
import { connect } from 'react-redux';

import { tryToAuthanticate } from '../../redux/actionCreators';
import Loading from '../body/Loading';

const mapDispatchToProps = dispatch => {
    return {
        tryToAuthanticate: (email, password, mode, navigate) => dispatch(tryToAuthanticate(email, password, mode, navigate))
    }
}
const mapStateToProps = state => {
    return {
        isAuthLoading: state.isAuthLoading,
    }
}

class Login extends React.Component {
    state = {
        mode: 'Sign Up',
        inputs: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleChange = event => {
        this.setState({
            inputs: {
                ...this.state.inputs,
                [event.target.name]: event.target.value
            }
        })
    }
    handleSubmit = event => {
        // console.log(this.state.inputs)
        let email = this.state.inputs.email
        let password = this.state.inputs.password
        let confirmPassword = this.state.inputs.confirmPassword

        if (email !== '' && password !== '') {
            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert('Invalid Email')
            } else {
                if (this.state.mode === 'Login') {
                    if (password.length <= 5) {
                        alert('Password should be at least 6 character')
                    } else {
                        // console.log('Make Login Request')
                        this.props.tryToAuthanticate(email, password, this.state.mode, this.props.history)
                        this.setState({
                            ...this.state,
                            inputs: {
                                email: '',
                                password: '',
                                confirmPassword: '',
                            }
                        })
                    }
                } else {
                    if (password !== confirmPassword) {
                        alert("Password field dose'n match")
                    } else {
                        if (password.length <= 5) {
                            alert('Password should be at least 6 character')
                        } else {
                            // console.log('make sign up request here! ')
                            this.props.tryToAuthanticate(email, password, this.state.mode, this.props.history);
                            this.setState({
                                ...this.state,
                                inputs: {
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                }
                            })

                        }
                    }
                }
            }
        } else {
            alert('All of the fields should be filled up!')
        }

        event.preventDefault();
    }

    swithMoodToLogin = () => {
        this.state.mode === 'Sign Up' ? this.setState({ mode: 'Login' }) : alert('You are already in Login form!')
    }
    swithMoodToSignUp = () => {
        this.state.mode === 'Login' ? this.setState({ mode: 'Sign Up' }) : alert('You are already in Sign Up form!')
    }


    render() {

        let confirmPassword = null;
        if (this.state.mode === 'Sign Up') {
            confirmPassword = (
                <div className='textBox'>
                    <span className="fa fa-unlock"></span>
                    <input
                        name='confirmPassword'
                        value={this.state.inputs.confirmPassword}
                        onChange={(event) => this.handleChange(event)}
                        placeholder=' Confirm Password'
                        className='form-control'
                    />
                </div>
            )
        }
        return (
            <div className='col-sm-5 m-auto Lbody'>

                {this.props.isAuthLoading ? <Loading /> :
                    <div className='loginBox'>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <h3>{this.state.mode} Form</h3>
                            <div className='textBox'>
                                <span className="fa fa-at"></span>
                                <input
                                    type='text'
                                    name='email'
                                    value={this.state.inputs.email}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder=' Enter Email'
                                    className='form-control'
                                />
                            </div>

                            <div className='textBox'>
                                <span className="fa fa-lock"></span>
                                <input
                                    name='password'
                                    value={this.state.inputs.password}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder=' Password'
                                    className='form-control'
                                />
                            </div>

                            {confirmPassword}

                            <button className='button' type='submit'>{this.state.mode}</button>

                            <div className='row' style={{ listStyleType: 'none', marginLeft: '5%' }}>
                                <li onClick={this.swithMoodToSignUp} style={{ padding: '3px 10px', cursor: 'pointer' }}>Sign Up</li>
                                <li onClick={this.swithMoodToLogin} style={{ padding: '3px 10px', cursor: 'pointer' }}>Login</li>
                            </div>
                            <hr style={{ color: 'red' }} />
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);