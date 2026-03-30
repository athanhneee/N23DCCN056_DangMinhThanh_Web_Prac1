import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}