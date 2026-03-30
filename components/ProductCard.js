import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition">

            { }
            <Link href={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain mb-4 cursor-pointer"
                />
            </Link>

            { }
            <Link href={`/product/${product.id}`}>
                <h2 className="font-semibold text-lg line-clamp-1 hover:text-blue-500 cursor-pointer">
                    {product.title}
                </h2>
            </Link>

            <p className="text-gray-500 text-sm mb-2">
                {product.category}
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-green-600">
                    ${product.price}
                </span>

                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                    Add +
                </button>
            </div>
        </div>
    );
}