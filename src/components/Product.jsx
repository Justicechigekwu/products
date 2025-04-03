import  { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";

const Product = ({ cart, handleAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    

    useEffect(() => {
        const fetchProducts = async () =>{
            try{
                const response = await fetch ('https://dummyjson.com/products?limit=200');

                if (!response.ok) {
                    throw new Error('Failed to fetch code!');
                }

                const data = await response.json();
                setProducts(data?.products);
                
            } catch (error) {
                seterror(error.message);
            } finally {
                setloading(false);
            }
        };

        fetchProducts();
    }, []);
    
    if (loading) return <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        {[...Array(6)].map((_, index) => (
            <ContentLoader
                key={index}
                speed={2}
                width={200}
                height={300}
                viewBox="0 0 200 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
                <rect x="0" y="220" rx="5" ry="5" width="200" height="20" />
                <rect x="0" y="250" rx="5" ry="5" width="100" height="20" />
            </ContentLoader>
        ))}
    </div>;
    if (error) return <p>Error: {error}</p>; 


    const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return(
        <>   
           <div className="container">
                <input className="search"
                     type="text"
                     placeholder="Search Products Categories Brands..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                 />
     
                  {/* Navigate to Cart */}
                  <Link to="/cart">
                     <header> &#x1F6D2; ({cart.length})</header>
                 </Link>
           </div>


            {/*  product */}
            <div className="product">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="productInfo" >
                        <Link to={`/product/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p className="ccc">{item.title}</p>
                        <p className="ccc">${item.price}</p>
                        <p className="ccc">{item.category}</p>
                        <p className="ccc">{item.name}</p>
                        </Link>

                        <button className="submit" onClick={() => handleAddToCart(item)}>add to Cart </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;


