import recipe_burger from '../../../assets/recipe-burger.png'
import recipe_bread from '../../../assets/recipe-bread.png'
import recipe_cheese from '../../../assets/recipe-cheese.png'
import recipe_meat from '../../../assets/recipe-meat.png'
import recipe_vegetable from '../../../assets/recipe-vegetable.png'
import recipe_sauces from '../../../assets/recipe-sauces.png'
import RecipeCard from './RecipeCard/RecipeCard'
import SectionTitle from '../../../minorComponents/SectionTitle/SectionTitle'

export default function Recipe() {
  return (
    <section className="recipe section" id="recipe">
    <SectionTitle title="Our Secret Recipe" />

    <div className="recipe_container container grid">
       <div className="recipe_image">
          <img src={recipe_burger} alt="burger" className="recipe_img"  />
       </div>

       <div className="recipe_data">
          {/* <!-- Bread start --> */}
          <RecipeCard img={recipe_bread} recipeTitle="Bread" description="Fresh bread, baked to perfection."/>
          {/* <!-- Bread end --> */}

          {/* <!-- Chease start --> */}
          <RecipeCard img={recipe_cheese} recipeTitle="Cheese" description="Cheese for a fanrastic and healthy future."/>
          {/* <!-- Chease end --> */}

          {/* <!-- Meat start --> */}
          <RecipeCard img={recipe_meat} recipeTitle="Meat" description="100% pure beef, big and meaty."/>
          {/* <!-- Meat end --> */}

          {/* <!-- Vegetable start --> */}
          <RecipeCard img={recipe_vegetable} recipeTitle="Vegetable" description="Vegetables full of the essence of nature and organic."/>
          {/* <!-- Vegetable end --> */}

          {/* <!-- Sauces start --> */}
          <RecipeCard img={recipe_sauces} recipeTitle="Sauces" description="Fresh sauces, delicious for the palate."/>
          {/* <!-- Sauces end --> */}
       </div>
    </div>
    </section>
  )
}
