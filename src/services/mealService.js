const API_BASE_URL = 'https://api.freeapi.app/api/v1/public/meals'

export const fetchMeals = async (query = 'rice', page = 1, limit = 10) => {
	try {
		const url = `${API_BASE_URL}?page=${page}&limit=${limit}&query=${query}`
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				accept: 'application/json'
			}
		})

		if (!response.ok) {
			throw new Error(`API error: ${response.status}`)
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error('Failed to fetch meals:', error)
		throw error
	}
}
