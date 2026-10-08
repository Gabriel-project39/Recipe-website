import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Food = () => {
  const { id } = useParams();

  // =========================================================
  // ALL RECIPES
  // =========================================================

  const recipes = {

    // =======================================================
    // COZY CROCKPOT
    // =======================================================

    "cozy-crockpot": {
      title: "19 Cozy Crockpot Recipes",
      image: "https://pinchofyum.com/tachyon/Cozy-Crockpot-Recipes-02-scaled.jpg?fit=300%2C300&zoom=1",
      description:
        "Hearty soups, saucy pastas, big-flavor chilis, and tender shredded meats that basically make themselves. These cozy crockpot recipes deliver!",
      prepTime: "15 minutes",
      cookTime: "4-6 hours",
      servings: "6 servings",

      ingredients: [
        "1 lb boneless chicken or beef",
        "1 medium onion, chopped",
        "3 cloves garlic, minced",
        "2 carrots, sliced",
        "2 cups chicken or vegetable broth",
        "1 can diced tomatoes",
        "1 teaspoon salt",
        "1/2 teaspoon black pepper",
        "1 teaspoon dried Italian herbs",
        "2 tablespoons olive oil",
        "Fresh parsley for serving",
      ],

      instructions: [
        "Add the meat, onion, garlic, carrots, broth, tomatoes, salt, pepper, herbs, and olive oil to your slow cooker.",
        "Stir everything together until evenly combined.",
        "Cover and cook on LOW for 6-8 hours or HIGH for 4-6 hours.",
        "Check that the meat is tender and cooked through.",
        "Taste and adjust the seasoning.",
        "Serve warm with fresh parsley and your favorite side.",
      ],
    },

    // =======================================================
    // DETOX LENTIL SOUP
    // =======================================================

    "detox-lentil-soup": {
      title: "The Best Detox Crockpot Lentil Soup",
      image: "https://pinchofyum.com/tachyon/Crockpot-Lentil-Soup-3-Homepage.jpg?fit=200%2C300&zoom=1",
      description:
        "A clean and simple lentil soup made with onions, garlic, carrots, olive oil, squash, and lentils.",
      prepTime: "15 minutes",
      cookTime: "5-6 hours",
      servings: "6 servings",

      ingredients: [
        "1 cup green or brown lentils",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "3 carrots, sliced",
        "2 cups diced squash",
        "4 cups vegetable broth",
        "2 cups water",
        "2 tablespoons olive oil",
        "1 teaspoon cumin",
        "1 teaspoon salt",
        "1/2 teaspoon black pepper",
        "2 cups chopped kale",
        "Fresh lemon juice",
      ],

      instructions: [
        "Rinse the lentils thoroughly under cold water.",
        "Add the lentils, onion, garlic, carrots, squash, broth, water, olive oil, cumin, salt, and pepper to the crockpot.",
        "Cover and cook on LOW for 5-6 hours.",
        "Stir in the chopped kale during the final 15 minutes.",
        "Taste and adjust the seasoning.",
        "Finish with fresh lemon juice and serve hot.",
      ],
    },

    // =======================================================
    // GREEN SAUCE
    // =======================================================

    "green-sauce": {
      title: "5 Minute Magic Green Sauce",
      image: "https://pinchofyum.com/tachyon/green-sauce-6.jpg?fit=185%2C300&zoom=1",
      description:
        "A bright, creamy and fresh green sauce made with avocado, olive oil, cilantro, lime, garlic, and parsley.",
      prepTime: "5 minutes",
      cookTime: "0 minutes",
      servings: "About 1 cup",

      ingredients: [
        "1 ripe avocado",
        "1/2 cup fresh cilantro",
        "1/4 cup fresh parsley",
        "1 clove garlic",
        "Juice of 1 lime",
        "2 tablespoons olive oil",
        "1/4 cup water",
        "1/2 teaspoon salt",
        "Black pepper to taste",
      ],

      instructions: [
        "Add the avocado, cilantro, parsley, garlic, lime juice, olive oil, water, salt, and pepper to a blender.",
        "Blend until completely smooth and creamy.",
        "Add a little more water if the sauce is too thick.",
        "Taste and adjust the lime juice and salt.",
        "Serve immediately over vegetables, rice, noodles, chicken, tacos, or your favorite meal.",
      ],
    },

    // =======================================================
    // THAI SWEET POTATO CURRY
    // =======================================================

    "thai-sweet-potato-curry": {
      title: "Creamy Thai Sweet Potato Curry",
      image: "/recipes/thai-sweet-potato-curry.jpg",
      description:
        "A creamy, comforting Thai sweet potato curry packed with vegetables and warming spices.",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
      servings: "4 servings",

      ingredients: [
        "2 large sweet potatoes, peeled and cubed",
        "1 tablespoon olive oil",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "2 tablespoons red curry paste",
        "1 can coconut milk",
        "1 cup vegetable broth",
        "1 tablespoon soy sauce",
        "1 teaspoon fresh ginger",
        "1 cup spinach",
        "Fresh cilantro",
        "Cooked rice for serving",
      ],

      instructions: [
        "Heat the oil in a large pot over medium heat.",
        "Add the onion and cook until soft.",
        "Add the garlic, ginger, and curry paste and cook for about one minute.",
        "Add the sweet potatoes, coconut milk, broth, and soy sauce.",
        "Cover and simmer for about 20-25 minutes until the sweet potatoes are tender.",
        "Stir in the spinach and cook until wilted.",
        "Serve over rice with fresh cilantro.",
      ],
    },

    // =======================================================
    // SESAME NOODLE BOWLS
    // =======================================================

    "sesame-noodle-bowls": {
      title: "Sesame Noodle Bowls",
      image: "/recipes/sesame-noodle-bowls.jpg",
      description:
        "Fork-twirly noodles with a creamy sesame sauce, browned chicken, and fresh vegetables.",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: "4 servings",

      ingredients: [
        "8 oz noodles",
        "2 chicken breasts",
        "1 tablespoon sesame oil",
        "1 tablespoon soy sauce",
        "2 tablespoons tahini",
        "1 tablespoon rice vinegar",
        "1 tablespoon honey",
        "1 clove garlic",
        "1 cucumber",
        "1 cup shredded carrots",
        "1 cup broccoli",
        "Sesame seeds",
      ],

      instructions: [
        "Cook the noodles according to the package instructions.",
        "Season and cook the chicken until golden and fully cooked.",
        "Whisk together tahini, sesame oil, soy sauce, rice vinegar, honey, and garlic.",
        "Toss the cooked noodles with the sesame sauce.",
        "Slice the chicken.",
        "Divide noodles between bowls and top with chicken and vegetables.",
        "Finish with sesame seeds.",
      ],
    },

    // =======================================================
    // BREAKFAST SANDWICHES
    // =======================================================

    "breakfast-sandwiches": {
      title: "Meal Prep Breakfast Sandwiches",
      image: "/recipes/breakfast-sandwiches.jpg",
      description:
        "Easy freezer-friendly breakfast sandwiches made with eggs, bacon, spinach, English muffins, and cheese.",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: "6 sandwiches",

      ingredients: [
        "6 English muffins",
        "6 eggs",
        "6 slices bacon",
        "1 cup fresh spinach",
        "6 slices cheddar cheese",
        "1 tablespoon butter",
        "Salt",
        "Black pepper",
      ],

      instructions: [
        "Cook the bacon until crisp and drain on paper towels.",
        "Whisk the eggs with salt and pepper.",
        "Cook the spinach briefly in a skillet.",
        "Cook the eggs in a greased baking dish until set.",
        "Cut the egg mixture into six portions.",
        "Build each sandwich with egg, spinach, bacon, and cheese.",
        "Wrap individually and refrigerate or freeze.",
        "Reheat before serving.",
      ],
    },

    // =======================================================
    // CAULIFLOWER FRIED RICE
    // =======================================================

    "cauliflower-fried-rice": {
      title: "Cauliflower Fried Rice with Crispy Tofu",
      image: "/recipes/cauliflower-fried-rice.jpg",
      description:
        "Healthy cauliflower fried rice with crispy tofu, carrots, onions, garlic, eggs, and sesame oil.",
      prepTime: "15 minutes",
      cookTime: "25 minutes",
      servings: "4 servings",

      ingredients: [
        "1 large head cauliflower",
        "1 block firm tofu",
        "2 carrots",
        "1/2 onion",
        "2 cloves garlic",
        "2 eggs",
        "2 tablespoons sesame oil",
        "2 tablespoons soy sauce",
        "1 tablespoon olive oil",
        "Green onions",
        "Salt and pepper",
      ],

      instructions: [
        "Cut the tofu into cubes and cook until golden and crispy.",
        "Break the cauliflower into florets and pulse until rice-sized.",
        "Cook the onion, carrots, and garlic in sesame oil.",
        "Add the cauliflower rice and cook until tender.",
        "Push the vegetables to one side and scramble the eggs.",
        "Mix everything together and add soy sauce.",
        "Add the crispy tofu.",
        "Finish with green onions and serve.",
      ],
    },

    // =======================================================
    // VEGETARIAN SHEPHERD'S PIE
    // =======================================================

    "vegetarian-shepherds-pie": {
      title: "Vegetarian Shepherd’s Pie",
      image: "/recipes/vegetarian-shepherds-pie.jpg",
      description:
        "Saucy mushrooms, carrots, and peas topped with creamy mashed potatoes for the ultimate vegetarian comfort food.",
      prepTime: "25 minutes",
      cookTime: "40 minutes",
      servings: "6 servings",

      ingredients: [
        "2 lbs potatoes",
        "2 tablespoons butter",
        "1/2 cup milk",
        "2 cups mushrooms",
        "2 carrots",
        "1 cup peas",
        "1 onion",
        "2 cloves garlic",
        "2 tablespoons tomato paste",
        "2 cups vegetable broth",
        "1 tablespoon flour",
        "Salt and pepper",
      ],

      instructions: [
        "Boil the potatoes until tender.",
        "Mash the potatoes with butter, milk, salt, and pepper.",
        "Cook the onion, carrots, mushrooms, and garlic in a large skillet.",
        "Add the tomato paste and flour.",
        "Slowly add the vegetable broth and cook until thickened.",
        "Stir in the peas.",
        "Transfer the filling to a baking dish.",
        "Spread the mashed potatoes over the top.",
        "Bake at 400°F until golden and bubbling.",
      ],
    },

    // =======================================================
    // LO MEIN
    // =======================================================

    "lo-mein": {
      title: "15 Minute Lo Mein",
      image: "/recipes/lo-mein.jpg",
      description:
        "Quick and delicious lo mein made with noodles, vegetables, soy sauce, sesame oil, and a touch of sweetness.",
      prepTime: "5 minutes",
      cookTime: "10 minutes",
      servings: "4 servings",

      ingredients: [
        "8 oz ramen or spaghetti noodles",
        "2 cups mixed vegetables",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 teaspoon sugar",
        "2 cloves garlic",
        "1 teaspoon fresh ginger",
        "Green onions",
        "1 tablespoon cooking oil",
      ],

      instructions: [
        "Cook the noodles according to package instructions.",
        "Mix soy sauce, sesame oil, and sugar in a small bowl.",
        "Heat oil in a large skillet.",
        "Cook the vegetables until slightly tender.",
        "Add garlic and ginger.",
        "Add the cooked noodles.",
        "Pour the sauce over everything and toss well.",
        "Serve immediately with green onions.",
      ],
    },

    // =======================================================
    // MUSHROOM FETTUCCINE
    // =======================================================

    "mushroom-fettuccine": {
      title: "Date Night Mushroom Fettuccine",
      image: "/recipes/mushroom-fettuccine.jpg",
      description:
        "Elegant, creamy mushroom fettuccine that is simple enough for a weeknight but special enough for date night.",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
      servings: "4 servings",

      ingredients: [
        "12 oz fettuccine",
        "2 cups mushrooms",
        "2 tablespoons butter",
        "2 cloves garlic",
        "1 cup heavy cream",
        "1/2 cup Parmesan cheese",
        "Salt",
        "Black pepper",
        "Fresh parsley",
      ],

      instructions: [
        "Cook the fettuccine until al dente.",
        "Melt butter in a large skillet.",
        "Add mushrooms and cook until golden.",
        "Add garlic and cook for another minute.",
        "Pour in the cream and simmer gently.",
        "Stir in Parmesan cheese.",
        "Add the cooked pasta and toss until coated.",
        "Season with salt and pepper.",
        "Garnish with parsley and serve.",
      ],
    },

    // =======================================================
    // INSTANT POT MAC AND CHEESE
    // =======================================================

    "instant-pot-mac-cheese": {
      title: "Instant Pot Mac and Cheese",
      image: "/recipes/instant-pot-mac-cheese.jpg",
      description:
        "Creamy, cheesy Instant Pot mac and cheese made with simple ingredients.",
      prepTime: "5 minutes",
      cookTime: "10 minutes",
      servings: "6 servings",

      ingredients: [
        "1 lb elbow macaroni",
        "4 cups water",
        "2 tablespoons butter",
        "1 cup cheddar cheese",
        "1 cup mozzarella cheese",
        "1/2 cup Parmesan cheese",
        "1 cup evaporated milk",
        "1 teaspoon salt",
        "1/2 teaspoon black pepper",
      ],

      instructions: [
        "Add the macaroni, water, butter, salt, and pepper to the Instant Pot.",
        "Cook on high pressure according to your pasta cooking time.",
        "Quick release the pressure.",
        "Stir in the evaporated milk.",
        "Add the cheeses gradually while stirring.",
        "Continue stirring until creamy and smooth.",
        "Taste and adjust seasoning.",
        "Serve immediately.",
      ],
    },

    // =======================================================
    // HAWAIIAN CHICKEN TACOS
    // =======================================================

    "hawaiian-chicken-tacos": {
      title: "Instant Pot Hawaiian Chicken Tacos with Jalapeño Ranch Slaw",
      image: "/recipes/hawaiian-chicken-tacos.jpg",
      description:
        "Juicy pineapple chicken with a creamy jalapeño ranch slaw tucked into warm tortillas.",
      prepTime: "15 minutes",
      cookTime: "25 minutes",
      servings: "6 servings",

      ingredients: [
        "2 lbs chicken breasts",
        "1 cup pineapple juice",
        "1 cup pineapple chunks",
        "1 tablespoon soy sauce",
        "2 cloves garlic",
        "1 teaspoon chili powder",
        "12 small tortillas",
        "2 cups shredded cabbage",
        "1 jalapeño",
        "1/2 cup ranch dressing",
        "Fresh cilantro",
        "Lime juice",
      ],

      instructions: [
        "Place the chicken, pineapple juice, pineapple, soy sauce, garlic, and chili powder in the Instant Pot.",
        "Cook on high pressure until the chicken is tender and cooked through.",
        "Shred the chicken.",
        "Mix cabbage, jalapeño, ranch dressing, and lime juice to make the slaw.",
        "Warm the tortillas.",
        "Fill each tortilla with shredded chicken.",
        "Top with jalapeño ranch slaw.",
        "Finish with fresh cilantro and serve.",
      ],
    },

    // =======================================================
    // RED CURRY LENTILS
    // =======================================================

    "red-curry-lentils": {
      title: "Instant Pot Red Curry Lentils",
      image: "/recipes/red-curry-lentils.jpg",
      description:
        "Creamy, spicy and delicious red curry lentils made quickly in the Instant Pot.",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
      servings: "6 servings",

      ingredients: [
        "1 1/2 cups red lentils",
        "1 onion",
        "3 cloves garlic",
        "1 tablespoon ginger",
        "2 tablespoons red curry paste",
        "1 can coconut milk",
        "3 cups vegetable broth",
        "1 teaspoon cumin",
        "1 teaspoon salt",
        "2 cups spinach",
        "Fresh cilantro",
        "Lime juice",
      ],

      instructions: [
        "Set the Instant Pot to sauté mode.",
        "Cook the onion, garlic, and ginger until fragrant.",
        "Add the curry paste and cumin.",
        "Add the lentils, coconut milk, and vegetable broth.",
        "Secure the lid and cook on high pressure.",
        "Allow the pressure to release naturally for several minutes before releasing the remaining pressure.",
        "Stir in the spinach.",
        "Add lime juice and cilantro.",
        "Serve hot over rice or with naan.",
      ],
    },
  };

  // =========================================================
  // CHECK WHETHER RECIPE EXISTS
  // =========================================================

  const recipe = recipes[id];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-[#e0a0c7] text-5xl font-serif font-bold mb-6">
            Recipe Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            Sorry, we couldn't find that recipe.
          </p>

          <Link
            to="/start-here"
            className="inline-block bg-[#81406f] hover:bg-[#9b5287] px-6 py-3 font-bold transition"
          >
            BACK TO START HERE
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="bg-[#111111] border-b border-gray-700">

        <div className="max-w-[1150px] mx-auto px-6">

          <div className="h-24 flex items-center justify-between">

            <Link
              to="/"
              className="text-4xl md:text-5xl font-serif"
            >
              <span className="text-[#e0a0c7]">pinch</span>
              <span className="text-gray-400">of</span>
              <span className="text-[#e0a0c7]">yum</span>
            </Link>

            <Link
              to="/start-here"
              className="text-[#e0a0c7] hover:text-white font-bold"
            >
              BACK TO RECIPES
            </Link>

          </div>

        </div>

      </header>

      {/* =====================================================
          RECIPE CONTENT
      ====================================================== */}

      <main className="max-w-[1100px] mx-auto px-6 py-12">

        {/* BACK BUTTON */}

        <Link
          to="/start-here"
          className="inline-flex items-center gap-3 text-[#e0a0c7] hover:text-white font-bold mb-10"
        >
          <FaArrowLeft />
          BACK TO RECIPES
        </Link>

        {/* IMAGE */}

        <div className="w-full h-[350px] md:h-[500px] overflow-hidden mb-10">

          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />

        </div>

        {/* TITLE */}

        <div className="max-w-[900px]">

          <h1 className="text-[#e0a0c7] text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            {recipe.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-serif leading-relaxed mb-10">
            {recipe.description}
          </p>

        </div>

        {/* ===================================================
            RECIPE INFORMATION
        ==================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-700 py-6 mb-12">

          <div className="mb-5 md:mb-0">
            <p className="text-gray-500 text-sm font-bold tracking-widest">
              PREP TIME
            </p>

            <p className="text-white text-lg font-serif mt-2">
              {recipe.prepTime}
            </p>
          </div>

          <div className="mb-5 md:mb-0">
            <p className="text-gray-500 text-sm font-bold tracking-widest">
              COOK TIME
            </p>

            <p className="text-white text-lg font-serif mt-2">
              {recipe.cookTime}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm font-bold tracking-widest">
              SERVINGS
            </p>

            <p className="text-white text-lg font-serif mt-2">
              {recipe.servings}
            </p>
          </div>

        </div>

        {/* ===================================================
            INGREDIENTS + INSTRUCTIONS
        ==================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* INGREDIENTS */}

          <section>

            <h2 className="text-[#e0a0c7] text-3xl md:text-4xl font-serif font-bold mb-7">
              Ingredients
            </h2>

            <ul className="space-y-4">

              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-lg font-serif leading-relaxed"
                >
                  <span className="text-[#81406f] mt-1">
                    •
                  </span>

                  <span>
                    {ingredient}
                  </span>
                </li>
              ))}

            </ul>

          </section>

          {/* INSTRUCTIONS */}

          <section>

            <h2 className="text-[#e0a0c7] text-3xl md:text-4xl font-serif font-bold mb-7">
              Instructions
            </h2>

            <div className="space-y-7">

              {recipe.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#81406f] flex items-center justify-center font-bold">
                    {index + 1}
                  </span>

                  <p className="text-gray-300 text-lg font-serif leading-relaxed">
                    {instruction}
                  </p>

                </div>
              ))}

            </div>

          </section>

        </div>

        {/* ===================================================
            BOTTOM BUTTON
        ==================================================== */}

        <div className="text-center mt-16 pt-10 border-t border-gray-700">

          <Link
            to="/start-here"
            className="inline-block bg-[#81406f] hover:bg-[#9b5287] px-8 py-4 font-bold tracking-wide transition"
          >
            ← BACK TO START HERE
          </Link>

        </div>

      </main>

    </div>
  );
};

export default Food;