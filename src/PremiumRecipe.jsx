import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaArrowLeft, FaClock, FaUtensils } from "react-icons/fa";



function PremiumRecipe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111111] text-white">

      {/* =====================================================
          NAVBAR - UNCHANGED
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
          RECIPES HERO SECTION
      ===================================================== */}

      <section className="bg-[#773f65] min-h-[calc(100vh-96px)] px-5 pt-6 pb-16 md:pt-7">

        <div className="max-w-[850px] mx-auto text-center">

          {/* BREADCRUMB */}

          <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs font-bold tracking-wide text-gray-300 mb-9">

            <Link
              to="/"
              className="hover:text-white transition"
            >
              PINCH OF YUM
            </Link>

            <span className="text-gray-300 text-base">
              ›
            </span>

            <span className="text-gray-200">
              RECIPES
            </span>

          </div>


          {/* TITLE */}

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-10">
            Recipes
          </h1>


          {/* DESCRIPTION */}

          <p className="text-lg md:text-xl leading-[1.5] text-gray-300 font-serif max-w-[830px] mx-auto">

            We’ve organized these recipes every way we could think of so you don’t have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true... no matter how you browse, we’re sure you’ll find just what you were looking for.

          </p>

        </div>

      </section>

            {/* =====================================================
          MOST LOVED RECIPES SECTION
      ===================================================== */}

      <section className="bg-[#202020] px-5 py-16 md:py-20">

        <div className="max-w-[1050px] mx-auto">

          {/* SECTION TITLE */}

          <div className="text-center mb-14">

            <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-extrabold tracking-widest text-[#e0a0c7]">

              <span className="text-3xl md:text-4xl">
                🏆
              </span>

              MOST LOVED RECIPES

            </h2>

            <p className="text-gray-300 font-serif text-base md:text-lg max-w-[600px] mx-auto mt-5 leading-relaxed">

              Out of all the many recipes on Pinch of Yum,
              these are our shining stars — the recipes we
              come back to again and again (and again).

            </p>

          </div>


          {/* RECIPE GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">

            {[
              {
                name: "19 Cozy Crockpot Recipes",
                image:
                  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80",
                reviews: "250",
                rating: "4.9",
              },
              {
                name: "Best Anytime Baked Chicken Meatballs",
                image:
                  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
                reviews: "800",
                rating: "4.9",
              },
              {
                name: "Ang’s Creamy Tortellini Soup",
                image:
                  "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80",
                reviews: "120",
                rating: "4.9",
              },
              {
                name: "Chopped Thai-Inspired Chicken Salad",
                image:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
                reviews: "147",
                rating: "4.9",
              },
              {
                name: "The Best Sunday Chili",
                image:
                  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80",
                reviews: "129",
                rating: "4.9",
              },
              {
                name: "Chicken Teriyaki Burgers with Sesame Slaw",
                image:
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
                reviews: "104",
                rating: "4.9",
              },
              {
                name: "The Best Chicken Tinga Tacos",
                image:
                  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=400&q=80",
                reviews: "197",
                rating: "4.9",
              },
              {
                name: "Sheet Pan Chicken Pitas with Tzatziki",
                image:
                  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80",
                reviews: "158",
                rating: "5.0",
              },
              {
                name: "Crispy Black Bean Tacos with Cilantro Lime Sauce",
                image:
                  "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=400&q=80",
                reviews: "157",
                rating: "4.9",
              },
              {
                name: "Miracle No Knead Bread",
                image:
                  "https://pinchofyum.com/tachyon/Miracle-No-Knead-Bread-3-2.jpg?resize=400%2C400&zoom=1",
                reviews: "592",
                rating: "4.8",
              },
              {
                name: "Ridiculously Good Air Fryer Chicken Breast",
                image:
                  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80",
                reviews: "171",
                rating: "4.9",
              },
              {
                name: "Best S’mores Bars",
                image:
                  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
                reviews: "143",
                rating: "4.9",
              },
            ].map((recipe, index) => (

              <Link
                to={`/recipe-details/${index + 1}`}
                key={recipe.name}
                className="group flex items-start gap-4 min-w-0"
              >

                {/* RECIPE IMAGE */}

                <div className="w-24 h-24 md:w-24 md:h-24 flex-shrink-0 overflow-hidden bg-[#303030]">

                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                </div>


                {/* RECIPE INFORMATION */}

                <div className="flex-1 min-w-0">

                  <h3 className="text-base md:text-[17px] leading-snug font-serif font-semibold text-gray-200 group-hover:text-[#e0a0c7] transition-colors">

                    {recipe.name}

                  </h3>


                  {/* STAR RATINGS */}

                  <div
                    className="flex items-center gap-1 text-[#e9b44c] text-lg mt-1"
                    aria-label={`${recipe.rating} out of 5 stars`}
                  >

                    {"★".repeat(5)}

                  </div>


                  {/* REVIEWS */}

                  <p className="text-[11px] md:text-xs tracking-wide text-gray-300 uppercase mt-1">

                    {recipe.reviews} Reviews / {recipe.rating} Average

                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


    </div>

    
  );
}



export default PremiumRecipe;scheduler