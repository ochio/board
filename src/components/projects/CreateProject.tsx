import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


const CreateProject:React.FC = (props) => {
	const [title, setTitle] = useState<string>('')
	const [content, setContent] = useState<string>('')
	const state = {
		title: title,
		content: content
	}
	
	const handleTitleChange = (e:React.FormEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleContentChange = (e:React.FormEvent<HTMLInputElement>) => {
		setContent(e.target.value)
	}

	const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		props.createProjct(state)
		props.history.push('/')
	}

	const { auth } = props;
	if(!auth.uid) return <Redirect to="/signin" />

	return(
		<div className="container">
			<form onSubmit={handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Create new Project</h5>
				<div className="input-field">
					<label htmlFor="title">Titel</label>
					<input type="text" id="title" onChange={handleTitleChange}/>
				</div>
				<div className="input-field">
					<label htmlFor="content">Project Content</label>
					<textarea id="content" className="materialize-textarea" onChange={handleContentChange}></textarea>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Create</button>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProjct: (project) => dispatch(createProject(project))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)