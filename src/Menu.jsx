import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaClock,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

const recipes = {
   "19 Cozy Crockpot Recipes": {
    name: "19 Cozy Crockpot Recipes",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "250",
    time: "6 hours",
    servings: "6 servings",
    description:
      "A collection of comforting slow-cooker meals perfect for busy days, cozy evenings, and easy family dinners.",
    ingredients: [
      "1 ½ lb beef stew meat",
      "3 large potatoes, chopped",
      "3 carrots, sliced",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "3 cups beef broth",
      "2 tablespoons tomato paste",
      "1 teaspoon dried thyme",
      "1 teaspoon dried rosemary",
      "1 teaspoon salt",
      "½ teaspoon black pepper",
      "2 tablespoons olive oil",
    ],
    instructions: [
      "Season the beef with salt and black pepper.",
      "Heat olive oil in a pan and brown the beef on all sides.",
      "Add the beef, potatoes, carrots, onion, and garlic to your slow cooker.",
      "Mix the beef broth, tomato paste, thyme, and rosemary together and pour over everything.",
      "Cover and cook on LOW for 6–7 hours or HIGH for 3–4 hours.",
      "Stir before serving and adjust seasoning if necessary.",
    ],
  },

  "2": {
    name: "Best Anytime Baked Chicken Meatballs",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "800",
    time: "35 minutes",
    servings: "4 servings",
    description:
      "Tender, juicy chicken meatballs baked until golden and delicious. Perfect with pasta, rice, sandwiches, or as an appetizer.",
    ingredients: [
      "1 lb ground chicken",
      "½ cup breadcrumbs",
      "¼ cup grated Parmesan cheese",
      "1 egg",
      "2 cloves garlic, minced",
      "2 tablespoons chopped parsley",
      "1 teaspoon Italian seasoning",
      "½ teaspoon salt",
      "½ teaspoon black pepper",
      "2 tablespoons olive oil",
    ],
    instructions: [
      "Preheat your oven to 400°F (200°C).",
      "Add the ground chicken, breadcrumbs, Parmesan, egg, garlic, parsley, Italian seasoning, salt, and pepper to a bowl.",
      "Mix gently until everything is combined.",
      "Roll the mixture into small meatballs and place them on a lined baking tray.",
      "Lightly brush or spray the meatballs with olive oil.",
      "Bake for 20–25 minutes until golden and cooked through.",
      "Serve with pasta, tomato sauce, rice, or your favorite dipping sauce.",
    ],
  },

  "3": {
    name: "Ang’s Creamy Tortellini Soup",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "120",
    time: "40 minutes",
    servings: "5 servings",
    description:
      "A creamy and comforting tortellini soup loaded with vegetables, Italian seasoning, and tender cheese-filled tortellini.",
    ingredients: [
      "1 tablespoon olive oil",
      "1 lb Italian sausage",
      "1 small onion, diced",
      "3 cloves garlic, minced",
      "1 can diced tomatoes",
      "4 cups chicken broth",
      "1 package refrigerated cheese tortellini",
      "1 cup heavy cream",
      "2 cups fresh spinach",
      "1 teaspoon Italian seasoning",
      "½ teaspoon salt",
      "½ teaspoon black pepper",
      "¼ cup Parmesan cheese",
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Brown the Italian sausage, breaking it into small pieces.",
      "Add onion and cook until soft, then add garlic.",
      "Pour in the diced tomatoes and chicken broth.",
      "Add Italian seasoning, salt, and pepper.",
      "Bring the soup to a gentle boil and add the tortellini.",
      "Cook according to the tortellini package instructions.",
      "Reduce heat and stir in the heavy cream and spinach.",
      "Cook for another 2–3 minutes until the spinach wilts.",
      "Top with Parmesan and serve hot.",
    ],
  },

  "4": {
    name: "Chopped Thai-Inspired Chicken Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "147",
    time: "30 minutes",
    servings: "4 servings",
    description:
      "A crunchy, colorful chicken salad with fresh vegetables and a creamy Thai-inspired peanut dressing.",
    ingredients: [
      "2 cooked chicken breasts, shredded",
      "3 cups shredded cabbage",
      "1 carrot, grated",
      "1 red bell pepper, sliced",
      "½ cucumber, chopped",
      "½ cup cilantro",
      "¼ cup green onions",
      "¼ cup roasted peanuts",
      "½ cup peanut butter",
      "2 tablespoons lime juice",
      "1 tablespoon soy sauce",
      "1 tablespoon honey",
      "1 teaspoon sesame oil",
      "2–3 tablespoons warm water",
    ],
    instructions: [
      "Add the cabbage, carrot, bell pepper, cucumber, cilantro, and green onions to a large bowl.",
      "Add the shredded chicken and toss everything together.",
      "Whisk peanut butter, lime juice, soy sauce, honey, sesame oil, and warm water together.",
      "Add more water if needed until the dressing is smooth and pourable.",
      "Pour the dressing over the salad.",
      "Toss thoroughly and top with roasted peanuts.",
      "Serve immediately.",
    ],
  },

  "5": {
    name: "The Best Sunday Chili",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "129",
    time: "1 hour",
    servings: "6 servings",
    description:
      "A rich and hearty chili packed with ground beef, beans, tomatoes, and warm spices.",
    ingredients: [
      "1 lb ground beef",
      "1 onion, diced",
      "3 cloves garlic",
      "1 can kidney beans",
      "1 can black beans",
      "1 can diced tomatoes",
      "2 tablespoons tomato paste",
      "2 cups beef broth",
      "2 tablespoons chili powder",
      "1 teaspoon cumin",
      "1 teaspoon smoked paprika",
      "1 teaspoon salt",
      "½ teaspoon black pepper",
    ],
    instructions: [
      "Brown the ground beef in a large pot.",
      "Add onion and cook until softened.",
      "Add garlic and cook for another minute.",
      "Stir in tomato paste and spices.",
      "Add tomatoes, beans, and beef broth.",
      "Bring to a boil, then reduce heat.",
      "Simmer uncovered for 35–45 minutes.",
      "Taste and adjust the seasoning.",
      "Serve with cheese, sour cream, avocado, or tortilla chips.",
    ],
  },

  "6": {
    name: "Chicken Teriyaki Burgers with Sesame Slaw",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "104",
    time: "35 minutes",
    servings: "4 burgers",
    description:
      "Juicy chicken burgers glazed with teriyaki sauce and topped with crunchy sesame slaw.",
    ingredients: [
      "1 lb ground chicken",
      "¼ cup teriyaki sauce",
      "1 teaspoon grated ginger",
      "2 cloves garlic",
      "4 burger buns",
      "2 cups shredded cabbage",
      "1 carrot, grated",
      "1 tablespoon sesame seeds",
      "1 tablespoon mayonnaise",
      "1 tablespoon rice vinegar",
      "1 teaspoon honey",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Combine ground chicken, ginger, garlic, salt, and pepper.",
      "Form the mixture into four burger patties.",
      "Cook the patties in a lightly oiled pan for about 5–6 minutes per side.",
      "Brush the burgers generously with teriyaki sauce.",
      "Mix cabbage, carrot, sesame seeds, mayonnaise, rice vinegar, and honey.",
      "Toast the burger buns.",
      "Place each chicken burger on a bun and top with sesame slaw.",
      "Serve immediately.",
    ],
  },

  "7": {
    name: "The Best Chicken Tinga Tacos",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "197",
    time: "45 minutes",
    servings: "4 servings",
    description:
      "Tender shredded chicken simmered in a smoky tomato and chipotle sauce and tucked into warm tortillas.",
    ingredients: [
      "2 large chicken breasts",
      "1 onion, sliced",
      "3 cloves garlic",
      "1 can crushed tomatoes",
      "2 chipotle peppers in adobo",
      "1 teaspoon cumin",
      "1 teaspoon oregano",
      "½ teaspoon smoked paprika",
      "8 small corn tortillas",
      "½ cup chopped cilantro",
      "1 avocado",
      "Lime wedges",
      "Salt and pepper",
    ],
    instructions: [
      "Season the chicken with salt and pepper.",
      "Cook the chicken until completely done, then shred it.",
      "Cook the onion until soft and lightly golden.",
      "Add garlic, tomatoes, chipotle peppers, cumin, oregano, and paprika.",
      "Simmer the sauce for 10 minutes.",
      "Add the shredded chicken and stir well.",
      "Warm the tortillas.",
      "Fill each tortilla with chicken tinga.",
      "Top with cilantro, avocado, and a squeeze of lime.",
    ],
  },

  "8": {
    name: "Sheet Pan Chicken Pitas with Tzatziki",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    rating: "5.0",
    reviews: "158",
    time: "40 minutes",
    servings: "4 servings",
    description:
      "Easy roasted chicken served inside warm pitas with fresh vegetables and creamy homemade tzatziki.",
    ingredients: [
      "1 ½ lb chicken thighs",
      "2 tablespoons olive oil",
      "1 teaspoon oregano",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "½ teaspoon cumin",
      "Salt and pepper",
      "4 pita breads",
      "1 cucumber",
      "2 tomatoes",
      "½ red onion",
      "1 cup Greek yogurt",
      "1 tablespoon lemon juice",
      "1 tablespoon chopped dill",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Cut chicken into bite-sized pieces.",
      "Toss chicken with olive oil, oregano, paprika, garlic powder, cumin, salt, and pepper.",
      "Spread chicken on a sheet pan.",
      "Roast for 20–25 minutes until golden and cooked through.",
      "Mix Greek yogurt, lemon juice, cucumber, dill, salt, and pepper to make tzatziki.",
      "Warm the pita breads.",
      "Fill each pita with chicken and fresh vegetables.",
      "Serve with plenty of tzatziki.",
    ],
  },

  "9": {
    name: "Crispy Black Bean Tacos with Cilantro Lime Sauce",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "157",
    time: "30 minutes",
    servings: "4 servings",
    description:
      "Crispy vegetarian tacos filled with seasoned black beans and topped with a fresh cilantro-lime sauce.",
    ingredients: [
      "2 cans black beans",
      "1 teaspoon cumin",
      "1 teaspoon chili powder",
      "½ teaspoon garlic powder",
      "8 corn tortillas",
      "1 cup shredded lettuce",
      "½ cup diced tomato",
      "½ avocado",
      "½ cup Greek yogurt",
      "2 tablespoons lime juice",
      "¼ cup fresh cilantro",
      "Salt and pepper",
    ],
    instructions: [
      "Drain and rinse the black beans.",
      "Mash about half of the beans with cumin, chili powder, garlic powder, salt, and pepper.",
      "Heat a little oil in a skillet.",
      "Place tortillas in the pan and fill with the bean mixture.",
      "Fold the tortillas and cook until crispy on both sides.",
      "Blend or finely chop cilantro and mix with Greek yogurt and lime juice.",
      "Top the tacos with lettuce, tomato, avocado, and cilantro-lime sauce.",
      "Serve warm.",
    ],
  },

  "10": {
    name: "Miracle No Knead Bread",
    image:
      "https://pinchofyum.com/tachyon/Miracle-No-Knead-Bread-3-2.jpg?resize=1200%2C1200&zoom=1",
    rating: "4.8",
    reviews: "592",
    time: "12 hours",
    servings: "1 loaf",
    description:
      "A rustic homemade loaf with a crisp golden crust and soft, chewy center without any kneading.",
    ingredients: [
      "3 cups all-purpose flour",
      "1 ½ teaspoons salt",
      "½ teaspoon instant yeast",
      "1 ½ cups warm water",
    ],
    instructions: [
      "Mix flour, salt, and yeast in a large bowl.",
      "Pour in the warm water and stir until a sticky dough forms.",
      "Cover the bowl and let the dough rest for 10–12 hours.",
      "Heat your oven to 450°F (230°C) with a Dutch oven inside.",
      "Carefully transfer the dough onto parchment paper.",
      "Place it inside the hot Dutch oven.",
      "Cover and bake for 30 minutes.",
      "Remove the lid and bake another 10–15 minutes until deeply golden.",
      "Cool before slicing.",
    ],
  },

  "11": {
    name: "Ridiculously Good Air Fryer Chicken Breast",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "171",
    time: "25 minutes",
    servings: "4 servings",
    description:
      "Juicy, flavorful chicken breast with a beautifully seasoned outside made quickly in the air fryer.",
    ingredients: [
      "4 chicken breasts",
      "1 tablespoon olive oil",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "½ teaspoon Italian seasoning",
      "½ teaspoon salt",
      "½ teaspoon black pepper",
    ],
    instructions: [
      "Pat the chicken breasts dry.",
      "Brush them lightly with olive oil.",
      "Mix all the spices together.",
      "Coat both sides of the chicken with the seasoning.",
      "Preheat your air fryer to 375°F (190°C).",
      "Cook the chicken for approximately 18–22 minutes, flipping halfway through.",
      "Check that the thickest part reaches 165°F (74°C).",
      "Rest for 5 minutes before slicing.",
    ],
  },

  "12": {
    name: "Best S’mores Bars",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9",
    reviews: "143",
    time: "35 minutes",
    servings: "16 bars",
    description:
      "Soft, chewy dessert bars packed with chocolate and toasted marshmallow flavor.",
    ingredients: [
      "1 cup butter, softened",
      "¾ cup brown sugar",
      "½ cup white sugar",
      "2 eggs",
      "1 teaspoon vanilla",
      "2 cups all-purpose flour",
      "1 teaspoon baking powder",
      "½ teaspoon salt",
      "1 cup chocolate chips",
      "2 cups mini marshmallows",
      "1 cup crushed graham crackers",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cream the butter and sugars together.",
      "Beat in eggs and vanilla.",
      "Mix flour, baking powder, and salt in another bowl.",
      "Gradually add the dry ingredients to the wet mixture.",
      "Fold in chocolate chips and crushed graham crackers.",
      "Press the dough into a lined baking pan.",
      "Bake for about 20 minutes.",
      "Add marshmallows on top and bake another 5–8 minutes until golden.",
      "Cool completely before cutting into bars.",
    ],
  },
};


function Menu() {
  const { slug } = useParams();

  const recipe = recipes[slug];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-5">
            Recipe Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            Sorry, we couldn't find that recipe.
          </p>

          <Link
            to="/recipes"
            className="inline-block bg-[#81406f] px-7 py-3 font-bold"
          >
            BACK TO RECIPES
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
 {/* HEADER */}
      <header className="border-b border-gray-700 bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-5 py-5">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 text-[#e0a0c7] font-bold hover:text-white transition"
          >
            <FaArrowLeft />
            BACK TO RECIPES
          </Link>
        </div>
      </header>

      {/* RECIPE HERO */}
      <main>
        <section className="max-w-[1100px] mx-auto px-5 pt-10 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>

            {/* TITLE */}
            <div>
              <p className="text-[#e0a0c7] font-bold tracking-[0.25em] text-sm mb-4">
                MOST LOVED RECIPE
              </p>

              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                {recipe.name}
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-7">
                {recipe.description}
              </p>

              {/* RATING */}
              <div className="flex items-center gap-2 mb-7">
                <div className="flex text-[#e9b44c]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <span className="text-gray-300">
                  {recipe.rating} ({recipe.reviews} reviews)
                </span>
              </div>

              {/* TIME / SERVINGS */}
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#e0a0c7]" />
                  <span>{recipe.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUtensils className="text-[#e0a0c7]" />
                  <span>{recipe.servings}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INGREDIENTS + INSTRUCTIONS */}
        <section className="bg-[#202020] px-5 py-14 md:py-20">
          <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-14">
            {/* INGREDIENTS */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#e0a0c7] mb-8">
                Ingredients
              </h2>

              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-300 border-b border-gray-700 pb-3"
                  >
                    <span className="text-[#e9b44c]">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* INSTRUCTIONS */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#e0a0c7] mb-8">
                Instructions
              </h2>

              <div className="space-y-7">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#81406f] flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <p className="text-gray-300 leading-relaxed pt-1">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BACK BUTTON */}
        <section className="bg-[#111111] py-12 text-center">
          <Link
            to="/recipes"
            className="inline-block bg-[#81406f] hover:bg-[#95507f] px-8 py-4 font-bold transition"
          >
            ← BACK TO ALL RECIPES
          </Link>
        </section>
      </main>
    </div>
     
  );
}

export default Menu;