import React from 'react'
import Shoes from '../assets/Shoes.jpg'
import Headphone from '../assets/Headphone.jpg'
import Watch from '../assets/Watch.jpg'
import Backpack from '../assets/Backpack.jpg'
import Perfume from '../assets/Perfume.jpg'
import Makeup from '../assets/Makeup.jpg'
import HardBall from '../assets/HardBall.jpg'
import Glasses from '../assets/Glasses.jpg'

export default function Products({onAddToCart}) {
  const products = [
    {
      id: 1,
      name: "Running Sneakers",
      price: 4500,
      category: "Shoes",
      img : Shoes,alt: "Shoes",width:200,
    },
    {
      id: 2,
      name: "Headphones",
      price: 3200,
      category: "Electronics",
      img : Headphone,alt: "headphone",width:200,
    },
    {
      id: 3,
      name: "Classic Watch",
      price: 5500,
      category: "Accessories",
      img : Watch,alt: "watch",width:200,
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 2800,
      category: "Bags",
      img : Backpack,alt: "backpack",width:200,
    },
   {
      id: 5,
      name: "Divalicious Spray",
      price: 4200,
      category: "Perfume",
      img : Perfume,alt: "perfume",width:200,
    },
    {
      id: 6,
      name: "Makeup Kit Box",
      price: 3100,
      category: "Makeup",
      img : Makeup,alt: "makeup",width:200,
    },
     {
      id: 7,
      name: "Hard Ball Kit",
      price: 115500,
      category: "Cricket",
      img : HardBall,alt: "hardball kit",width:200,
    },
     {
      id: 8,
      name: "Sun Glasses",
      price:2600,
      category: "Glasses",
      img : Glasses,alt: "glasses",width:200,
    },
  ];

  return (
    <section id="products" className="bg-gray-50 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Our Collection
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-600">
          Explore our handpicked products.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-44 items-center justify-center rounded-lg">
  <img
    src={product.img}
    alt={product.alt}
    width={product.width}
    className="h-full object-contain"
  />
</div>

              <p className="mt-4 text-sm text-gray-500">
                {product.category}
              </p>

              <h3 className="mt-1 text-lg font-bold text-gray-900">
                {product.name}
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                Rs. {product.price.toLocaleString()}
              </p>

              <button
                type="button"
                onClick={()=> onAddToCart(product)}
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 active:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}