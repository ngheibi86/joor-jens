import React, { Component } from 'react';
import Register from './Register';
// import ReactDOM from "react-dom";
import classes from '../assets/scss/login.scss';
// import App from '../App';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoginOpen: true, isRegisterOpen: false };
	}

	showLoginBox() {
		this.setState({ isLoginOpen: true, isRegisterOpen: false });
	}

	showRegisterBox() {
		this.setState({ isRegisterOpen: true, isLoginOpen: false });
	}

	submitLogin(e) {}

	render() {
		return (
			<div className="root-container">
				<div className="box-controller">
                    <div className={"controller" + (this.state.isLoginOpen ? "selected-tab" : "")}
                     onClick={this.showLoginBox.bind(this)}>
						Login
					</div>

                    <div className={"controller"  + (this.state.isRegisterOpen ? "selected-tab" : "")} 
                    onClick={this.showRegisterBox.bind(this)}>
						Register
					</div>
				</div>
				<div className={"box-container"}>
					{this.state.isLoginOpen && (
						<div className="inner-container">
							<div className="header">Login</div>
							<div className="box">
								<div className="input-group">
									<label htmlFor="username" >Username</label>
									<input type="text" name="username" placeholder="username" className="login-input" />
								</div>

								<div className="input-group">
									<label htmlFor="password" >Password</label>
									<input type="text" name="password" placeholder="password" className="login-input" />
								</div>

								<button className="login-btn" onClick={this.submitLogin.bind(this)}>
									{' '}
									Login
								</button>
							</div>
						</div>
					)}
					{this.state.isRegisterOpen && <Register />}
				</div>
			</div>
		);
	}
}

export default Login;
