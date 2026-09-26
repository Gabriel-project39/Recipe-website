
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

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

    </div>
  );
}

export default PremiumRecipe;