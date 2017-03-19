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
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleLogIn = this.handleLogIn.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentWillReceiveProps(newProps){
		if (this.props !== newProps && this.props.errors.length > 0) {
			this.props.clearErrors();
		}
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
			this.props.clearErrors();
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

	handleSignUp(e) {
		this.openModal.bind(this, 'signUp');
		this.props.clearErrors();
	}


	handleLogIn(e){
		this.openModal.bind(this, 'logIn');
		this.props.clearErrors();
	}
	navLink() {
		if (this.state.modalType === "logIn") {
			return <button onClick={this.handleSignUp} >Sign Up</button>;
		}else{
			return <button onClick={this.handleLogIn}>Log In</button>;
		}
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
					&nbsp;&nbsp;
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

export default withRouter(SessionForm);
