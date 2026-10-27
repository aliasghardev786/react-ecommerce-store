import React from 'react'
import Watch from '../assets/Watch.jpg'

export default function Hero() {
  return (
   <>
    <main>
      <section className="grid min-h-[500px] items-center gap-10 bg-white px-6 py-16 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
            Welcome to <b>2X</b> Store
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Discover Your
            <span className="block text-blue-600">
              Perfect Style
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Explore our latest collection of quality products
            and find something you truly love.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
            Shop Now →
          </a>
        </div>

        <div className="flex min-h-[300px] items-center justify-center rounded-3xl bg-blue-100 p-8 md:min-h-[400px]">
          <div className="text-center">
            <div className="text-3xl md:text-4xl">
              <img src={Watch} alt='Watch' className='h-60 rounded-3xl max-sm:h-45 '/>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              New Collection
            </h3>
            <p className="mt-2 text-gray-600">
              Style meets comfort.
            </p>
          </div>
        </div>
      </section>
    </main>
   </>
  )
}
