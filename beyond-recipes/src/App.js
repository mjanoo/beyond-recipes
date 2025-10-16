import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients: query,
            number: 10,
            apiKey: 'YOUR_SPOONACULAR_API_KEY'
          }
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching recipes");
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
