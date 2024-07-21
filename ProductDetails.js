// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://api.example.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [productId]);

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} / 5</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
