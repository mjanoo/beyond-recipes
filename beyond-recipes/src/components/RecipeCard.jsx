// src/components/RecipeCard.jsx
import React from 'react';

function RecipeCard({ recipe }) {
  const handleViewDetails = () => {
    // Open the recipe on Spoonacular in a new tab
    const recipeUrl = `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-')}-${recipe.id}`;
    window.open(recipeUrl, '_blank');
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        width: '220px',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
      }}
      className="recipe-card"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3 style={{ fontSize: '1rem', margin: '10px 0', color: '#333' }}>{recipe.title}</h3>

      <button
        onClick={handleViewDetails}
        style={{
          backgroundColor: '#ff6f61',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
      >
        View Details
      </button>
    </div>
  );
}

export default RecipeCard;
