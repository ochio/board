import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

import { Projects } from '../../store/types'

const ProjectList:React.FC<Projects> = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects && projects.map(project => {
				return (
					<Link to={'/project/' + project.id} key={project.id}>
						<ProjectSummary project={project}/>
					</Link>
				)
			})}


		</div>
	)
}

export default ProjectList