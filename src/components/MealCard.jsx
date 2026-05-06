export const MealCard = ({ meal }) => {
	const { strMeal, strMealThumb, strCategory, strArea, strYoutube, strSource } =
		meal

	return (
		<div className="meal-card">
			<div className="meal-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="meal-content">
				<h3 className="meal-title">{strMeal}</h3>
				<div className="meal-meta">
					<span className="meal-category">{strCategory}</span>
					<span className="meal-area">{strArea}</span>
				</div>
				<div className="meal-actions">
					{strYoutube && (
						<a
							href={strYoutube}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
						>
							Watch Recipe
						</a>
					)}
					{strSource && (
						<a
							href={strSource}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-secondary"
						>
							Source
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
