import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaRegHeart,
  FaPrint,
  FaStar,
  FaClock,
  FaUtensils,
  FaCheck,
  FaArrowRight,
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa";

function PremiumRecipe() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  const ingredients = [
    {
      title: "For the chicken",
      items: [
        "2 large chicken breasts",
        "1/2 cup grated Parmesan cheese",
        "1/2 cup breadcrumbs",
        "2 cloves garlic, minced",
        "1 teaspoon paprika",
        "1/2 teaspoon black pepper",
        "1/2 teaspoon salt",
        "2 tablespoons olive oil",
      ],
    },
    {
      title: "For the pasta",
      items: [
        "250g spaghetti or linguine",
        "1 cup heavy cream",
        "1/2 cup Parmesan cheese",
        "1 fresh lemon",
        "2 cloves garlic",
        "2 tablespoons butter",
        "Fresh parsley",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Prepare the chicken",
      text: "Place the chicken breasts between two sheets of parchment paper and gently pound them until evenly thick. Season both sides with salt, black pepper and paprika.",
    },
    {
      number: "02",
      title: "Create the crispy coating",
      text: "Combine Parmesan cheese, breadcrumbs and minced garlic in a shallow bowl. Press each chicken breast firmly into the mixture until completely coated.",
    },
    {
      number: "03",
      title: "Cook until golden",
      text: "Heat olive oil in a large skillet over medium heat. Cook the chicken for 4–5 minutes per side until deeply golden, crispy and cooked through.",
    },
    {
      number: "04",
      title: "Make the lemon cream sauce",
      text: "Melt the butter in the same pan. Add garlic and cook briefly before adding cream, Parmesan and fresh lemon juice. Stir until smooth and creamy.",
    },
    {
      number: "05",
      title: "Bring everything together",
      text: "Toss the cooked pasta through the creamy lemon sauce. Slice the crispy chicken and arrange it over the pasta. Finish with Parmesan and fresh parsley.",
    },
  ];

  const relatedRecipes = [
    {
      image: "/images/latest2.jpg",
      category: "DINNER",
      title: "Creamy Garlic Butter Chicken",
    },
    {
      image: "/images/recipe1.jpg",
      category: "PASTA",
      title: "Roasted Tomato Basil Pasta",
    },
    {
      image: "/images/recipe2.jpg",
      category: "QUICK & EASY",
      title: "Golden Garlic Chicken",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#1c1b19]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

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


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="recipe"
        className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pb-24"
      >

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* IMAGE */}

          <div className="relative">

            <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">

              <img
                src="/images/latest1.jpg"
                alt="Crispy Parmesan Chicken with Lemon Pasta"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute bottom-4 left-4 bg-[#f7f4ef] px-4 py-3 sm:bottom-6 sm:left-6">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
                Chef's Table
              </p>

            </div>

          </div>


          {/* INFORMATION */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
              Signature Dinner
            </p>


            <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">

              Crispy Parmesan

              <span className="block italic text-[#9a6748]">
                Chicken
              </span>

              <span className="block">
                with Lemon Pasta
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-[#68625c] sm:text-lg sm:leading-8">
              Golden, parmesan-crusted chicken served over
              silky lemon cream pasta. Rich enough for a
              special dinner, simple enough for a Tuesday night.
            </p>


            {/* RATING */}

            <div className="mt-6 flex flex-wrap items-center gap-3">

              <div className="flex gap-1 text-[#c68b3c]">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-sm" />
                ))}

              </div>

              <span className="text-sm font-semibold">
                4.9
              </span>

              <span className="text-sm text-[#77716a]">
                128 reviews
              </span>

            </div>


            {/* BUTTONS */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => setSaved(!saved)}
                className="flex items-center justify-center gap-3 bg-[#1c1b19] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#9a6748]"
              >
                {saved ? <FaHeart /> : <FaRegHeart />}
                {saved ? "Saved" : "Save Recipe"}
              </button>


              <button className="flex items-center justify-center gap-3 border border-[#bbb4aa] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-white">
                <FaPrint />
                Print Recipe
              </button>

            </div>


            {/* STATS */}

            <div className="mt-9 grid grid-cols-2 border-y border-[#d7d1c8] py-6 sm:grid-cols-4">

              <div className="border-b border-[#d7d1c8] pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                <FaClock className="text-[#9a6748]" />

                <p className="mt-2 text-[10px] uppercase tracking-widest text-[#888078]">
                  Prep
                </p>

                <p className="mt-1 font-semibold">
                  15 min
                </p>
              </div>


              <div className="border-b border-[#d7d1c8] pb-4 pl-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pl-4 sm:pr-4">
                <FaUtensils className="text-[#9a6748]" />

                <p className="mt-2 text-[10px] uppercase tracking-widest text-[#888078]">
                  Cook
                </p>

                <p className="mt-1 font-semibold">
                  30 min
                </p>
              </div>


              <div className="pt-4 sm:border-r sm:border-[#d7d1c8] sm:pl-4 sm:pt-0 sm:pr-4">
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Total
                </p>

                <p className="mt-1 font-semibold">
                  45 min
                </p>
              </div>


              <div className="border-l border-[#d7d1c8] pl-4 pt-4 sm:border-l-0 sm:pl-4 sm:pt-0">
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Serves
                </p>

                <p className="mt-1 font-semibold">
                  4 people
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RECIPE BODY
      ===================================================== */}

      <section className="border-t border-[#ded9d0] bg-[#eee9e1]">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[330px_1fr] lg:gap-20 lg:py-24">

          {/* INGREDIENTS */}

          <aside id="ingredients">

            <div className="lg:sticky lg:top-28">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
                What you'll need
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Ingredients
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#77716a]">
                Everything you need to create this dish from
                start to finish.
              </p>


              <div className="mt-8 space-y-9">

                {ingredients.map((group) => (

                  <div key={group.title}>

                    <h3 className="border-b border-[#d2ccc3] pb-3 text-xs font-bold uppercase tracking-widest">
                      {group.title}
                    </h3>

                    <ul className="mt-4 space-y-3">

                      {group.items.map((item) => (

                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-[#5e5953]"
                        >

                          <FaCheck className="mt-1 shrink-0 text-xs text-[#9a6748]" />

                          <span>{item}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </div>

          </aside>


          {/* METHOD */}

          <div id="method">

            <div className="border-b border-[#d2ccc3] pb-8">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
                The method
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                How to make it
              </h2>

            </div>


            <div>

              {steps.map((step) => (

                <article
                  key={step.number}
                  className="grid gap-4 border-b border-[#d2ccc3] py-9 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-12"
                >

                  <span className="font-serif text-3xl text-[#9a6748]">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68625c] sm:text-base sm:leading-8">
                      {step.text}
                    </p>

                  </div>

                </article>

              ))}

            </div>


            {/* CHEF NOTE */}

            <div className="mt-10 bg-[#dfd4c5] p-7 sm:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
                Chef's note
              </p>

              <p className="mt-4 font-serif text-2xl italic leading-relaxed sm:text-3xl">
                Don't rush the chicken. Let the crust develop
                a deep golden color before turning it — that's
                where the flavor lives.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUTRITION
      ===================================================== */}

      <section
        id="nutrition"
        className="bg-[#1c1b19] text-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c68b3c]">
                Per serving
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Nutrition
              </h2>

            </div>

            <p className="text-xs text-gray-500">
              Nutritional values are estimates.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-2 border-t border-gray-700 md:grid-cols-5">

            {[
              ["Calories", "642"],
              ["Protein", "42g"],
              ["Carbs", "54g"],
              ["Fat", "29g"],
              ["Fiber", "4g"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="border-b border-gray-700 px-4 py-6 sm:px-6 md:border-b-0 md:border-r md:first:border-l"
              >

                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  {label}
                </p>

                <p className="mt-2 font-serif text-3xl">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED RECIPES
      ===================================================== */}

      <section
        id="more"
        className="bg-[#f7f4ef] px-5 py-16 sm:px-8 lg:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
                Keep cooking
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                More recipes
              </h2>

            </div>


            <button className="flex items-center gap-3 self-start text-xs font-bold uppercase tracking-widest transition hover:text-[#9a6748] sm:self-auto">
              View all
              <FaArrowRight />
            </button>

          </div>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {relatedRecipes.map((recipe) => (

              <article
                key={recipe.title}
                className="group cursor-pointer"
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>


                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9a6748]">
                  {recipe.category}
                </p>


                <h3 className="mt-2 font-serif text-2xl transition group-hover:text-[#9a6748]">
                  {recipe.title}
                </h3>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="bg-[#dfd4c5]">

        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a6748]">
            From our kitchen to yours
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            New recipes, delivered.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#68625c]">
            Get thoughtfully developed recipes, cooking ideas
            and kitchen inspiration delivered straight to your inbox.
          </p>


          <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-[#bcb2a5] bg-[#f7f4ef] px-5 py-4 text-sm outline-none focus:border-[#9a6748]"
            />

            <button className="bg-[#1c1b19] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#9a6748]">
              Subscribe
            </button>

          </form>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#11100f] text-white">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}

            <div className="lg:col-span-2">

              <h2 className="font-serif text-3xl">
                Maison<span className="text-[#9a6748]">Table</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                Recipes designed for beautiful everyday cooking.
                Thoughtful ingredients, practical techniques and
                food worth gathering around.
              </p>


              <div className="mt-6 flex gap-3">

                <button className="flex h-10 w-10 items-center justify-center border border-gray-700 transition hover:border-[#9a6748] hover:text-[#c68b3c]">
                  <FaInstagram />
                </button>

                <button className="flex h-10 w-10 items-center justify-center border border-gray-700 transition hover:border-[#9a6748] hover:text-[#c68b3c]">
                  <FaPinterestP />
                </button>

                <button className="flex h-10 w-10 items-center justify-center border border-gray-700 transition hover:border-[#9a6748] hover:text-[#c68b3c]">
                  <FaFacebookF />
                </button>

              </div>

            </div>


            {/* EXPLORE */}

            <div>

              <h3 className="text-xs font-bold uppercase tracking-widest">
                Explore
              </h3>

              <div className="mt-5 space-y-3 text-sm text-gray-500">

                <a href="#" className="block hover:text-white">
                  All Recipes
                </a>

                <a href="#" className="block hover:text-white">
                  Quick & Easy
                </a>

                <a href="#" className="block hover:text-white">
                  Dinner
                </a>

                <a href="#" className="block hover:text-white">
                  Vegetarian
                </a>

                <a href="#" className="block hover:text-white">
                  Desserts
                </a>

              </div>

            </div>


            {/* INFORMATION */}

            <div>

              <h3 className="text-xs font-bold uppercase tracking-widest">
                Information
              </h3>

              <div className="mt-5 space-y-3 text-sm text-gray-500">

                <a href="#" className="block hover:text-white">
                  About
                </a>

                <a href="#" className="block hover:text-white">
                  Contact
                </a>

                <a href="#" className="block hover:text-white">
                  Privacy
                </a>

                <a href="#" className="block hover:text-white">
                  Terms
                </a>

              </div>

            </div>

          </div>


          <div className="mt-12 border-t border-gray-800 pt-6 text-xs text-gray-600">

            © 2026 MaisonTable. All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}

export default PremiumRecipe;