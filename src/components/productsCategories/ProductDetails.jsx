import React, { useState } from "react";

const ProductDetails = () => {
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "/images/printer-1.png",
        "/images/printer-2.png",
        "/images/printer-3.png",
    ];

    return (
        <div className="w-full bg-slate-50 py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white border rounded-xl p-6">

                    {/* LEFT : Images */}
                    <div>
                        {/* Main Image */}
                        <div className="border rounded-lg bg-gray-100 flex items-center justify-center aspect-square">
                            <img
                                src={images[activeImage]}
                                alt="Product"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 mt-4">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`border rounded-md p-2 bg-gray-50
                                        ${activeImage === index
                                            ? "border-gray-900"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt="thumb"
                                        className="w-16 h-16 object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT : Info */}
                    <div className="flex flex-col gap-4">
                        <span className="text-sm text-indigo-600 font-medium">
                            Inkjet Printers
                        </span>

                        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                            HP OfficeJet Pro 9125e Wireless All-in-One Printer
                        </h1>

                        <p className="text-gray-600 leading-relaxed">
                            Print, scan, copy and fax with professional-quality
                            results. Ideal for office use with fast printing,
                            duplex support, and wireless connectivity.
                        </p>

                        {/* Price */}
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-2xl font-bold text-gray-900">
                                $209.99
                            </span>
                            <span className="text-gray-400 line-through">
                                $309.99
                            </span>
                        </div>

                        {/* Stock */}
                        <p className="text-sm text-green-600 font-medium">
                            ✔ In Stock
                        </p>

                        {/* Actions */}
                        <div className="flex gap-4 mt-4">
                            <button className="px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
                                Add to Cart
                            </button>
                            <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-100 transition">
                                Buy Now
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-6 border-t pt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Key Features
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Wireless printing & mobile support</li>
                                <li>Automatic duplex printing</li>
                                <li>Print, Scan, Copy & Fax</li>
                                <li>Energy-efficient performance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-10 bg-white border rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Product Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        LED and inkjet printers are designed for businesses and
                        home offices that require reliable output, lower
                        maintenance, and consistent performance. This model
                        delivers sharp text, vibrant colors, and seamless
                        connectivity to boost productivity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
