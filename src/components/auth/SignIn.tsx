import React, {useState} from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn:React.FC = (props) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPass] = useState<string>('')
	let state = {
		email: email,
		password: password
	}

	const handleEmailChange = (e:React.FormEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePassChange = (e:React.FormEvent<HTMLInputElement>) => {
		setPass(e.target.value)
	}

	const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		props.signIn(state)
		console.log(email,password);
	}

	const { authError, auth } = props
	if (auth.uid) return <Redirect to="/" />

	return(
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Sign In</h5>
				<div className="input-filed">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleEmailChange}/>
				</div>
				<div className="input-filed">
					<label htmlFor="password">password</label>
					<input type="password" id="password" onChange={handlePassChange}/>
				</div>
				<div className="input-fild">
					<button className="btn pink lighten-1 z-depth-0">Login</button>
					<div className="red-text center">
							{ authError ? <p>{authError}</p> : null }
					</div>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)