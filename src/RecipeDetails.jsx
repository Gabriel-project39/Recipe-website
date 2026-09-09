import { Link, useParams } from "react-router-dom";

function RecipeDetails() {

  const { id } = useParams();


  // =========================================================
  // ALL RECIPES
  // =========================================================

  const recipes = {

    "mini-freezer-stash": {
      title: "Mini Freezer Stash #1",

      image:
        "https://pinchofyum.com/tachyon/Mini-Freezer-Stash-1.jpg?resize=1200%2C1200&zoom=0.5",

      date: "SEPTEMBER 2, 2026",

      description:
        "I spent less than an hour prepping these, and it has been SO helpful!",

      ingredients: [
        "Chicken",
        "Ground beef",
        "Rice",
        "Vegetables",
        "Garlic",
        "Onion",
        "Olive oil",
        "Salt",
        "Black pepper",
        "Favorite seasonings",
      ],

      instructions: [
        "Prepare all of your ingredients.",
        "Cook the chicken and ground beef separately.",
        "Prepare the rice according to the package instructions.",
        "Chop the vegetables into small pieces.",
        "Season everything with salt, pepper and your favorite seasonings.",
        "Allow the cooked food to cool completely.",
        "Divide the meals into freezer-safe containers.",
        "Label each container with the recipe and date.",
        "Place the meals in the freezer.",
        "Thaw and reheat when ready to eat.",
      ],
    },


    "peanut-chicken": {
      title: "Peanut Chicken with Ginger Slaw",

      image:
        "https://pinchofyum.com/tachyon/Peanut-Chicken-with-Ginger-Slaw-1.jpg?resize=1200%2C1200&zoom=0.5",

      date: "AUGUST 26, 2026",

      description:
        "Juicy chicken with a delicious peanut sauce and fresh ginger slaw.",

      ingredients: [
        "Chicken breasts",
        "Peanut butter",
        "Soy sauce",
        "Garlic",
        "Fresh ginger",
        "Lime",
        "Honey",
        "Cabbage",
        "Carrots",
        "Green onions",
        "Olive oil",
        "Salt",
        "Black pepper",
      ],

      instructions: [
        "Season the chicken with salt and black pepper.",
        "Heat olive oil in a large pan.",
        "Cook the chicken until golden and cooked through.",
        "Prepare the peanut sauce with peanut butter, soy sauce, garlic, ginger, lime and honey.",
        "Slice the cabbage and carrots.",
        "Mix the vegetables together to make the ginger slaw.",
        "Pour some of the peanut sauce over the chicken.",
        "Serve the chicken with the fresh ginger slaw.",
        "Garnish with green onions.",
        "Serve immediately.",
      ],
    },


    "crispy-parmesan-chicken": {
      title: "Crispy Parmesan Chicken with Creamy Lemon Pasta",

      image:
        "https://pinchofyum.com/tachyon/Crispy-Chicken-with-Lemon-Pasta-5.jpg?resize=1200%2C1200&zoom=0.5",

      date: "JULY 22, 2026",

      description:
        "Crispy golden parmesan chicken atop creamy, luscious, lemony pasta! This combo is everything!",

      ingredients: [
        "Chicken breasts",
        "Parmesan cheese",
        "Breadcrumbs",
        "Eggs",
        "Pasta",
        "Garlic",
        "Heavy cream",
        "Lemon",
        "Butter",
        "Olive oil",
        "Salt",
        "Black pepper",
        "Fresh parsley",
      ],

      instructions: [
        "Season the chicken breasts with salt and black pepper.",
        "Coat the chicken in beaten egg.",
        "Cover the chicken with breadcrumbs and Parmesan cheese.",
        "Heat olive oil in a large pan.",
        "Cook the chicken until golden brown and cooked through.",
        "Cook the pasta according to the package instructions.",
        "Prepare the creamy lemon sauce with butter, garlic, cream and lemon.",
        "Add the cooked pasta to the sauce and mix well.",
        "Slice the crispy chicken and place it over the pasta.",
        "Garnish with Parmesan and fresh parsley.",
        "Serve immediately and enjoy!",
      ],
    },


    "smashed-olives": {
      title: "Smashed Olives with Burrata",

      image:
        "https://pinchofyum.com/tachyon/Smashed-Olives-with-Burrata-1-scaled.jpg?resize=1200%2C1200&zoom=0.5",

      date: "JULY 13, 2026",

      description:
        "Fried bread, torn creamy burrata, and smashed Castelvetrano olives make this an easy favorite.",

      ingredients: [
        "Crusty bread",
        "Burrata cheese",
        "Castelvetrano olives",
        "Olive oil",
        "Garlic",
        "Lemon",
        "Fresh herbs",
        "Black pepper",
        "Red pepper flakes",
        "Salt",
      ],

      instructions: [
        "Slice the crusty bread into thick pieces.",
        "Toast the bread in olive oil until golden and crispy.",
        "Rub the warm bread with garlic.",
        "Smash and roughly chop the Castelvetrano olives.",
        "Mix the olives with olive oil and lemon juice.",
        "Place the burrata on a serving plate.",
        "Arrange the crispy bread around the burrata.",
        "Spoon the smashed olives over the burrata.",
        "Add fresh herbs and black pepper.",
        "Serve immediately.",
      ],
    },


    "creamy-chicken-pasta": {
      title: "Creamy Chicken Pasta",

      image:
        "https://pinchofyum.com/tachyon/Summer-Produce-Recipes-02.jpg?resize=1200%2C1200&zoom=0.5",

      date: "JULY 8, 2026",

      description:
        "An easy and delicious dinner that's perfect for busy weeknights.",

      ingredients: [
        "Chicken",
        "Pasta",
        "Garlic",
        "Cream",
        "Parmesan cheese",
        "Butter",
        "Olive oil",
        "Salt",
        "Black pepper",
        "Fresh herbs",
      ],

      instructions: [
        "Cook the pasta according to the package instructions.",
        "Season the chicken with salt and black pepper.",
        "Cook the chicken in olive oil until golden brown.",
        "Remove the chicken from the pan.",
        "Add butter and garlic to the pan.",
        "Add the cream and Parmesan cheese.",
        "Stir until the sauce becomes creamy.",
        "Add the cooked pasta.",
        "Return the chicken to the pan.",
        "Garnish with fresh herbs and serve.",
      ],
    },

  };


  // =========================================================
  // FIND RECIPE
  // =========================================================

  const recipe = recipes[id];


  // =========================================================
  // RECIPE NOT FOUND
  // =========================================================

  if (!recipe) {

    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-4xl font-serif mb-6">
            Recipe Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            Sorry, we couldn't find that recipe.
          </p>

          <Link
            to="/categories"
            className="
              inline-block
              bg-[#81406f]
              px-6
              py-3
              font-bold
              hover:bg-[#9b4c86]
              transition
            "
          >
            BACK TO RECIPES
          </Link>

        </div>

      </div>
    );
  }


  // =========================================================
  // RECIPE PAGE
  // =========================================================

  return (
    <section className="min-h-screen bg-[#111111] text-white">

      {/* ================================================= */}
      {/* TOP BAR */}
      {/* ================================================= */}

      <header className="border-b border-gray-700">

        <div className="max-w-[1100px] mx-auto px-6">

          <div className="h-24 flex items-center justify-between">

            <Link
              to="/"
              className="text-4xl font-serif"
            >
              <span className="text-[#e0a0c7]">pinch</span>
              <span className="text-gray-400">of</span>
              <span className="text-[#e0a0c7]">yum</span>
            </Link>

            <Link
              to="/categories"
              className="text-[#e0a0c7] font-bold"
            >
              RECIPES
            </Link>

          </div>

        </div>

      </header>


      {/* ================================================= */}
      {/* BACK BUTTON */}
      {/* ================================================= */}

      <div className="max-w-[1100px] mx-auto px-6 pt-10">

        <Link
          to="/categories"
          className="
            text-[#e0a0c7]
            font-bold
            hover:text-white
            transition
          "
        >
          ← BACK TO RECIPES
        </Link>

      </div>


      {/* ================================================= */}
      {/* RECIPE HEADER */}
      {/* ================================================= */}

      <div className="max-w-[1100px] mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}

          <img
            src={recipe.image}
            alt={recipe.title}
            className="
              w-full
              h-[450px]
              object-cover
            "
          />


          {/* TEXT */}

          <div>

            <p
              className="
                text-[#e0a0c7]
                tracking-[0.25em]
                text-sm
                mb-5
              "
            >
              {recipe.date}
            </p>


            <h1
              className="
                font-serif
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              {recipe.title}
            </h1>


            <p
              className="
                mt-6
                text-gray-300
                text-lg
                leading-relaxed
              "
            >
              {recipe.description}
            </p>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* INGREDIENTS + INSTRUCTIONS */}
      {/* ================================================= */}

      <div className="max-w-[1000px] mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-16">


          {/* INGREDIENTS */}

          <div>

            <h2
              className="
                font-serif
                text-3xl
                font-bold
                mb-7
              "
            >
              Ingredients
            </h2>


            <ul className="space-y-4">

              {recipe.ingredients.map((ingredient, index) => (

                <li
                  key={index}
                  className="
                    text-gray-300
                    flex
                    gap-3
                  "
                >

                  <span className="text-[#e0a0c7]">
                    ✓
                  </span>

                  <span>
                    {ingredient}
                  </span>

                </li>

              ))}

            </ul>

          </div>


          {/* INSTRUCTIONS */}

          <div>

            <h2
              className="
                font-serif
                text-3xl
                font-bold
                mb-7
              "
            >
              Instructions
            </h2>


            <div className="space-y-7">

              {recipe.instructions.map((instruction, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  <span
                    className="
                      flex-shrink-0
                      w-9
                      h-9
                      rounded-full
                      bg-[#81406f]
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    {index + 1}
                  </span>


                  <p
                    className="
                      text-gray-300
                      leading-relaxed
                    "
                  >
                    {instruction}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* BACK HOME */}
      {/* ================================================= */}

      <div className="text-center pb-20">

        <Link
          to="/"
          className="
            inline-block
            bg-[#81406f]
            px-8
            py-4
            font-bold
            hover:bg-[#9b4c86]
            transition
          "
        >
          BACK TO HOME
        </Link>

      </div>

    </section>
  );
}

export default RecipeDetails;