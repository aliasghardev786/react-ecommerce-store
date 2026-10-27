import React from 'react'

function Cart({ cart, onRemove }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="mt-6 text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {cart.map((product, index) => (
                <div
  key={`${product.id}-${index}`}
  className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
>
  <div className="flex items-center gap-4">
    <img
      src={product.img}
      alt={product.alt}
      className="h-16 w-16 shrink-0 rounded-lg object-cover"
    />

    <div className="min-w-0">
      <h2 className="font-bold text-gray-900 break-words">
        {product.name}
      </h2>

      <p className="mt-1 text-blue-600">
        Rs. {product.price.toLocaleString()}
      </p>
    </div>
  </div>

  <button
    onClick={() => onRemove(index)}
    className="w-full rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700 hover:bg-red-200 sm:w-auto"
  >
    Remove
  </button>
</div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-5">
              <h2 className="text-xl font-bold text-gray-900">
                Total: Rs. {totalPrice.toLocaleString()}
              </h2>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Cart;
