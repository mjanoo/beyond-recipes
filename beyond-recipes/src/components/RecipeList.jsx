// src/components/RecipeList.jsx
import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {recipes.length === 0 ? <p>No recipes found.</p> :
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      }
    </div>
  );
}

export default RecipeList;
