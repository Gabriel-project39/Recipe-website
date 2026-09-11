import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111111] text-white">

      {/* ================================================= */}
      {/* NEWSLETTER SECTION */}
      {/* ================================================= */}

      <section className="relative overflow-hidden border-b border-[#333333]">

        {/* Decorative circles */}

        <div className="
          absolute
          -top-24
          -left-24
          w-64
          h-64
          rounded-full
          bg-[#81406f]
          opacity-10
          blur-3xl
        " />

        <div className="
          absolute
          -bottom-32
          -right-20
          w-72
          h-72
          rounded-full
          bg-[#f0b84b]
          opacity-10
          blur-3xl
        " />


        <div className="
          relative
          max-w-6xl
          mx-auto
          px-6
          py-20
        ">

          <div className="
            max-w-3xl
            mx-auto
            text-center
          ">

            {/* Small heading */}

            <p className="
              text-[#f0b84b]
              text-xs
              md:text-sm
              font-bold
              tracking-[0.3em]
              uppercase
              mb-5
            ">
              GET THE GOOD STUFF
            </p>


            {/* Main heading */}

            <h2 className="
              font-serif
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mb-6
            ">
              Delicious ideas,
              <span className="text-[#d79abb] italic">
                {" "}delivered.
              </span>
            </h2>


            {/* Description */}

            <p className="
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              mx-auto
              mb-8
            ">
              Get fresh recipes, cooking inspiration, and delicious
              ideas delivered straight to your inbox.
            </p>


            {/* Newsletter form */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                flex
                flex-col
                sm:flex-row
                max-w-xl
                mx-auto
                gap-3
              "
            >

              <div className="
                relative
                flex-1
              ">

                <FaEnvelope
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#d79abb]
                  "
                />

                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    w-full
                    bg-[#222222]
                    border
                    border-[#444444]
                    text-white
                    placeholder-gray-500
                    pl-11
                    pr-4
                    py-4
                    outline-none
                    focus:border-[#81406f]
                    transition
                  "
                />

              </div>


              <button
                type="submit"
                className="
                  bg-[#81406f]
                  hover:bg-[#96507f]
                  text-white
                  font-bold
                  tracking-wide
                  px-8
                  py-4
                  transition
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                SUBSCRIBE
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* MAIN FOOTER */}
      {/* ================================================= */}

      <section className="
        max-w-6xl
        mx-auto
        px-6
        py-16
      ">

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
          lg:gap-16
        ">


          {/* ============================================= */}
          {/* BRAND */}
          {/* ============================================= */}

          <div className="lg:col-span-1">

            <h2 className="
              font-serif
              text-4xl
              font-bold
              text-[#d79abb]
              mb-5
            ">
              pinch
              <span className="text-gray-300">
                of
              </span>
              yum
            </h2>


            <p className="
              text-gray-400
              leading-relaxed
              text-sm
              max-w-xs
            ">
              Simple recipes made for real,
              actual, everyday life. Good food,
              easy cooking, and plenty of yum.
            </p>


            {/* Social icons */}

            <div className="
              flex
              items-center
              gap-3
              mt-7
            ">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#444444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-[#81406f]
                  hover:border-[#81406f]
                  hover:text-white
                  transition
                "
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#444444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-[#81406f]
                  hover:border-[#81406f]
                  hover:text-white
                  transition
                "
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                aria-label="Pinterest"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#444444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-[#81406f]
                  hover:border-[#81406f]
                  hover:text-white
                  transition
                "
              >
                <FaPinterestP />
              </a>


              <a
                href="#"
                aria-label="YouTube"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#444444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-[#81406f]
                  hover:border-[#81406f]
                  hover:text-white
                  transition
                "
              >
                <FaYoutube />
              </a>


              <a
                href="#"
                aria-label="TikTok"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#444444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-[#81406f]
                  hover:border-[#81406f]
                  hover:text-white
                  transition
                "
              >
                <FaTiktok />
              </a>

            </div>

          </div>


          {/* ============================================= */}
          {/* EXPLORE */}
          {/* ============================================= */}

          <div>

            <h3 className="
              text-[#f0b84b]
              text-xs
              font-bold
              tracking-[0.25em]
              mb-6
            ">
              EXPLORE
            </h3>


            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Recipes
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Start Here
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* ============================================= */}
          {/* RECIPE CATEGORIES */}
          {/* ============================================= */}

          <div>

            <h3 className="
              text-[#f0b84b]
              text-xs
              font-bold
              tracking-[0.25em]
              mb-6
            ">
              CATEGORIES
            </h3>


            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Quick & Easy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Vegetarian
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Healthy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Dinner
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-[#d79abb]
                    transition
                  "
                >
                  Breakfast
                </a>
              </li>

            </ul>

          </div>


          {/* ============================================= */}
          {/* ABOUT */}
          {/* ============================================= */}

          <div>

            <h3 className="
              text-[#f0b84b]
              text-xs
              font-bold
              tracking-[0.25em]
              mb-6
            ">
              LET'S CONNECT
            </h3>


            <p className="
              text-gray-400
              text-sm
              leading-relaxed
              mb-6
            ">
              Have a question, recipe suggestion,
              or just want to say hello?
              We'd love to hear from you.
            </p>


            <a
              href="mailto:hello@yourwebsite.com"
              className="
                inline-flex
                items-center
                gap-3
                text-[#d79abb]
                font-semibold
                hover:text-[#f0b84b]
                transition
              "
            >
              <FaEnvelope />
              hello@yourwebsite.com
            </a>


            <div className="
              mt-7
              pt-7
              border-t
              border-[#333333]
            ">

              <p className="
                text-xs
                text-gray-500
                leading-relaxed
              ">
                Made with love for people
                who believe good food
                makes life better.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BOTTOM BAR */}
      {/* ================================================= */}

      <div className="
        border-t
        border-[#333333]
      ">

        <div className="
          max-w-6xl
          mx-auto
          px-6
          py-6

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-4
        ">

          <p className="
            text-xs
            text-gray-500
            text-center
            md:text-left
          ">
            © {new Date().getFullYear()} Pinch of Yum.
            All rights reserved.
          </p>


          <div className="
            flex
            items-center
            gap-6
            text-xs
            text-gray-500
          ">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Accessibility
            </a>

          </div>


          {/* Back to top */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-2

              text-xs
              font-bold

              text-[#d79abb]

              hover:text-[#f0b84b]

              transition
            "
          >

            BACK TO TOP

            <span className="
              w-8
              h-8
              rounded-full
              border
              border-[#444444]

              flex
              items-center
              justify-center

              group-hover:border-[#f0b84b]

              transition
            ">
              <FaArrowUp />
            </span>

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;