import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductList } from './Home'; // Import ProductList riêng từ Home.js
import styles from '../styles/Products.module.css';

const Products = () => {
  const [search, setSearch] = useState('');
  const { dispatch } = useCart();

  // Data sản phẩm (cùng với Home để nhất quán)
  const allProducts = [
    { id: 1, name: 'Hộp bã mía', price: 5000, image: '/img1.jpg' }, 
    { id: 2, name: 'Hộp xơ dừa', price: 4000, image: '/img2.jpg' }, 
    { id: 3, name: 'Hộp bã mía x10', price: 40000, image: '/img1.jpg' },
    { id: 4, name: 'Hộp xơ dừa x10', price: 35000, image: '/img2.jpg' },

  ];

  // Lọc theo search
  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert('Đã thêm vào giỏ hàng!');
  };

  return (
    <div className={styles.products}>
      <h1>Danh sách sản phẩm</h1>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <ProductList products={filteredProducts} limit={allProducts.length} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;