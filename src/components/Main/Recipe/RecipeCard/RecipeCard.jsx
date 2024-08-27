import './RecipeCard.css'

// eslint-disable-next-line react/prop-types
export default function RecipeCard({img, recipeTitle, description}) {
  return (
    <div className="recipe_card">
    <div className="recipe_box">
       <img src={img} alt="bread" />
    </div>

    <div>
       <h3 className="recipe_title">{recipeTitle}</h3>
       <p className="recipe_description">{description}</p>
    </div>
    </div>
  )
}
