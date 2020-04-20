import React from 'react'
import { Link } from 'react-router-dom'
import SignOutLinks from './SignedOutLinks'
import SignInLinks from './SignedInLinks'
import { connect } from 'react-redux'
import { compose } from "redux"


const Navbar:React.FC = (props) => {
	// console.log(props);
	const { auth } = props;
	const profiles = {
		profile: props.profile
	}
	const links = auth.uid ? <SignInLinks {...profiles}/> : <SignOutLinks />
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">plans</Link>
				{ links }
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	console.log(state,1);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
		users: state.firestore.users
	}
}

export default connect(mapStateToProps)(Navbar)