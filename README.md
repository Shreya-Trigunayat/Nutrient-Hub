# Nutrient-Hub

Nutrient-Hub is a web application that allows users to explore food products using the [OpenFoodFacts API](https://world.openfoodfacts.org/). Users can search, filter, and sort food products and view detailed information about each product.

## Features

### 1. Homepage
- Displays a list of food products fetched from the OpenFoodFacts API.
- Each product card includes:
  - Product name
  - Image
  - Category
  - Ingredients (if available)
  - Nutrition Grade (a, b, c, d, e)
- Pagination using infinite scroll or "load more" functionality.

### 2. Search Functionality
- Search for food products by name.
- Search results are dynamically filtered as per the query.

### 3. Barcode Search Functionality
- Allows users to search for products by barcode.

### 4. Category Filter
- Dropdown filter for selecting product categories.
- Categories are dynamically fetched from the OpenFoodFacts API.

### 5. Sort Functionality
- Sorting options:
  - Product Name (A-Z, Z-A)
  - Nutrition Grade (ascending/descending)

### 6. Product Detail Page
- Displays detailed information about a product, including:
  - Product image
  - Full list of ingredients
  - Nutritional values (energy, fat, carbs, proteins, etc.)

### 7. Responsive Design
- Fully responsive design for seamless usage on mobile and desktop screens.

---

## Technologies Used

### Frontend
- **ReactJS:** Component-based architecture for building the UI.
- **TailwindCSS:** Styling framework for designing responsive and modern layouts.

### API Integration
- **OpenFoodFacts API:** To fetch product data, categories, and details.

### State Management
- **React Context API:** For managing global states like filters, sort orders, and product data.

---

## File Structure

### `src/components`
- **`Loader.js:`** Displays a loading spinner when data is being fetched.
- **`Navbar.js:`** Contains the navigation bar with the application's title and link to the homepage.
- **`ProductCard.js:`** Displays product details in a card layout.
- **`ProductList.js:`** Maps and displays a list of `ProductCard` components.

### `src/context`
- **`ProductContext.js:`** Provides global states and logic for fetching products, filtering, sorting, and handling categories.

### `src/pages`
- **`HomePage.js:`** The main page of the application. Includes search, filter, sort, and product listing functionality.
- **`ProductDetails.js:`** Displays detailed information about a specific product, including its image, ingredients, nutritional values, and labels.

---

## API Endpoints

1. **Get Products by Category:** - https://world.openfoodfacts.org/category/{category}.json
2. **Search Products by Name:** - https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true 
3. **Get Product Details by Barcode:** - https://world.openfoodfacts.org/api/v0/product/{barcode}.json


---

## How to Run the Project

### Prerequisites
- Node.js installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Shreya-Trigunayat/Nutrient-Hub
2. Navigate to the project directory:
   ```bash
   cd nutrienthub
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
5. Open the application in your browser at http://localhost:3000.
   
## Nutrient-Hub

![Screenshot 2025-01-10 000721](https://github.com/user-attachments/assets/3d19e1c8-2d35-477d-a5cd-7c3d437cc974)

![Screenshot 2025-01-10 000800](https://github.com/user-attachments/assets/5565948d-84ca-4ff6-8370-51f064db4557)

![Screenshot 2025-01-10 000902](https://github.com/user-attachments/assets/64f8a455-f92f-42a2-b35b-afb6c4628a1f)




