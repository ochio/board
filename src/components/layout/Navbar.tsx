import React from 'react'
// import { Link } from 'react-router-dom'
import SignOutLinks from './SignedOutLinks'
import SignInLinks from './SignedInLinks'

const Navbar:React.FC = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				{/* <Link to="/" className="brand-logo">a</Link> */}
				<SignInLinks />
				<SignOutLinks />
			</div>
		</nav>
	)
}

export default Navbar