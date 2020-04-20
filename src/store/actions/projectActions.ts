// import {Project, CreateProject, CREATE_PROJECT} from '../types'
import {Project, CREATE_PROJECT, CREATE_PROJECT_ERROR} from '../types'

export const createProject = (project: any) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile ;
		const authorId = getState().firebase.auth.uid
		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Net',
			authorLastName: 'Ninja',
			authorId: 12345,
			createAt: new Date()
		}).then(() => {
			console.log(dispatch);
			dispatch({type: CREATE_PROJECT, project})
		}).catch((err) => {
			dispatch({type: CREATE_PROJECT_ERROR, err})
		})
	}
}