import React, {useState} from 'react'

const SignUp:React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPass] = useState<string>('')
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	let state = {
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName
	}

	const handleEmailChange = (e:React.FormEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePassChange = (e:React.FormEvent<HTMLInputElement>) => {
		setPass(e.target.value)
	}

	const handleFirstNameChange = (e:React.FormEvent<HTMLInputElement>) => {
		setFirstName(e.target.value)
	}

	const handleLastNameChange = (e:React.FormEvent<HTMLInputElement>) => {
		setLastName(e.target.value)
	}

	const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(state);
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Sign Up</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleEmailChange}/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={handlePassChange}/>
				</div>
				<div className="input-field">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" onChange={handleFirstNameChange}/>
				</div>
				<div className="input-field">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" onChange={handleLastNameChange}/>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Sign up</button>
				</div>
			</form>
		</div>
	)
}

export default SignUp