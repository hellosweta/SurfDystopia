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
		if (this.state.modalType === 'logIn') {
			this.props.logIn({user});
		} else {
			this.props.signUp({user});
		}
		this.props.clearErrors();
	}

	navLink() {
		if (this.state.modalType === "logIn") {
			return <button onClick={this.openModal.bind(this, 'signUp')}>Sign Up</button>;
		}else{
			return <button onClick={this.openModal.bind(this, 'logIn')}>Log In</button>;
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
	render() {
		const CloseButton = () => (<button>Close modal</button>);
		return (
			<div >
				<nav className="login-signup">
					<button className="header-button" onClick={this.openModal.bind(this, 'logIn')}>Log In</button>
					&nbsp;&nbsp;
					<button className="header-button" onClick={this.openModal.bind(this, 'signUp')}>Sign Up</button>
					<button className="header-button" onClick={this.props.demo}>Demo</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					closeButton={CloseButton}
					onRequestClose={this.closeModal}
					style={ModalStyle}>

					<div>
						<div style={{display: 'inline-block', marginTop: '8px', fontSize: '15px'}}>{this.state.modalType === 'signUp' ? 'Sign Up' : 'Log In'} </div>
						<span style={{float: 'right'}}> {this.navLink()} </span>
					</div>
					<form onSubmit={this.handleSubmit} >
						{this.renderErrors()}
						<div className="login-form">
							<div>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input Input"
									placeholder="Username"
								/>
							</div>
							{this.state.modalType === 'signUp' && (
								<div>
									<input type="text"
										value={this.state.name}
										onChange={this.update("name")}
										className="login-input Input"
										placeholder="Name"
									/>
								</div>
							)}
							<div>
								<input
									type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input Input"
									placeholder="Password"
								/>
							</div>
							<button type="submit"> Submit </button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}

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



export default withRouter(SessionForm);
