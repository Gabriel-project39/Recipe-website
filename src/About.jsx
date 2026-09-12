import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function About() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="bg-[#202020] text-white min-h-screen">
      
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
                href="/about"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                ABOUT
              </Link>

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

                <Link
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7]"
                >
                  ABOUT
                </Link>

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

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="w-full h-[500px] md:h-[700px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMODZ2mq96tNXr2uBHz0EE5gk6TjjDmSMA_SvFVGbUw&s=10"
            alt="About me"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-8 md:px-14 py-12 md:py-16">

          {/* BREADCRUMB */}
          <p className="text-sm font-bold tracking-wide text-gray-300 mb-6">
            HOME <span className="mx-2 text-gray-500">›</span> ABOUT ME
          </p>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#d99abb] mb-8">
            About Me
          </h1>

          {/* INTRO */}
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            HI, MY NAME IS{" "}
            <span className="font-serif italic text-gray-400">
              Gabriela!
            </span>
          </h2>

          {/* PARAGRAPHS */}
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-8">

            <p>
              Welcome to my little corner of the internet! I'm glad you're
              here.
            </p>

            <p>
              This website is a place where I share my passion for food,
              creativity, and creating beautiful digital experiences. I love
              discovering new ideas and turning them into something useful
              and enjoyable.
            </p>

            <p>
              I created this platform to bring together delicious recipes,
              helpful ideas, and an easy-to-use experience for anyone who
              loves cooking.
            </p>

            <p>
              Whether you're looking for something quick and easy or want to
              try something completely new, I hope you find something here
              that inspires you.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;