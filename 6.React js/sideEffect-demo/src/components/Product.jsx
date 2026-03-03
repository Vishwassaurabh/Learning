import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  //loading
  //data/success
  //Error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    // //make api call
    // axios
    //   .get(apiUrl)
    //   .then((res) => {
    //     setProduct(res.data); // ✅ axios data is in res.data
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //   });

    const fetchproduct = async () => {
      try {
        const response = axios.get(apiUrl);
        setProduct((await response).data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    //call the async fn
    fetchproduct();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  return (
    <>
      <h1>List of products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1rem",
        }}
      >
        {product.map((product) => {
          return (
            <div
              key={product.id}
              style={{ border: "1px solid #ddd", padding: "1rem" }}
            >
              <img
                style={{ height: "150px", objectFit: "contain" }}
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
