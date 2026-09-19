import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";

function RecipeCategorie() {

  const recipes = [
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

    {
      id: "creamy-chicken-pasta",
      image:
        "https://pinchofyum.com/tachyon/Summer-Produce-Recipes-02.jpg?resize=800%2C800&zoom=0.5",
      date: "JULY 8, 2026",
      title: "Creamy Chicken Pasta",
      description:
        "An easy and delicious dinner that's perfect for busy weeknights.",
    },
  ];


  return (
    <section className="min-h-screen bg-[#111111] text-white">

      {/* ===================================================== */}
      {/* NAVIGATION */}
      {/* ===================================================== */}

      <div className="border-b border-gray-700">

        <div className="max-w-[1152px] mx-auto px-6">

          <div className="h-24 flex items-center justify-between">

            <Link
              to="/"
              className="text-4xl font-serif"
            >
              <span className="text-[#e0a0c7]">pinch</span>
              <span className="text-gray-400">of</span>
              <span className="text-[#e0a0c7]">yum</span>
            </Link>


            <Link
              to="/"
              className="text-[#e0a0c7] font-bold"
            >
              ← HOME
            </Link>

          </div>

        </div>

      </div>


      {/* ===================================================== */}
      {/* PAGE CONTENT */}
      {/* ===================================================== */}

      <div className="max-w-[1152px] mx-auto px-6">

        {/* TITLE */}

        <div className="pt-14 pb-10">

          <p
            className="
              text-[#f2b53d]
              text-[13px]
              font-bold
              tracking-[0.22em]
              mb-4
            "
          >
            RECIPES
          </p>

          <h1
            className="
              text-white
              font-serif
              text-5xl
              md:text-6xl
              font-bold
            "
          >
            The Latest &amp; Greatest
          </h1>

        </div>


        {/* ================================================= */}
        {/* RECIPE LIST */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[746px_342px] gap-16 pb-20">

          <div>

            {recipes.map((recipe) => (

              <article
                key={recipe.id}
                className="
                  pb-8
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
                    gap-5
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


                  {/* CONTENT */}

                  <div>

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


                    <h2
                      className="
                        font-serif
                        font-bold
                        text-3xl
                        leading-tight
                        hover:text-[#e0a0c7]
                        transition
                      "
                    >
                      {recipe.title}
                    </h2>


                    <p
                      className="
                        mt-5
                        text-gray-300
                        font-serif
                        text-base
                        leading-relaxed
                      "
                    >
                      {recipe.description}
                    </p>


                    {/* BUTTON */}

                    <Link
                      to={`/recipe-details/${recipe.id}`}
                      className="
                        inline-block
                        mt-5
                        text-[#f2b53d]
                        font-bold
                        tracking-[0.05em]
                        hover:text-[#e0a0c7]
                        transition
                      "
                    >
                      CONTINUE READING
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* SIDEBAR */}

          <aside className="hidden lg:block">

            <img
              src="https://pinchofyum.com/content/assets/images/sidebar/sidebar-freezer-meals-350x523.png"
              alt="20 Healthy Freezer Meals"
              className="w-full"
            />

          </aside>

        </div>

      </div>


      {/* ===================================================== */}
      {/* FLOATING BUTTONS */}
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

        <span className="text-[#e0a0c7] text-sm font-bold">
          182.0k
        </span>


        <button
          className="
            w-12
            h-12
            rounded-full
            bg-[#111111]
            border
            border-gray-700
            flex
            items-center
            justify-center
            text-[#e0a0c7]
          "
        >
          <FaHeart />
        </button>


        <Link
          to="/categories"
          className="
            w-12
            h-12
            rounded-full
            bg-[#81406f]
            flex
            items-center
            justify-center
            text-white
            hover:scale-110
            transition
          "
        >
          <FaSearch />
        </Link>

      </div>

    </section>
  );
}

export default RecipeCategorie;