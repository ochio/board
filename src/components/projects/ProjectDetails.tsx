import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

interface Props extends RouteComponentProps<{id: string}>{

}

const ProjectDetails:React.FC = (props) => {
	const id = props.match.params.id
}