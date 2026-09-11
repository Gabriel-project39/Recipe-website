import React from "react";

function About() {
  return (
    <section className="bg-[#202020] text-white min-h-screen">
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="w-full h-[500px] md:h-[700px]">
          <img
            src="/images/about.jpg"
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
              Gabriel!
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