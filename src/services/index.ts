import axios from 'axios'

export const API_URL = 'http://localhost:3000'
export const DUMMY_API = 'https://dummyjson.com/auth/login'

export const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export default $api
