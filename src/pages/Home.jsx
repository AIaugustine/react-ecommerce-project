import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <section className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Home;
