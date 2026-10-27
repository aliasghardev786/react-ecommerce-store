import React from 'react'

function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-950 px-6 py-20 text-center text-white md:py-28 ">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Get to Know Us
        </p>

        <h1 className="text-4xl font-extrabold md:text-6xl">
          About <span className="text-blue-500">2X Store</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          Your simple and convenient destination for exploring
          products and enjoying a better online shopping experience.
        </p>
      </section>

      {/* About Store */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            Who We Are
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Welcome to 2X Store
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            2X Store is an e-commerce website project created
            to make online product browsing simple, smooth, and
            enjoyable. Visitors can explore available products,
            view prices, and add their favorite items to a shopping cart.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our goal is to create a clean, user-friendly shopping
            experience that works smoothly across mobile phones,
            tablets, and desktop computers.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🛍️
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            Shopping Made Simple
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Explore products, add items to your cart, and enjoy
            a simple and responsive website designed with a focus
            on usability and clean design.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            Our Mission
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            A Better Experience for Everyone
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Our mission is to build a smooth, accessible, and
            visually appealing online shopping experience. We
            believe a good website should be easy to navigate,
            responsive on every screen, and simple for visitors
            to use.
          </p>
        </div>
      </section>

      {/* About Developer */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-50 p-8 md:p-12">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            About the Developer
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Built with Passion for Web Development
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Hi! I am a Front-End Developer learning and building
            modern websites using HTML, CSS, JavaScript, React,
            and Tailwind CSS. I enjoy turning ideas into clean,
            responsive, and interactive user interfaces.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            2X Store is one of my learning projects, created to
            improve my React development skills and practice building
            reusable components, page navigation, and shopping cart
            functionality.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            I am continuously learning and working to improve my
            skills by building practical projects.
          </p>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="bg-gray-950 px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold md:text-3xl">
          Thank You for Visiting 2X Store!
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
          Thank you for taking the time to explore our website.
          We hope you enjoy browsing Nova Store.
        </p>
      </section>

    </main>
  );
}

export default About;
