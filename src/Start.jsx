import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Start = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================================================
  // HEALTHY RECIPES
  // =========================================================

  const healthyRecipes = [
    {
      id: "cozy-crockpot",
      title: "19 Cozy Crockpot Recipes",
      description:
        "Hearty soups, saucy pastas, big-flavor chilis, and tender shredded meats that basically make themselves. These cozy crockpot recipes deliver!",
      image: "https://pinchofyum.com/tachyon/Cozy-Crockpot-Recipes-02-scaled.jpg?fit=300%2C300&zoom=1",
    },
    {
      id: "detox-lentil-soup",
      title: "The Best Detox Crockpot Lentil Soup",
      description:
        "Detox Crockpot Lentil Soup – a clean and simple soup made with onions, garlic, carrots, olive oil, squash, and LENTILS! Super healthy and easy to make.",
      image: "/recipes/detox-lentil-soup.jpg",
    },
    {
      id: "green-sauce",
      title: "5 Minute Magic Green Sauce",
      description:
        "5 Minute Magic Green Sauce – SO AWESOME. Made with easy ingredients like avocado, olive oil, cilantro, lime, garlic, and parsley! Vegan.",
      image: "/recipes/green-sauce.jpg",
    },
    {
      id: "thai-sweet-potato-curry",
      title: "Creamy Thai Sweet Potato Curry",
      description:
        "Creamy Thai Sweet Potato Curry – packed with nutrition! Our favorite easy, healthy, winter comfort food recipe.",
      image: "/recipes/thai-sweet-potato-curry.jpg",
    },
  ];

  // =========================================================
  // MEAL PREP RECIPES
  // =========================================================

  const mealPrepRecipes = [
    {
      id: "cozy-crockpot",
      title: "19 Cozy Crockpot Recipes",
      description:
        "Hearty soups, saucy pastas, big-flavor chilis, and tender shredded meats that basically make themselves. These cozy crockpot recipes deliver!",
      image: "/recipes/cozy-crockpot.jpg",
    },
    {
      id: "sesame-noodle-bowls",
      title: "Sesame Noodle Bowls",
      description:
        "Meal Prep Sesame Noodle Bowls! Fork-twirly noodles, an easy creamy sesame sauce, perfect browned chicken, and all the veg. YUM.",
      image: "/recipes/sesame-noodle-bowls.jpg",
    },
    {
      id: "breakfast-sandwiches",
      title: "Meal Prep Breakfast Sandwiches",
      description:
        "Breakfast Sandwiches – meal prep style! Bake up your eggs on a sheet pan with bacon and spinach, tuck them into English muffins with some cheese, and stash them in the freezer for the week.",
      image: "/recipes/breakfast-sandwiches.jpg",
    },
    {
      id: "cauliflower-fried-rice",
      title: "Cauliflower Fried Rice with Crispy Tofu",
      description:
        "Cauliflower Fried Rice! Healthy + clean fried rice made with cauliflower, carrots, onions, garlic, eggs, sesame oil and the BEST baked crispy tofu.",
      image: "/recipes/cauliflower-fried-rice.jpg",
    },
  ];

  // =========================================================
  // VEGETARIAN RECIPES
  // =========================================================

  const vegetarianRecipes = [
    {
      id: "cozy-crockpot",
      title: "19 Cozy Crockpot Recipes",
      description:
        "Hearty soups, saucy pastas, big-flavor chilis, and tender shredded meats that basically make themselves. These cozy crockpot recipes deliver!",
      image: "/recipes/cozy-crockpot.jpg",
    },
    {
      id: "vegetarian-shepherds-pie",
      title: "Vegetarian Shepherd’s Pie",
      description:
        "Vegetarian Shepherd’s Pie ♥ saucy mushrooms, carrots, and peas topped with creamy mashed potatoes. Real food meets comfort food!",
      image: "/recipes/vegetarian-shepherds-pie.jpg",
    },
    {
      id: "lo-mein",
      title: "15 Minute Lo Mein",
      description:
        "15 Minute Lo Mein! Made with just soy sauce, sesame oil, a pinch of sugar, ramen noodles or spaghetti noodles, and any veggies or protein you like. SO YUMMY!",
      image: "/recipes/lo-mein.jpg",
    },
    {
      id: "mushroom-fettuccine",
      title: "Date Night Mushroom Fettuccine",
      description:
        "Date Night Mushroom Fettuccine – elegant and luscious and FIVE INGREDIENT EASY.",
      image: "/recipes/mushroom-fettuccine.jpg",
    },
  ];

  // =========================================================
  // INSTANT POT RECIPES
  // =========================================================

  const instantPotRecipes = [
    {
      id: "cozy-crockpot",
      title: "19 Cozy Crockpot Recipes",
      description:
        "Hearty soups, saucy pastas, big-flavor chilis, and tender shredded meats that basically make themselves. These cozy crockpot recipes deliver!",
      image: "/recipes/cozy-crockpot.jpg",
    },
    {
      id: "instant-pot-mac-cheese",
      title: "Instant Pot Mac and Cheese",
      description:
        "Instant Pot Mac and Cheese – made with 5 real food ingredients. This is SO MUCH BETTER than any mac and cheese I've ever had!",
      image: "/recipes/instant-pot-mac-cheese.jpg",
    },
    {
      id: "hawaiian-chicken-tacos",
      title: "Instant Pot Hawaiian Chicken Tacos with Jalapeño Ranch Slaw",
      description:
        "These Instant Pot Hawaiian Chicken Tacos are out of this WORLD. Juicy pineapple and spiced chicken crisped under the broiler, tucked into tortillas, and rolled up with creamy jalapeño ranch slaw.",
      image: "/recipes/hawaiian-chicken-tacos.jpg",
    },
    {
      id: "red-curry-lentils",
      title: "Instant Pot Red Curry Lentils",
      description:
        "Guess what’s for dinner? Creamy, spicy, delicious red curry lentils, made in the Instant Pot.",
      image: "/recipes/red-curry-lentils.jpg",
    },
  ];

  // =========================================================
  // RECIPE CARD COMPONENT
  // =========================================================

  const RecipeCard = ({ recipe }) => {
    return (
      <article className="bg-[#111111] flex flex-col sm:flex-row min-h-[256px]">
        {/* IMAGE */}

        <div className="w-full sm:w-[175px] md:w-[175px] h-[250px] sm:h-auto flex-shrink-0 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}

        <div className="flex flex-col justify-between px-7 py-6">
          <div>
            <h3 className="text-white text-2xl md:text-[24px] leading-[1.15] font-serif font-bold mb-6">
              {recipe.title}
            </h3>

            <p className="text-gray-300 text-[16px] md:text-[17px] leading-[1.45] font-serif">
              {recipe.description}
            </p>
          </div>

          {/* BUTTON */}

          <Link
            to={`/food/${recipe.id}`}
            className="inline-block self-start mt-7 bg-[#81406f] hover:bg-[#9b5287] text-white px-5 py-3 font-bold tracking-wide text-sm transition"
          >
            MAKE THIS RECIPE
          </Link>
        </div>
      </article>
    );
  };

  // =========================================================
  // RECIPE SECTION COMPONENT
  // =========================================================

  const RecipeSection = ({ title, icon, recipes }) => {
    return (
      <section className="max-w-[1166px] mx-auto px-5 md:px-0 py-12">
        {/* SECTION TITLE */}

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-[#f2b53d] text-4xl">{icon}</span>

          <h2 className="text-[#e0a0c7] text-2xl md:text-[27px] font-bold tracking-[2px]">
            {title}
          </h2>
        </div>

        {/* RECIPE GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {recipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={`${recipe.id}-${index}`} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="bg-[#111111] border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">

          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}

            <Link
              to="/"
              className="text-4xl md:text-5xl font-serif"
            >
              <span className="text-[#e0a0c7]">pinch</span>
              <span className="text-gray-400">of</span>
              <span className="text-[#e0a0c7]">yum</span>
            </Link>

            {/* DESKTOP MENU */}

            <nav className="hidden md:flex items-center gap-10">

              <Link
                to="/"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                HOME
              </Link>

              <Link
                to="/about"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                ABOUT
              </Link>

              <Link
                to="/recipes"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                RECIPES
              </Link>

              <Link
                to="/start-here"
                className="font-bold text-[#e0a0c7] hover:text-white transition"
              >
                START HERE
              </Link>

              <Link
                to="/categories"
                className="text-[#e0a0c7] text-xl hover:text-white transition"
                aria-label="Search recipes"
              >
                <FaSearch />
              </Link>

            </nav>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#e0a0c7] text-3xl p-2"
              aria-label="Open menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* MOBILE MENU */}

          {menuOpen && (
            <div className="md:hidden border-t border-gray-700">

              <nav className="flex flex-col py-5">

                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  HOME
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  ABOUT
                </Link>

                <Link
                  to="/recipes"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  RECIPES
                </Link>

                <Link
                  to="/start-here"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold text-[#e0a0c7] hover:bg-[#222222]"
                >
                  START HERE
                </Link>

                <Link
                  to="/categories"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  <FaSearch />
                  SEARCH
                </Link>

              </nav>

            </div>
          )}

        </div>
      </header>

      {/* =====================================================
          YOUR ORIGINAL START HERE CONTENT
          NOTHING REMOVED
      ====================================================== */}

      <main className="max-w-[1166px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[373px_1fr]">

          {/* FOOD IMAGE */}

          <div className="h-[400px] md:h-[560px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
              alt="Delicious pasta"
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT CONTENT */}

          <section className="bg-[#222222] px-6 md:px-12 py-10 md:py-[50px]">

            {/* TITLE */}

            <h1 className="text-[#e0a0c7] text-4xl md:text-[53px] leading-[1.05] font-serif font-bold tracking-tight mb-7">
              Welcome to Pinch of Yum
            </h1>

            {/* TALK FOOD */}

            <div className="flex items-center gap-4 mb-6">

              <span className="text-white font-serif text-sm md:text-[15px] tracking-[1px] font-bold">
                LET’S TALK FOOD
              </span>

              <span className="text-gray-500 text-3xl italic font-serif -rotate-6">
                shall we?
              </span>

            </div>

            {/* PARAGRAPH 1 */}

            <p className="text-gray-300 text-[17px] md:text-[19px] leading-[1.55] font-serif mb-8">
              Well, we hope that's why you're here. Our recipes are designed
              for real, actual, every day life, and we try to focus on real
              foods and healthy recipes (which honestly means a lot of
              different things to us, including the perfect chocolate chip
              cookie and cheese on cheese on cheese, because health is all
              about balance, right?).
            </p>

            {/* PARAGRAPH 2 */}

            <p className="text-gray-300 text-[17px] md:text-[19px] leading-[1.55] font-serif mb-8">
              This is the place to find those recipes — everything from our
              most popular, to meal prep, to Instant Pot recipes, or if you
              just, like, have some sad greens in your fridge to use up and
              you need some inspiration.
            </p>

            {/* PARAGRAPH 3 */}

            <p className="text-gray-300 text-[17px] md:text-[19px] leading-[1.55] font-serif">
              You're here! Have fun. We hope you find something (many things)
              you love.
            </p>

          </section>

        </div>

      </main>

      {/* =====================================================
          NEW RECIPE SECTIONS
      ====================================================== */}

      {/* HEALTHY RECIPES */}

      <RecipeSection
        title="HEALTHY RECIPES"
        icon="♡"
        recipes={healthyRecipes}
      />

      {/* MEAL PREP RECIPES */}

      <RecipeSection
        title="MEAL PREP RECIPES"
        icon="♨"
        recipes={mealPrepRecipes}
      />

      {/* VEGETARIAN RECIPES */}

      <RecipeSection
        title="VEGETARIAN RECIPES"
        icon="♨"
        recipes={vegetarianRecipes}
      />

      {/* INSTANT POT RECIPES */}

      <RecipeSection
        title="INSTANT POT RECIPES"
        icon="♨"
        recipes={instantPotRecipes}
      />

    </div>
  );
};

export default Start;