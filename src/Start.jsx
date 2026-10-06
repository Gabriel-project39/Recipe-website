import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Start = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#222222] text-white">

      {/* ================= NAVBAR ================= */}

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

              {/* START HERE */}

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

                {/* START HERE */}

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


      {/* ================= START HERE CONTENT ================= */}

      <main className="max-w-[1166px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[373px_1fr]">

          {/* ================= FOOD IMAGE ================= */}

          <div className="h-[400px] md:h-[560px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
              alt="Delicious pasta"
              className="w-full h-full object-cover"
            />

          </div>


          {/* ================= TEXT CONTENT ================= */}

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


    </div>
  );
};

export default Start;