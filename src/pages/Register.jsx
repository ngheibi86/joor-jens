import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import classes from '../assets/scss/login.scss';
// import App from '../App';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {username="", email="",password="", errors: [] };
	}

	showValidationErr(elm, msg) {
		this.setState((prevState) => ({ errors: [ ...prevState.errors, { elm, msg } ] }));
	}

	clearValidationErr(elm) {
		this.setState((prevState) => {
			let newArr = [];
			for (let err of prevState.errors) {
				if (elm != err.elm) {
					newArr.push(err);
				}
			}
			return newArr;
		});
	}

	submitRegister(e) {}

	render() {
		return (
			<div className="inner-container">
				<div className="header">Register</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" placeholder="username" className="login-input" />
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="text" name="password" placeholder="password" className="login-input" />
					</div>

					<button className="login-btn" onClick={this.submitRegister.bind(this)}>
						{' '}
						Register
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
