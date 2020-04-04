import React, {useState} from 'react'

const CreateProject:React.FC = () => {
	const [title, setTitle] = useState<string>('')
	const [content, setContent] = useState<string>('')
	
	const handleTitleChange = (e:React.FormEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleContentChange = (e:React.FormEvent<HTMLInputElement>) => {
		setContent(e.target.value)
	}

	const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		console.log(title,content);
	}

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

export default CreateProject