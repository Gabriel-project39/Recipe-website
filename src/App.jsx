import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import RecipeCategorie from "./RecipeCategorie";
import RecipeDetails from "./RecipeDetails";
import PopularRecipes from "./PopularRecipes";
import RecipeCategories from "./RecipeCategories";



import {
  FaSearch,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ================= FEATURED RECIPES =================

  const featuredRecipes = [
    {
      image:
        "https://pinchofyum.com/tachyon/Chicken-Caesar-Smash-Tacos.jpg?resize=840%2C1200&zoom=0.5",
      category: "DINNER",
    },
    {
      image:
        "https://pinchofyum.com/tachyon/Gochujang-Noodles-3.jpg?resize=840%2C1200&zoom=0.5",
      category: "QUICK AND EASY",
    },
    {
      image:
        "https://pinchofyum.com/tachyon/Crunch-Roll-Bowls-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "HEALTHY",
    },
    {
      image:
        "https://pinchofyum.com/tachyon/Walnut-Meatballs-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "TOMATO",
    },
  ];

  // ================= LATEST RECIPES =================

  const latestRecipes = [
    {
      id: "mini-freezer-stash",
      image:
        "https://pinchofyum.com/tachyon/Mini-Freezer-Stash-1.jpg?resize=800%2C800&zoom=0.5",
      date: "SEPTEMBER 2, 2026",
      title: "Mini Freezer Stash #1",
      description:
        "I spent less than an hour prepping these, and it has been SO helpful!",
    },
    {
      id: "peanut-chicken",
      image:
        "https://pinchofyum.com/tachyon/Peanut-Chicken-with-Ginger-Slaw-1.jpg?resize=800%2C800&zoom=0.5",
      date: "AUGUST 26, 2026",
      title: "Peanut Chicken with Ginger Slaw",
      description:
        "Juicy chicken with a delicious peanut sauce and fresh ginger slaw.",
    },
    {
      id: "crispy-parmesan-chicken",
      image:
        "https://pinchofyum.com/tachyon/Crispy-Chicken-with-Lemon-Pasta-5.jpg?resize=800%2C800&zoom=0.5",
      date: "JULY 22, 2026",
      title: "Crispy Parmesan Chicken with Creamy Lemon Pasta",
      description:
        "Crispy golden parmesan chicken atop creamy, luscious, lemony pasta! This combo is everything!",
    },
    {
      id: "smashed-olives",
      image:
        "https://pinchofyum.com/tachyon/Smashed-Olives-with-Burrata-1-scaled.jpg?resize=800%2C800&zoom=0.5",
      date: "JULY 13, 2026",
      title: "Smashed Olives with Burrata",
      description:
        "Fried bread, torn creamy burrata, and smashed Castelvetrano olives make this an easy favorite.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#202020] text-white">

      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

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

              <a
                href="#about"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                ABOUT
              </a>

              <Link
                to="/categories"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                RECIPES
              </Link>

              <a
                href="#start"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                START HERE
              </a>

              <Link
                to="/categories"
                className="text-[#e0a0c7] text-xl"
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

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  ABOUT
                </a>

                <Link
                  to="/categories"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  RECIPES
                </Link>

                <a
                  href="#start"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  START HERE
                </a>

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


      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="bg-[#111111] py-7 border-b border-gray-800">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-sm md:text-base font-semibold">

            Simple recipes made for{" "}

            <span className="normal-case tracking-normal text-2xl md:text-3xl italic text-[#d9a5c8] font-serif">
              real, actual, everyday life.
            </span>

          </p>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FEATURED RECIPES */}
      {/* ===================================================== */}

      <main className="max-w-[1400px] mx-auto px-6 md:px-8 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {featuredRecipes.map((recipe, index) => (

            <Link
              to="/categories"
              key={index}
              className="group relative overflow-hidden block"
            >

              <img
                src={recipe.image}
                alt={recipe.category}
                className="
                  w-full
                  h-[500px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* GRADIENT */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-40
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                "
              />

              {/* CATEGORY */}

              <div className="absolute bottom-0 left-0 right-0 flex justify-center">

                <span
                  className="
                    bg-[#f2b53d]
                    text-white
                    px-8
                    py-4
                    text-sm
                    md:text-base
                    font-bold
                    tracking-[0.2em]
                    text-center
                  "
                >
                  {recipe.category}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </main>


      {/* ===================================================== */}
      {/* AS SEEN IN */}
      {/* ===================================================== */}

      <section className="bg-[#111111]">

        <div className="max-w-[1152px] mx-auto px-6">

          <div className="pt-7">

            <div className="text-center">

              <p
                className="
                  text-[#f2b53d]
                  text-[13px]
                  font-bold
                  tracking-[0.22em]
                "
              >
                AS SEEN IN
              </p>

            </div>


            {/* PUBLICATIONS */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                md:grid-cols-6
                items-center
                gap-8
              "
            >

              <div className="text-center text-gray-400 font-bold text-[24px]">
                BuzzFeed
              </div>

              <div className="text-center text-gray-400 font-serif italic text-[34px]">
                PureWow.
              </div>

              <div className="text-center text-gray-400 font-bold text-[20px] tracking-[0.18em]">
                BRIT+CO
              </div>

              <div className="text-center text-gray-500 font-bold text-[15px] tracking-[0.25em]">
                POPSUGAR.
              </div>

              <div className="text-center text-gray-500 text-[11px] tracking-[0.2em] whitespace-nowrap">
                ◉ THE EVERYGIRL
              </div>

              <div className="text-center text-gray-400 font-bold text-[25px]">
                ◎ kitchn
              </div>

            </div>


            <div className="border-b border-gray-700 mt-10" />

          </div>


          {/* ================================================= */}
          {/* LATEST & GREATEST */}
          {/* ================================================= */}

          <div className="pt-14 pb-20">

            <h2
              className="
                text-[#e0a0c7]
                font-serif
                text-[16px]
                md:text-[17px]
                tracking-[0.12em]
                mb-8
              "
            >
              THE LATEST &amp; GREATEST
            </h2>


            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[746px_342px]
                gap-16
                items-start
              "
            >

              {/* ARTICLES */}

              <div>

                {latestRecipes.map((recipe) => (

                  <article
                    key={recipe.id}
                    className="
                      pb-6
                      mb-8
                      border-b
                      border-gray-700
                    "
                  >

                    <div
                      className="
                        grid
                        grid-cols-1
                        md:grid-cols-[238px_1fr]
                        gap-4
                      "
                    >

                      {/* IMAGE */}

                      <div className="w-full h-[238px] overflow-hidden">

                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="
                            w-full
                            h-full
                            object-cover
                            hover:scale-105
                            transition-transform
                            duration-500
                          "
                        />

                      </div>


                      {/* INFORMATION */}

                      <div className="pt-1">

                        <p
                          className="
                            text-gray-500
                            text-[11px]
                            tracking-[0.27em]
                            mb-5
                          "
                        >
                          {recipe.date}
                        </p>


                        <h3
                          className="
                            font-serif
                            font-bold
                            text-[27px]
                            md:text-[30px]
                            leading-[1.12]
                            text-white
                            hover:text-[#e0a0c7]
                            transition-colors
                          "
                        >
                          {recipe.title}
                        </h3>


                        <p
                          className="
                            mt-6
                            text-gray-300
                            font-serif
                            text-[16px]
                            leading-[1.45]
                            max-w-[500px]
                          "
                        >
                          {recipe.description}
                        </p>


                        {/* CONTINUE READING */}

                        <Link
                          to={`/recipe-details/${recipe.id}`}
                          className="
                            inline-block
                            mt-5
                            text-[#f2b53d]
                            font-bold
                            text-[16px]
                            tracking-[0.05em]
                            hover:text-[#e0a0c7]
                            transition-colors
                          "
                        >
                          CONTINUE READING
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>


              {/* ================================================= */}
              {/* SIDEBAR */}
              {/* ================================================= */}

              <aside className="hidden lg:block w-[342px]">

                <img
                  src="https://pinchofyum.com/content/assets/images/sidebar/sidebar-freezer-meals-350x523.png"
                  alt="20 Healthy Freezer Meals"
                  className="w-full h-auto object-cover"
                />

              </aside>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FLOATING SOCIAL BUTTONS */}
      {/* ===================================================== */}

      <div
        className="
          fixed
          right-5
          bottom-6
          z-50
          flex
          flex-col
          items-center
          gap-3
        "
      >

        <span className="text-[#e0a0c7] font-bold text-sm">
          182.0k
        </span>


        <button
          className="
            w-14
            h-14
            rounded-full
            bg-[#111111]
            border
            border-gray-600
            flex
            items-center
            justify-center
            text-[#e0a0c7]
            text-xl
          "
        >
          <FaHeart />
        </button>


        <Link
          to="/categories"
          className="
            w-14
            h-14
            rounded-full
            bg-[#9b4c86]
            flex
            items-center
            justify-center
            text-white
            text-xl
            hover:scale-110
            transition-transform
          "
          aria-label="Search recipes"
        >
          <FaSearch />
        </Link>

      </div>

    </div>
  );
}


// =============================================================
// APP ROUTES
// =============================================================

function App() {
  return (
    <Routes>

      {/* HOME */}

      <Route 
  path="/" 
  element={
    <>
      <Home />
      <RecipeCategories />
      <PopularRecipes />
      
    </>
  } 
/>


      {/* RECIPES */}

      <Route
        path="/categories"
        element={<RecipeCategorie />}
      />


      {/* RECIPE DETAILS */}

      <Route
        path="/recipe-details/:id"
        element={<RecipeDetails />}
      />

    </Routes>
  );
}

export default App;