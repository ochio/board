import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks:React.FC = () => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/signup">Sign up</NavLink>
				<NavLink to="/sginin">Log In</NavLink>
			</li>
		</ul>
	)
}

export default SignOutLinks