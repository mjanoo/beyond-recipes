// src/components/RecipeCard.jsx
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: '5px' }} />
      <h3>{recipe.title}</h3>
      <button style={{ backgroundColor: '#ff6f61', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>View Details</button>
    </div>
  );
}

export default RecipeCard;
