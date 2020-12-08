import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import classes from '../assets/scss/login.scss';
// import App from '../App';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', email: '', password: '', errors: [], pwdState: null };
	}

	showValidationErr(elm, msg) {
		this.setState((prevState) => ({ errors: [ ...prevState.errors, { elm, msg } ] }));
	}

	clearValidationErr(elm) {
		this.setState((prevState) => {
			// return prevState.errors.filter((obj) => obj.element != elm);
			let newArr = [];
			for (let err of prevState.errors) {
				if (elm != err.elm) {
					newArr.push(err);
				}
			}
			return { errors: newArr };
		});
	}

	onUsernameChange(e) {
		this.setState({ username: e.target.value });
		this.clearValidationErr('username');
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value });
		this.clearValidationErr('password');

		this.setState({ pwdState: 'weak' });
		if (e.target.value.length > 8) {
			this.setState({ pwdState: 'medium' });
		} else if (e.target.value.length > 12) {
			this.setState({ pwdState: 'strong' });
		}
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
		this.clearValidationErr('email');
	}

	submitRegister(e) {
		if (this.state.username == '') {
			this.showValidationErr('username', 'Username cannot be empty!');
		}
		if (this.state.password == '') {
			this.showValidationErr('password', 'Password cannot be empty!');
		}
		if (this.state.email == '') this.showValidationErr('email', 'Email cannot be empty!');
	}

	render() {
		let usernameErr = null,
			passwordErr = null,
			emmailErr = null;

		for (let err of this.state.errors) {
			if (err.elm == 'username') {
				usernameErr = err.msg;
			}
			if (err.elm == 'password') {
				passwordErr = err.msg;
			}
			if (err.elm == 'email') {
				emmailErr = err.msg;
			}
		}

		let pwdWeak = false,
			pwdMedium = false,
			pwdStrong = false;
		if (this.state.pwdState == 'weak') {
			pwdWeak = true;
		} else if (this.state.pwdState == 'medium') {
			pwdWeak = true;
			pwdMedium = true;
		} else if (this.state.pwdState == 'strong') {
			pwdWeak = true;
			pwdMedium = true;
			pwdStrong = true;
		}

		return (
			<div className="inner-container">
				<div className="header">Register</div>
				<div className="box">
					<div className="input-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							placeholder="username"
							className="login-input"
							onChange={this.onUsernameChange.bind(this)}
						/>
						<small className="danger-error">{usernameErr ? usernameErr : ''}</small>
					</div>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							className="login-input"
							onChange={this.onEmailChange.bind(this)}
						/>
						<small className="danger-error">{emmailErr ? emmailErr : ''}</small>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							name="password"
							placeholder="password"
							onChange={this.onPasswordChange.bind(this)}
							className="login-input"
						/>
						<small className="danger-error">{passwordErr ? passwordErr : ''}</small>
						{this.state.password && (
							<div className="password-state">
								<div className={'pwd pwd-weak' + (pwdWeak ? 'show' : '')} />
								<div className={'pwd pwd-medium' + (pwdMedium ? 'show' : '')} />
								<div className={'pwd pwd-strong' + (pwdStrong ? 'show' : '')} />
							</div>
						)}
					</div>

					<button className="login-btn" onClick={this.submitRegister.bind(this)}>
						Register
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
