import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Footer";

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
                to=""
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
                  href="/about"
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

      {/* WHY USE OUR RECIPES */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 py-16 md:py-20">

        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-10">
          WHY USE OUR RECIPES
        </h2>

        <ul className="space-y-8 text-gray-300 text-base md:text-lg leading-8">

          <li className="flex gap-4">
            <span className="text-white text-xl">•</span>

            <p>
              <strong className="text-white">
                Trusted recipes.
              </strong>{" "}
              Our recipes are carefully selected and tested to help you
              prepare delicious meals with confidence, whether you're an
              experienced cook or just getting started.
            </p>
          </li>

          <li className="flex gap-4">
            <span className="text-white text-xl">•</span>

            <p>
              <strong className="text-white">
                Quick and easy.
              </strong>{" "}
              We focus on simple and practical recipes that are perfect for
              busy days. You don't need to spend hours in the kitchen to
              prepare a great meal.
            </p>
          </li>

          <li className="flex gap-4">
            <span className="text-white text-xl">•</span>

            <p>
              <strong className="text-white">
                Easy-to-find ingredients.
              </strong>{" "}
              Our recipes use ingredients that are simple to find, making
              cooking easier, affordable, and convenient.
            </p>
          </li>

          <li className="flex gap-4">
            <span className="text-white text-xl">•</span>

            <p>
              <strong className="text-white">
                Tips, tricks, tutorials, and more.
              </strong>{" "}
              Each recipe can include helpful cooking tips and simple
              instructions to help you get better results in the kitchen.
            </p>
          </li>

        </ul>

      </div>

{/* SECOND IMAGE + TEXT SECTION */}
<section className="bg-[#181818]">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">

    {/* IMAGE */}
    <div className="w-full h-[450px] md:h-[600px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifLR7uSzAXhDatqBLRxymD9GjtA5Ejkmk-GRJB-_ugw&s=10"
        alt="Cooking and recipes"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="flex items-center px-8 md:px-14 py-12 md:py-16">

      <div>
        <p className="text-[#e0a0c7] font-bold tracking-widest text-sm mb-4">
          COOK • CREATE • ENJOY
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Good Food Brings People Together
        </h2>

        <div className="space-y-5 text-gray-300 text-base md:text-lg leading-8">

          <p>
            Food is more than just something we eat. It brings people
            together, creates memories, and gives us a reason to slow down
            and enjoy the moment.
          </p>

          <p>
            That's why I believe recipes should be simple, enjoyable, and
            easy to follow. Whether you're cooking for yourself, your
            family, or friends, every meal is an opportunity to create
            something special.
          </p>

          <p>
            My goal is to make cooking feel less complicated and more
            enjoyable, one recipe at a time.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

{/* WHAT YOU'LL FIND HERE */}
<section className="bg-[#202020] py-20">

  <div className="max-w-[1200px] mx-auto px-8 md:px-14">

    {/* HEADING */}
    <div className="text-center mb-14">

      <p className="text-[#e0a0c7] font-bold tracking-widest text-sm mb-4">
        EXPLORE THE WEBSITE
      </p>

      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5">
        What You'll Find Here
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-7">
        From quick weeknight meals to delicious treats, there's something
        here for everyone who loves good food.
      </p>

    </div>


    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* CARD 1 */}
      <div className="border border-gray-700 p-8 text-center hover:border-[#e0a0c7] transition">

        <div className="text-4xl mb-5">
          🍝
        </div>

        <h3 className="text-xl font-bold mb-4">
          Easy Recipes
        </h3>

        <p className="text-gray-400 leading-7">
          Simple recipes with easy-to-follow instructions for everyday
          cooking.
        </p>

      </div>


      {/* CARD 2 */}
      <div className="border border-gray-700 p-8 text-center hover:border-[#e0a0c7] transition">

        <div className="text-4xl mb-5">
          ⚡
        </div>

        <h3 className="text-xl font-bold mb-4">
          Quick & Easy
        </h3>

        <p className="text-gray-400 leading-7">
          Delicious meals designed for busy days when you don't have much
          time to cook.
        </p>

      </div>


      {/* CARD 3 */}
      <div className="border border-gray-700 p-8 text-center hover:border-[#e0a0c7] transition">

        <div className="text-4xl mb-5">
          🥗
        </div>

        <h3 className="text-xl font-bold mb-4">
          Healthy Ideas
        </h3>

        <p className="text-gray-400 leading-7">
          Fresh and delicious meal ideas to help you discover new ways to
          enjoy food.
        </p>

      </div>


      {/* CARD 4 */}
      <div className="border border-gray-700 p-8 text-center hover:border-[#e0a0c7] transition">

        <div className="text-4xl mb-5">
          🍰
        </div>

        <h3 className="text-xl font-bold mb-4">
          Sweet Treats
        </h3>

        <p className="text-gray-400 leading-7">
          Desserts and sweet recipes for those moments when you want
          something special.
        </p>

      </div>

    </div>

  </div>

</section>

   <Footer />

    </section>
    
  );
}

export default About;