import { useState, useEffect } from 'react'
import { fetchMeals } from '../services/mealService'
import { MealCard } from './MealCard'
import '../styles/meals.css'

export const MealsList = () => {
	const [meals, setMeals] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [searchQuery, setSearchQuery] = useState('rice')
	const [currentPage, setCurrentPage] = useState(1)
	const [pageInfo, setPageInfo] = useState(null)

	// Fetch meals when search query or page changes
	useEffect(() => {
		const loadMeals = async () => {
			setLoading(true)
			setError(null)
			try {
				const data = await fetchMeals(searchQuery, currentPage, 10)
				if (data.success) {
					setMeals(data.data.data)
					setPageInfo({
						page: data.data.page,
						totalPages: data.data.totalPages,
						totalItems: data.data.totalItems,
						currentPageItems: data.data.currentPageItems
					})
				} else {
					setError('Failed to fetch meals')
				}
			} catch (err) {
				setError(err.message || 'An error occurred')
			} finally {
				setLoading(false)
			}
		}

		loadMeals()
	}, [searchQuery, currentPage])

	const handleSearch = e => {
		const query = e.target.value.trim()
		setSearchQuery(query || 'rice')
		setCurrentPage(1)
	}

	const handlePageChange = newPage => {
		if (newPage > 0 && newPage <= pageInfo.totalPages) {
			setCurrentPage(newPage)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<div className="meals-container">
			<header className="meals-header">
				<h1>🍽️ Meal Finder</h1>
				<div className="search-section">
					<input
						type="text"
						placeholder="Search meals..."
						defaultValue={searchQuery}
						onChange={handleSearch}
						className="search-input"
						aria-label="Search for meals"
					/>
				</div>
			</header>

			{loading && <div className="loading">Loading meals...</div>}

			{error && <div className="error">Error: {error}</div>}

			{!loading && meals.length === 0 && !error && (
				<div className="no-results">No meals found. Try another search.</div>
			)}

			{meals.length > 0 && (
				<>
					<div className="meals-grid">
						{meals.map(meal => (
							<MealCard key={meal.id} meal={meal} />
						))}
					</div>

					{pageInfo && pageInfo.totalPages > 1 && (
						<div className="pagination">
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								className="pagination-btn"
							>
								← Previous
							</button>

							<div className="page-info">
								Page {pageInfo.page} of {pageInfo.totalPages} (
								{pageInfo.totalItems} meals)
							</div>

							<button
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === pageInfo.totalPages}
								className="pagination-btn"
							>
								Next →
							</button>
						</div>
					)}
				</>
			)}
		</div>
	)
}
