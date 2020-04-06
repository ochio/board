import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { RouteComponentProps } from 'react-router-dom'

// import ProjectSummary from './ProjectSummary'

interface Props extends RouteComponentProps<{id: string}>{
	id: string
}

const ProjectDetails:React.FC<Props> = (props) => {
	const { project } = props;
	if (project){
			return(
				<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
					<span className="card-title">{ project.title }</span>
					<p>{ project.content }</p>
					</div>
					<div className="card-action gret lighten-4 grey-text">
							<div>Posted by {project.authorFirstName} {project.authorLastName}</div>
							<div>2nd, September, 2am</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading projects...</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null
	return {
		project: project
	}
}

export default compose<any>(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects'}
	])
)(ProjectDetails)