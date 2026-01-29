import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import printerImg from '../../assets/printer.png';

const TopPicksGrid = () => {
    const products = [
        {
            category: "Trending",
            title: "Brother® MFC-L3780CDW Wireless Digital Laser Color All-In-One Printer With Refresh EZ Print Eligibility",
            price: 569.99,
            available: 73,
            image: printerImg,
            tag: "Trending",
        },
        {
            category: "Trending",
            title: "HP 58A Black Toner Cartridge, CF258A",
            price: 146.89,
            available: 108,
            image: printerImg,
            tag: "Trending",
        },
        {
            category: "Trending",
            title: "HP DesignJet Z9+ PostScript Color Inkjet Large-Format Printer, W3Z72A#B1K",
            price: 5895.09,
            available: 61,
            image: printerImg,
            tag: "Trending",
        },
        {
            category: "Trending",
            title: "Epson® WorkForce® Pro WF-7840 Wide-Format Wireless Inkjet All-In-One Color Printer",
            price: 229.99,
            available: 51,
            image: printerImg,
            tag: "Trending",
        },
    ];

    const navigate = useNavigate();

    // Function to generate a slug from the product title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/\s+/g, '-');
    };

    // Handle click on product to navigate to details page
    const handleProductClick = (productTitle) => {
        const slug = generateSlug(productTitle);
        navigate(`/product/${slug}`);
    };

    // Handle click on Add to Cart button to navigate to cart page
    const handleAddToCartClick = () => {
        navigate('/cart');  // Redirect to cart page
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* Heading */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                    Top Picks This Month
                </h2>
                <p className="text-gray-600 mt-2">
                    Explore our most popular pieces that customers can't get enough of
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                    >
                        {/* Image */}
                        <div
                            className="relative w-full aspect-square bg-gray-100 flex items-center justify-center cursor-pointer"
                            onClick={() => handleProductClick(product.title)}  // Navigate to product details page on image click
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                            {product.tag && (
                                <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                                    {product.tag}
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-sm text-indigo-600 font-medium">
                                    {product.category}
                                </h3>
                                <h2 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
                                    {product.title}
                                </h2>
                                <p className="text-gray-900 font-bold mt-2">
                                    ${product.price}
                                </p>
                                {product.available && (
                                    <p className="text-gray-500 text-sm mt-1">
                                        Available: {product.available}
                                    </p>
                                )}
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCartClick}
                                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopPicksGrid;
