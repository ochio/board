import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notifications'

const Dashboard:React.FC = () => {
	return(
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notification />
				</div>
			</div>
		</div>
	)
}

export default Dashboard