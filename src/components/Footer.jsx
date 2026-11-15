import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id='footer' className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:px-10 lg:grid-cols-3">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            2x <span className="text-blue-600">Store</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
            Discover quality products at great prices.
            Your trusted destination for everyday shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="#Home"
                className="transition hover:text-blue-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="transition hover:text-blue-600"
              >
                Products
              </a>
            </li>

            <li>
              <Link
                to="/cart"
                className="transition hover:text-blue-600"
              >
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <span className="block text-gray-500">
                <i className="fa-solid fa-envelope mr-2"></i>
                 Email:
              </span>
              <a
                href="mailto:aliasghar.dev.official@gmail.com"
                className="break-all transition hover:text-blue-600 ml-7"
              >
              aliasghar.dev.official@gmail.com
              </a>
            </li>

            <li>
              <span className="block text-gray-500">
              <i className="fa-solid fa-phone mr-2"></i>
                Phone:
              </span>
              <a
                href="tel:+92-324-171-3010"
                className="transition hover:text-blue-600 ml-7"
              >
                +92 324 1713010
              </a>
            </li>

            <li>
              <span className="block text-gray-500">
                <i class="fa-brands fa-linkedin mr-2"></i>
                LinkedIn:
              </span>
              <a
                href="https://www.linkedin.com/in/ali-asghar-356785447"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-600 ml-7"
              >
                Visit my LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-gray-500 sm:flex-row md:px-10">
          <p>
            © {new Date().getFullYear()} 2x-store Store. All rights reserved.
          </p>

          <p>
            Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
