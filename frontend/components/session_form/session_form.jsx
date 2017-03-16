import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: false,
			modalType: 'logIn'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		// this.props.processForm({user});
		if (this.state.modalType === 'login') {
			this.props.logIn({user});
		} else {
			this.props.signUp({user});
		}
		this.props.clearErrors();
	}

	navLink() {
		if (this.state.modalType === "logIn") {
			return <button onClick={this.openModal.bind(this, 'signup')}>sign up instead!</button>;
		}else{
			return <button onClick={this.openModal.bind(this, 'login')}>Login instead!</button>;
		}
		// if (this.props.formType === "login") {
		// 	return <Link to="/signup">Sign Up</Link>;
		// } else {
		// 	return <Link to="/login">Already have an account?</Link>;
		// }
	}

	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	// render() {
	// 	return (
	// 		<div className="login-form-container">
	// 			<form onSubmit={this.handleSubmit} className="login-form-box">
	//
	// 				<br/>
	// 				{this.props.formType} or {this.navLink()}
	// 				{this.renderErrors()}
	// 				<div className="login-form">
	// 					<br/>
	// 					<label> Username:
	// 						<input type="text"
	// 							value={this.state.username}
	// 							onChange={this.update("username")}
	// 							className="login-input" />
	// 					</label>
	// 					<label> Name:
	// 						<input type="text"
	// 							value={this.state.name}
	// 							onChange={this.update("name")}
	// 							className="login-input" />
	// 					</label>
	// 					<br/>
	// 					<label> Password:
	// 						<input type="password"
	// 							value={this.state.password}
	// 							onChange={this.update("password")}
	// 							className="login-input" />
	// 					</label>
	// 					<br/>
	// 					<input type="submit" value="Submit" />
	// 				</div>
	// 			</form>
	// 		</div>
	// 	);
	// }
	render() {
		const CloseButton = () => (<button>Close modal</button>);
		return (
			<div >
				<nav className="login-signup">
					<button onClick={this.openModal.bind(this, 'login')}>Login</button>
					&nbsp;or&nbsp;
					<button onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					closeButton={CloseButton}
					onRequestClose={this.closeModal}
					style={ModalStyle}>

					<br/>
					Please {this.state.modalType} or {this.navLink()}
					<form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
								<label> Name:
									<input type="text"
										value={this.state.name}
										onChange={this.update("name")}
										className="login-input" />
								</label>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
