# 🍽️ Meal Finder - React App

A modern, responsive React application that fetches and displays meal data from the FreeAPI meals API with beautiful UI and smooth interactions.

## ✨ Features

- **Search Functionality**: Search meals by name (e.g., rice, chicken, pasta)
- **Responsive Grid Layout**: Automatically adjusts to different screen sizes
- **Meal Cards**: Display meal images, names, categories, and origins
- **Action Buttons**: Quick links to YouTube recipes and source websites
- **Pagination**: Navigate through multiple pages of meal results
- **Loading States**: Visual feedback while fetching data
- **Error Handling**: Graceful error messages for failed API calls
- **Smooth Animations**: Hover effects and transitions for better UX
- **Modern Design**: Clean, professional UI with gradient accents

## 📁 Project Structure

```
src/
├── components/
│   ├── MealCard.jsx           # Reusable meal card component
│   └── MealsList.jsx          # Main list component with search & pagination
├── services/
│   └── mealService.js         # API service for fetching meals
├── styles/
│   ├── global.css             # Global styles and base styles
│   └── meals.css              # Component-specific styles
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
└── index.css                  # Base CSS
```

## 🎯 Key Components

### MealCard.jsx

Reusable component that displays individual meal information:

- Meal image with hover zoom effect
- Meal title and meta information (category, origin)
- Action buttons (Watch Recipe, Source link)

### MealsList.jsx

Main component handling:

- Search input for meal queries
- State management for meals, loading, and errors
- API integration with useEffect hook
- Pagination controls
- Grid rendering of MealCard components

### mealService.js

Centralized API service with:

- Configurable API base URL
- Error handling
- Request headers setup
- Parameters: query, page, limit

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will open at `https://meals-listing-interface-tau.vercel.app/`

## 💻 Usage

1. **Search Meals**: Type in the search box to find meals by name
2. **View Details**: Hover over cards to see animations
3. **Watch Recipes**: Click "Watch Recipe" button to open YouTube
4. **Visit Source**: Click "Source" to view the full recipe on the website
5. **Browse Pages**: Use pagination buttons to view more results

## 🎨 Styling Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Color Scheme**:
  - Primary: Purple gradient (#667eea to #764ba2)
  - Category badges: Pink for category, Green for area
  - Buttons: Gradient primary, light gray secondary
- **Animations**:
  - Hover card lift effect
  - Image zoom on card hover
  - Smooth transitions throughout
- **Typography**: Clean, modern font stack with proper hierarchy

## 🔧 Best Practices Implemented

✅ **Component Reusability**: MealCard is reused for all meals  
✅ **Separation of Concerns**: Services separate API logic from UI  
✅ **State Management**: Proper use of useState and useEffect hooks  
✅ **Error Handling**: Try-catch blocks and user-friendly error messages  
✅ **Accessibility**: Semantic HTML, aria-labels on inputs  
✅ **Responsive Design**: Mobile-first, works on all screen sizes  
✅ **Performance**: Optimized re-renders, efficient CSS  
✅ **Code Organization**: Logical folder structure, clean imports

## 📝 API Reference

**Base URL**: `https://api.freeapi.app/api/v1/public/meals`

**Parameters**:

- `query` (string): Search term for meals
- `page` (number): Page number for pagination
- `limit` (number): Number of results per page (default: 10)

**Response Structure**:

```json
{
	"statusCode": 200,
	"data": {
		"page": 1,
		"limit": 10,
		"totalPages": 1,
		"totalItems": 2,
		"data": [
			{
				"idMeal": "52937",
				"strMeal": "Jerk chicken with rice & peas",
				"strCategory": "Chicken",
				"strArea": "Jamaican",
				"strMealThumb": "image_url",
				"strYoutube": "youtube_url",
				"strSource": "recipe_source_url"
			}
		]
	},
	"success": true
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- Lazy image loading with object-fit
- CSS Grid for efficient layout
- Minimal re-renders with proper dependencies
- No unnecessary API calls
- Optimized CSS selectors

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project!

---

**Happy Cooking!** 👨‍🍳👩‍🍳
