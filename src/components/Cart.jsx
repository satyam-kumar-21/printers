import React, { useState } from "react";
import printer from "../assets/printer.png";

const Cart = () => {
    const [giftWrap, setGiftWrap] = useState(false);

    const cartItems = [
        {
            id: 1,
            title: "HP OfficeJet Pro 9125e Wireless All-in-One Printer",
            price: 209.99,
            quantity: 1,
            image: printer,
        },
        {
            id: 2,
            title: "HP 58A Black Toner Cartridge, CF258A",
            price: 146.89,
            quantity: 2,
            image: printer,
        },
    ];

    const subtotal =
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
        (giftWrap ? 10 : 0);

    return (
        <div className="w-full bg-slate-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Header */}
                <section className="w-full bg-gray-100/80">
                    <div className="w-full px-4 py-10 md:py-12 text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Shopping Cart</h1>
                        <p className="mt-3 text-sm text-gray-600">
                            Home <span className="mx-1">/</span>
                            <span className="font-medium text-gray-900">Cart</span>
                        </p>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            Ready to print? Complete your order.
                        </p>
                    </div>
                    <div className="border-b border-gray-300"></div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    {/* LEFT : Cart Items */}
                    <div className="lg:col-span-2 space-y-4">

                        {/* Table for Desktop */}
                        <div className="hidden md:grid grid-cols-4 gap-4 text-sm font-semibold text-gray-500 border-b pb-3">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        {/* Mobile & Desktop Items */}
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border rounded-xl p-4 flex flex-col md:grid md:grid-cols-4 md:items-center gap-4"
                                >
                                    {/* Product */}
                                    <div className="flex gap-4 items-center">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
                                        />
                                        <p className="text-sm font-medium text-gray-900 line-clamp-2">
                                            {item.title}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <p className="text-gray-700 font-medium mt-2 md:mt-0">
                                        ${item.price}
                                    </p>

                                    {/* Quantity */}
                                    <p className="text-gray-700 mt-2 md:mt-0">{item.quantity}</p>

                                    {/* Total */}
                                    <p className="font-semibold text-gray-900 mt-2 md:mt-0">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT : Summary */}
                    <div className="bg-white border rounded-xl p-6 space-y-5">

                        {/* Gift Wrap */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                checked={giftWrap}
                                onChange={() => setGiftWrap(!giftWrap)}
                                className="mt-1"
                            />
                            <p className="text-sm text-gray-700">
                                Add gift wrap. <strong>$10.00</strong>
                                <br />
                                <span className="text-gray-500">(You can choose or not)</span>
                            </p>
                        </div>

                        {/* Discount */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">Discount code</label>
                            <div className="flex gap-2 mt-2">
                                <input
                                    type="text"
                                    placeholder="Enter code"
                                    className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Special instructions for seller
                            </label>
                            <textarea
                                rows="3"
                                className="w-full mt-2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Write here..."
                            />
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                            <div>🚚 Free Shipping</div>
                            <div>🎁 Gift Package</div>
                            <div>↩️ Easy Returns</div>
                            <div>🛡️ One Year Warranty</div>
                        </div>

                        {/* Total */}
                        <div className="border-t pt-4">
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span>${subtotal.toFixed(2)} USD</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Taxes and shipping calculated at checkout
                            </p>
                        </div>

                        {/* Checkout */}
                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                            Checkout
                        </button>

                        {/* Payments */}
                        <div className="text-sm text-gray-500 text-center">
                            We accept
                            <div className="flex justify-center gap-3 mt-2">
                                <span>💳</span>
                                <span>💰</span>
                                <span>🏦</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
