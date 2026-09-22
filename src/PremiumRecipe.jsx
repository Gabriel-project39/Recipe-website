import {
  FaHeart,
  FaRegHeart,
  FaPrint,
  FaStar,
  FaClock,
  FaUtensils,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

function PremiumRecipe() {
  const ingredients = [
    {
      section: "For the chicken",
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
      section: "For the pasta",
      items: [
        "250g spaghetti or linguine",
        "1 cup heavy cream",
        "1/2 cup Parmesan cheese",
        "1 lemon",
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
      description:
        "Place the chicken breasts between two sheets of parchment paper and gently pound them until evenly thick. Season both sides with salt, black pepper and paprika.",
    },
    {
      number: "02",
      title: "Create the crispy coating",
      description:
        "Combine Parmesan cheese, breadcrumbs and minced garlic in a shallow bowl. Press each chicken breast firmly into the mixture until completely coated.",
    },
    {
      number: "03",
      title: "Cook until golden",
      description:
        "Heat olive oil in a large skillet over medium heat. Cook the chicken for 4–5 minutes per side until deeply golden, crispy and cooked through.",
    },
    {
      number: "04",
      title: "Make the lemon cream sauce",
      description:
        "Melt the butter in the same pan. Add garlic and cook briefly before adding cream, Parmesan and fresh lemon juice. Stir until smooth and creamy.",
    },
    {
      number: "05",
      title: "Bring everything together",
      description:
        "Toss the cooked pasta through the creamy lemon sauce. Slice the crispy chicken and arrange it over the pasta. Finish with Parmesan and fresh parsley.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1c1b19]">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="border-b border-[#ded9d0] bg-[#f7f4ef]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <p className="text-xs tracking-[0.3em] uppercase text-[#77716a]">
            The Recipe Collection
          </p>

          <p className="hidden sm:block text-xs tracking-[0.2em] uppercase text-[#77716a]">
            Dinner · 45 Minutes
          </p>

        </div>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pt-10 md:pt-16">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

          {/* IMAGE */}

          <div className="relative">

            <div className="overflow-hidden">

              <img
                src="/images/latest1.jpg"
                alt="Crispy Parmesan Chicken with Creamy Lemon Pasta"
                className="
                  w-full
                  h-[420px]
                  sm:h-[520px]
                  lg:h-[650px]
                  object-cover
                "
              />

            </div>

            {/* IMAGE LABEL */}

            <div className="
              absolute
              left-5
              bottom-5
              bg-[#f7f4ef]
              px-5
              py-3
            ">

              <p className="text-[10px] tracking-[0.3em] uppercase font-bold">
                Chef's Table
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="py-4 lg:py-10">

            <p className="
              text-[#9a6748]
              text-sm
              font-bold
              tracking-[0.3em]
              uppercase
            ">
              Signature Dinner
            </p>


            <h1 className="
              mt-5
              font-serif
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-[0.95]
              tracking-tight
            ">
              Crispy Parmesan
              <span className="block italic text-[#9a6748]">
                Chicken
              </span>
              <span className="block">
                with Lemon Pasta
              </span>
            </h1>


            <p className="
              mt-7
              text-lg
              leading-8
              text-[#68625c]
              max-w-xl
            ">
              Golden, parmesan-crusted chicken served over
              silky lemon cream pasta. Rich enough for a
              special dinner, simple enough for a Tuesday night.
            </p>


            {/* RATING */}

            <div className="flex items-center gap-4 mt-7">

              <div className="flex gap-1 text-[#c68b3c]">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <span className="text-sm font-semibold">
                4.9
              </span>

              <span className="text-sm text-[#77716a]">
                · 128 reviews
              </span>

            </div>


            {/* ACTIONS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <button className="
                flex
                items-center
                gap-3
                bg-[#1c1b19]
                text-white
                px-6
                py-4
                text-sm
                font-bold
                tracking-wider
                uppercase
                hover:bg-[#9a6748]
                transition
              ">
                <FaRegHeart />
                Save Recipe
              </button>


              <button className="
                flex
                items-center
                gap-3
                border
                border-[#bbb4aa]
                px-6
                py-4
                text-sm
                font-bold
                tracking-wider
                uppercase
                hover:bg-white
                transition
              ">
                <FaPrint />
                Print
              </button>

            </div>


            {/* RECIPE STATS */}

            <div className="
              grid
              grid-cols-2
              sm:grid-cols-4
              border-t
              border-b
              border-[#d7d1c8]
              mt-10
              py-6
              gap-5
            ">

              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Prep
                </p>
                <p className="font-semibold mt-1">
                  15 min
                </p>
              </div>


              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Cook
                </p>
                <p className="font-semibold mt-1">
                  30 min
                </p>
              </div>


              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Total
                </p>
                <p className="font-semibold mt-1">
                  45 min
                </p>
              </div>


              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#888078]">
                  Serves
                </p>
                <p className="font-semibold mt-1">
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

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-[350px_1fr] gap-16">


          {/* =================================================
              INGREDIENTS
          ================================================= */}

          <aside>

            <div className="
              lg:sticky
              lg:top-8
            ">

              <p className="
                text-[#9a6748]
                text-xs
                uppercase
                tracking-[0.3em]
                font-bold
              ">
                What you'll need
              </p>


              <h2 className="
                font-serif
                text-4xl
                mt-3
              ">
                Ingredients
              </h2>


              <p className="
                text-sm
                text-[#77716a]
                mt-3
                leading-6
              ">
                Everything you need to create this dish
                from start to finish.
              </p>


              <div className="mt-8 space-y-9">

                {ingredients.map((group) => (

                  <div key={group.section}>

                    <h3 className="
                      font-semibold
                      text-sm
                      uppercase
                      tracking-widest
                      border-b
                      border-[#d8d2c9]
                      pb-3
                    ">
                      {group.section}
                    </h3>


                    <ul className="mt-4 space-y-4">

                      {group.items.map((item) => (

                        <li
                          key={item}
                          className="
                            flex
                            items-start
                            gap-3
                            text-[#5e5953]
                            text-sm
                            leading-6
                          "
                        >

                          <FaCheck className="
                            text-[#9a6748]
                            mt-1
                            text-xs
                            shrink-0
                          " />

                          {item}

                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </div>

          </aside>


          {/* =================================================
              INSTRUCTIONS
          ================================================= */}

          <div>

            <div className="
              border-b
              border-[#d8d2c9]
              pb-8
            ">

              <p className="
                text-[#9a6748]
                text-xs
                uppercase
                tracking-[0.3em]
                font-bold
              ">
                The method
              </p>


              <h2 className="
                font-serif
                text-4xl
                md:text-5xl
                mt-3
              ">
                How to make it
              </h2>

            </div>


            <div>

              {steps.map((step) => (

                <div
                  key={step.number}
                  className="
                    grid
                    sm:grid-cols-[80px_1fr]
                    gap-5
                    py-10
                    border-b
                    border-[#d8d2c9]
                  "
                >

                  <div>

                    <span className="
                      font-serif
                      text-3xl
                      text-[#9a6748]
                    ">
                      {step.number}
                    </span>

                  </div>


                  <div>

                    <h3 className="
                      font-serif
                      text-2xl
                      md:text-3xl
                    ">
                      {step.title}
                    </h3>


                    <p className="
                      mt-4
                      text-[#68625c]
                      leading-8
                      max-w-2xl
                    ">
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* =================================================
                CHEF NOTE
            ================================================= */}

            <div className="
              mt-12
              bg-[#e9e1d5]
              p-8
              md:p-10
            ">

              <p className="
                text-[#9a6748]
                text-xs
                uppercase
                tracking-[0.3em]
                font-bold
              ">
                Chef's note
              </p>


              <p className="
                font-serif
                italic
                text-2xl
                md:text-3xl
                leading-relaxed
                mt-4
              ">
                Don't rush the chicken. Let the crust
                develop a deep golden color before turning
                it — that's where the flavor lives.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUTRITION
      ===================================================== */}

      <section className="bg-[#1c1b19] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-end
            justify-between
            gap-8
          ">

            <div>

              <p className="
                text-[#c68b3c]
                text-xs
                uppercase
                tracking-[0.3em]
                font-bold
              ">
                Per serving
              </p>

              <h2 className="
                font-serif
                text-4xl
                mt-3
              ">
                Nutrition
              </h2>

            </div>


            <p className="text-sm text-gray-400">
              Nutritional values are estimates.
            </p>

          </div>


          <div className="
            grid
            grid-cols-2
            md:grid-cols-5
            mt-10
            border-t
            border-gray-700
          ">

            {[
              ["Calories", "642"],
              ["Protein", "42g"],
              ["Carbs", "54g"],
              ["Fat", "29g"],
              ["Fiber", "4g"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="
                  py-7
                  border-b
                  md:border-b-0
                  md:border-r
                  border-gray-700
                  first:md:border-l
                  px-5
                "
              >

                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  {label}
                </p>

                <p className="
                  font-serif
                  text-3xl
                  mt-2
                ">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#f7f4ef]">

        <div className="
          max-w-4xl
          mx-auto
          px-6
          py-20
          text-center
        ">

          <p className="
            text-[#9a6748]
            text-xs
            uppercase
            tracking-[0.3em]
            font-bold
          ">
            More from the kitchen
          </p>


          <h2 className="
            font-serif
            text-4xl
            md:text-5xl
            mt-4
          ">
            Ready for your next recipe?
          </h2>


          <button className="
            mt-8
            inline-flex
            items-center
            gap-3
            bg-[#1c1b19]
            text-white
            px-7
            py-4
            font-bold
            uppercase
            tracking-widest
            text-sm
            hover:bg-[#9a6748]
            transition
          ">
            Explore Recipes
            <FaArrowRight />
          </button>

        </div>

      </section>

    </main>
  );
}

export default PremiumRecipe;