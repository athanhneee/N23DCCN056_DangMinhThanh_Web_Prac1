import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

async function getProduct(id) {
    if (!id) return null;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }
    const text = await res.text();
    if (!text) {
        return null;
    }
    try {
        const product = JSON.parse(text);
        return product?.id ? product : null;
    } catch {
        return null;
    }
}
export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) {
        notFound();
    }
    return (
        <div>
            <Navbar />

            <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-contain"
                />
                <div>
                    <h1 className="text-2xl font-bold mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-600 mb-4">
                        {product.description}
                    </p>
                    <p className="text-xl font-bold text-green-600 mb-4">
                        ${product.price}
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
