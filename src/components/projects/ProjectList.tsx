import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Projects } from '../../store/types'

const ProjectList:React.FC<Projects> = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects && projects.map(project => {
				return (
					<ProjectSummary project={project} key={project.id}/>
				)
			})}


		</div>
	)
}

export default ProjectList