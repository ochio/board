import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from "redux"

import { Projects } from '../../store/types'
import { store } from '../../index'

type AllState = ReturnType<typeof store.getState>

const Dashboard:React.FC = (props: Projects) => {
	const { projects } = props
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

const mapStateToProps = (state: AllState) => {
	return {
		projects: state.firestore.ordered.projects
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(Dashboard)
