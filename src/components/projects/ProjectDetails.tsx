import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// import ProjectSummary from './ProjectSummary'

interface Props extends RouteComponentProps<{id: string}>{
	id: string
}

const ProjectDetails:React.FC<Props> = (props) => {
	const id = props.match.params.id;
	return(
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consectetur, adipisci in, corrupti corporis omnis, maxime assumenda nisi expedita eius libero tempora totam officiis. Tenetur repellat accusamus excepturi aspernatur sint?</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
						<div>Posted by The Net Ninja</div>
						<div>2nd, September, 2am</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails