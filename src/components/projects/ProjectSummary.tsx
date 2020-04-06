import React from 'react'
import { Projects } from '../../store/types'

const ProjectSummary:React.FC<Projects> = ({ project }) => {
	return(
		<div className="card z-depth-0 project-smmary">
			<div className="card-content grey-text text-darken-3">
			<span className="card-title">{project.title}</span>
				<p>Posted by the Net Ninja</p>
				<p className="grey-text">3rd September</p>
			</div>
		</div>
	)
}

export default ProjectSummary