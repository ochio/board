import React, {useState} from 'react'

const SignIn:React.FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPass] = useState<string>('')

	const handleEmailChange = (e:React.FormEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePassChange = (e:React.FormEvent<HTMLInputElement>) => {
		setPass(e.target.value)
	}

	const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(email,password);
	}

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
				</div>
			</form>
		</div>
	)

}

export default SignIn