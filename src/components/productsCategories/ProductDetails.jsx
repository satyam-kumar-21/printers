import React from "react";
import { useParams } from "react-router-dom";
import printerImg from "../../assets/printer.png"; // fallback image

const ProductDetails = () => {
    const { productSlug } = useParams();

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, "") // remove special chars
            .replace(/\s+/g, "-"); // replace spaces with -
    };

    const allProducts = [
        // All-in-One Printers
        {
            category: "All-in-One Printers",
            title: "HP OfficeJet Pro 9125e Wireless All-in-One Color Inkjet Printer",
            description: "Print, scan, copy, fax, duplex, best for office, 3-mo free Instant Ink, AI-enabled",
            price: "209.99",
            originalPrice: "309.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP OfficeJet Pro 9125e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },
        {
            category: "All-in-One Printers",
            title: "HP Envy 6155e Wireless All-in-One Color Inkjet Printer",
            description: "Prints, scans, copies, duplex, great for home, 3-mo free Instant Ink, AI-enabled",
            price: "119.99",
            originalPrice: "159.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Envy 6155e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },
        {
            category: "All-in-One Printers",
            title: "HP OfficeJet Pro 8139e Wireless All-in-One Color Inkjet Printer",
            description: "Print, scan, copy, best for home, with 1 year of Instant Ink included, AI-enabled",
            price: "179.99",
            originalPrice: "279.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP OfficeJet Pro 8139e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },

        // Inkjet Printers
        {
            category: "Inkjet Printers",
            title: "HP Smart Tank 6001 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (2H0B9A)",
            price: "269.99",
            originalPrice: "369.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 6001 Wireless All-in-One Ink Tank Printer"
            )}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP Smart Tank 7602 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (28B98A)",
            price: "349.99",
            originalPrice: "469.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 7602 Wireless All-in-One Ink Tank Printer"
            )}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP Smart Tank 5101 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (1F3Y0A)",
            price: "189.99",
            originalPrice: "259.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 5101 Wireless All-in-One Ink Tank Printer"
            )}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP OfficeJet 200 Portable Wireless Inkjet Color Printer",
            description: "",
            price: "349.99",
            originalPrice: "419.99",
            image: printerImg,
            link: `/product/${generateSlug("HP OfficeJet 200 Portable Wireless Inkjet Color Printer")}`,
        },

        // Ink Toner
        {
            category: "Ink Toner",
            title: "HP OfficeJet Pro 9125e Wireless All-in-One Color Inkjet Printer",
            description: "Print, scan, copy, fax, duplex, best for office, 3-mo free Instant Ink, AI-enabled",
            price: "209.99",
            originalPrice: "309.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP OfficeJet Pro 9125e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },

        // Large Format Printers
        {
            category: "Large Format Printers",
            title: "HP Envy 6155e Wireless All-in-One Color Inkjet Printer",
            description: "Prints, scans, copies, duplex, great for home, 3-mo free Instant Ink, AI-enabled",
            price: "119.99",
            originalPrice: "159.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Envy 6155e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },

        // Laser Printers
        {
            category: "Laser Printers",
            title: "HP OfficeJet Pro 8139e Wireless All-in-One Color Inkjet Printer",
            description: "Print, scan, copy, best for home, with 1 year of Instant Ink included, AI-enabled",
            price: "179.99",
            originalPrice: "279.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP OfficeJet Pro 8139e Wireless All-in-One Color Inkjet Printer"
            )}`,
        },

        // LED Printers
        {
            category: "Led Printers",
            title: "HP Smart Tank 6001 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (2H0B9A)",
            price: "269.99",
            originalPrice: "369.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 6001 Wireless All-in-One Ink Tank Printer"
            )}`,
        },
        {
            category: "Led Printers",
            title: "HP Smart Tank 7602 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (28B98A)",
            price: "349.99",
            originalPrice: "469.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 7602 Wireless All-in-One Ink Tank Printer"
            )}`,
        },
        {
            category: "Led Printers",
            title: "HP Smart Tank 5101 Wireless All-in-One Ink Tank Printer",
            description: "Up to 2 years of ink included, AI-enabled (1F3Y0A)",
            price: "189.99",
            originalPrice: "259.99",
            image: printerImg,
            link: `/product/${generateSlug(
                "HP Smart Tank 5101 Wireless All-in-One Ink Tank Printer"
            )}`,
        },



        //mega deals
        {
            category: "Inkjet Printers",
            title: "HP LaserJet M110w Wireless Printer",
            description: "",
            price: "549.00",
            originalPrice: "699.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet M110w Wireless Printer")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro 4201dw Wireless Laser Color",
            description: "",
            price: "549.00",
            originalPrice: "699.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro 4201dw Wireless Laser Color")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet M209dw Wireless Black & White",
            description: "",
            price: "199.00",
            originalPrice: "299.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet M209dw Wireless Black & White")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro 4001n Laser Monochrome",
            description: "",
            price: "289.00",
            originalPrice: "379.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro 4001n Laser Monochrome")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP Color LaserJet Pro 3201dw Wireless",
            description: "",
            price: "359.00",
            originalPrice: "399.00",
            image: printerImg,
            link: `/product/${generateSlug("HP Color LaserJet Pro 3201dw Wireless")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet MFP M234sdw Wireless All-In-One",
            description: "",
            price: "279.00",
            originalPrice: "388.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet MFP M234sdw Wireless All-In-One")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro MFP 3101fdw Wireless",
            description: "",
            price: "289.00",
            originalPrice: "379.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro MFP 3101fdw Wireless")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro MFP 4301fdw All-In-One",
            description: "",
            price: "759.00",
            originalPrice: "859.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro MFP 4301fdw All-In-One")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP Color LaserJet Pro MFP 3301fdw",
            description: "",
            price: "539.00",
            originalPrice: "639.00",
            image: printerImg,
            link: `/product/${generateSlug("HP Color LaserJet Pro MFP 3301fdw")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro MFP 4101fdw All-in-One",
            description: "",
            price: "539.00",
            originalPrice: "659.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro MFP 4101fdw All-in-One")}`,
        },



        // pics perfect 

        {
            category: "Inkjet Printers",
            title: "HP Smart Tank 7602 Wireless All-in-One Ink Tank Printer with up to 2 years of ink included, AI-enabled (28B98A)",
            description: "A reliable and efficient all-in-one printer with wireless connectivity and high-quality prints.",
            price: "539.00",
            originalPrice: "659.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro MFP 4101fdw All-in-One")}`,
        },
        {
            category: "Inkjet Printers",
            title: "Epson® WorkForce® Pro WF-4830 Wireless Inkjet All-In-One Color Printer",
            description: "High-speed, all-in-one wireless printer with efficient features for home and office use.",
            price: "599.00",
            originalPrice: "699.00",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro MFP 4301fdw All-In-One")}`,
        },
        {
            category: "Laser Printers",
            title: "HP 61 Black Ink Cartridge, CH561WN",
            description: "A compact and efficient printer that delivers high-quality prints at a low cost per page.",
            price: "99.99",
            originalPrice: "129.99",
            image: printerImg,
            link: `/product/${generateSlug("HP LaserJet Pro M15w Printer, Compact and Fast")}`,
        },
        {
            category: "Laser Printers",
            title: "Brother HL-L3220CDW Wireless Compact Digital Color Printer, Laser Quality Output, Refresh EZ Print Eligibility",
            description: "Monochrome laser printer with fast printing and wireless capabilities for home or office use.",
            price: "149.99",
            originalPrice: "189.99",
            image: printerImg,
            link: `/product/${generateSlug("Brother HL-L2350DW Monochrome Laser Printer")}`,
        },
        {
            category: "All-in-One Printers",
            title: "Canon PIXMA TR4520 Wireless All-in-One Printer",
            description: "An affordable all-in-one printer that delivers high-quality prints and versatile features for home or office.",
            price: "199.99",
            originalPrice: "259.99",
            image: printerImg,
            link: `/product/${generateSlug("Canon PIXMA TR4520 Wireless All-in-One Printer")}`,
        },
        {
            category: "Inkjet Printers",
            title: "HP LaserJet Pro M15w Printer, Compact and Fast",
            description: "A high-performance, wireless inkjet printer that offers advanced features for businesses and professionals.",
            price: "149.99",
            originalPrice: "279.99",
            image: printerImg,
            link: `/product/${generateSlug("Epson® WorkForce® Pro WF-4830 Wireless Inkjet All-In-One Color Printer")}`,
        },
        {
            category: "Supertank Printers",
            title: "Epson EcoTank ET-2720 Wireless Color All-in-One Supertank Printer",
            description: "Eco-friendly and efficient printer with ultra-low-cost ink and easy wireless connectivity.",
            price: "249.99",
            originalPrice: "319.99",
            image: printerImg,
            link: `/product/${generateSlug("Epson EcoTank ET-2720 Wireless Color All-in-One Supertank Printer")}`,
        },
        {
            category: "Inkjet Printers",
            title: "Epson EcoTank ET-2720 Wireless Color All-in-One Supertank Printer",
            description: "Affordable all-in-one color printer for everyday home and office tasks, with wireless capabilities.",
            price: "179.99",
            originalPrice: "229.99",
            image: printerImg,
            link: `/product/${generateSlug("HP ENVY 6055e All-in-One Wireless Color Printer")}`,
        },
        {
            category: "Laser Printers",
            title: "HP ENVY 6055e All-in-One Wireless Color Printer",
            description: "Compact color laser printer offering high-quality output and wireless printing capabilities.",
            price: "284.99",
            originalPrice: "334.99",
            image: printerImg,
            link: `/product/${generateSlug("Brother HL-L3220CDW Wireless Compact Digital Color Printer")}`,
        },
        {
            category: "Inkjet Printers",
            title: "Epson Expression Home XP-4100 Wireless Color Printer",
            description: "Portable and efficient inkjet printer for business professionals on-the-go, with wireless connectivity.",
            price: "349.99",
            originalPrice: "419.99",
            image: printerImg,
            link: `/product/${generateSlug("HP OfficeJet 200 Portable Wireless Inkjet Color Printer")}`,
        },
        {
            category: "Laser Printers",
            title: "Canon PIXMA MG3620 Wireless All-in-One Printer",
            description: "Color laser printer with fast printing speeds, offering high-quality prints and versatile features.",
            price: "539.00",
            originalPrice: "639.00",
            image: printerImg,
            link: `/product/${generateSlug("HP Color LaserJet Pro MFP 3301fdw")}`,
        },
        {
            category: "Laser Printers",
            title: "Brother HL-L2350DW Monochrome Laser Printer",
            description: "Color laser printer with fast printing speeds, offering high-quality prints and versatile features.",
            price: "539.00",
            originalPrice: "639.00",
            image: printerImg,
            link: `/product/${generateSlug("HP Color LaserJet Pro MFP 3301fdw")}`,
        },


        // top pics 
        {
            category: "Laser Printers",
            title: "Brother® MFC-L3780CDW Wireless Digital Laser Color All-In-One Printer With Refresh EZ Print Eligibility",
            description: "Color laser printer with fast printing speeds, offering high-quality prints and versatile features.",
            price: "539.00",
            originalPrice: "639.00",
            image: printerImg,  // Replace with the actual image source
            link: `/product/${generateSlug("HP Color LaserJet Pro MFP 3301fdw")}`,
        },
        {
            category: "Laser Printers",
            title: "HP 58A Black Toner Cartridge, CF258A",
            description: "All-in-one monochrome laser printer with wireless connectivity, fast printing, and high yield.",
            price: "539.00",
            originalPrice: "659.00",
            image: printerImg,  // Replace with the actual image source
            link: `/product/${generateSlug("HP LaserJet Pro MFP 4101fdw All-in-One")}`,
        },
        {
            category: "Laser Printers",
            title: "HP DesignJet Z9+ PostScript Color Inkjet Large-Format Printer, W3Z72A#B1K",
            description: "Compact monochrome laser printer with duplex printing and wireless connectivity.",
            price: "149.99",
            originalPrice: "199.99",
            image: printerImg,  // Replace with the actual image source
            link: `/product/${generateSlug("Brother HL-L2350DW Monochrome Laser Printer")}`,
        },
        {
            category: "Laser Printers",
            title: "Epson® WorkForce® Pro WF-7840 Wide-Format Wireless Inkjet All-In-One Color Printer",
            description: "All-in-one monochrome laser printer with fast printing, duplex scanning, and high-yield toner cartridges.",
            price: "379.99",
            originalPrice: "429.99",
            image: printerImg,  // Replace with the actual image source
            link: `/product/${generateSlug("Canon imageCLASS MF445dw Wireless Laser All-in-One Printer")}`,
        },

    ];

    // Find product by slug
    const product = allProducts.find((p) => {
        const slug = p.title
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, "")
            .replace(/\s+/g, "-");
        return slug === productSlug;
    });

    if (!product) return <div className="max-w-5xl mx-auto p-6 text-center text-red-500">Product not found!</div>;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <img
                        src={product.image || printerImg}
                        alt={product.title}
                        className="w-full h-auto object-contain rounded-lg border"
                    />
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Price Section */}
                    <div className="flex items-center gap-4 text-lg">
                        <span className="font-semibold text-indigo-600">${product.price}</span>
                        {product.originalPrice && (
                            <span className="line-through text-gray-400">${product.originalPrice}</span>
                        )}
                    </div>

                    {/* Placeholder / Info */}
                    <h1 className="text-2xl text-red-500 font-bold text-center">
                        Incomplete Product Details Page!
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        {/* Add to Cart */}
                        <button
                            onClick={() => navigate("/cart")}
                            className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
                        >
                            Add to Cart
                        </button>

                        {/* Buy Now */}
                        <button
                            onClick={() => navigate(`/checkout/${product.id}`)} // Example: navigate to checkout
                            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;
