import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from "redux"

// import { Projects } from '../../store/types'
import { Redirect } from 'react-router-dom'

const Dashboard:React.FC = (props) => {
	const { projects, auth } = props
	if (!auth.uid) return <Redirect to="/signin" />
	return(
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList projects={projects}/>
				</div>
				<div className="col s12 m5 offset-m1">
					<Notification />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth
	}
}

export default compose<any>(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(Dashboard)
