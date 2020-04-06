// import {Project, CreateProject, CREATE_PROJECT} from '../types'
import {Project, CREATE_PROJECT, CREATE_PROJECT_ERROR} from '../types'

export const createProject = (project: Project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Net',
			authorLastName: 'Ninja',
			authorId: 12345,
			createAt: new Date()
		}).then(() => {
			dispatch({type: CREATE_PROJECT, project})
		}).catch((err) => {
			dispatch({type: CREATE_PROJECT_ERROR, err})
		})
	}
}