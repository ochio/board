export interface Auth {
	// email: string
	// password: string
	// firstName: string
	// lastName: string
}

export interface Project {
	id: string
	title: string
	content: string
}

export interface Projects {
	projects: Project[]
}

export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export interface CreateProject {
	type: typeof CREATE_PROJECT
	project: Project
}
