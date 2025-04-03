import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   console.log(id)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);   

        if (!response.ok) throw new Error("Failed to fetch product details!");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p className="spinner"></p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="detailsContainer">
      <a href="/" className="back">⬅ Back</a>
      <img src={products.thumbnail} alt={products.title} />
      <h2>{products.title}</h2>
      <p>{products.description}</p>
      <p>${products.price}</p>
      <p>rating:{products.rating}⭐</p>
      <p>stock:{products.stock}</p>
    </div>
  );
};

export default Details;