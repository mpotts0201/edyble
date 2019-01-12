import React, { Component } from 'react';

class Login extends Component {

    state = {
        email: 'murphy@potts.com',
        password: 'password'
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.email, this.state.password)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.signIn}>
                    <div>
                        <label>Email: </label>
                        <input name='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}

export default Login;