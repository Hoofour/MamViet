import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Home.module.css';

// Tách ProductList ra export riêng để tái sử dụng
export const ProductList = ({ products = [], limit = 6, onAddToCart }) => {
  // Luôn gọi useCart ở đầu component (top-level)
  const { dispatch } = useCart();

  // Fallback nếu không truyền onAddToCart
  const handleAddToCart = onAddToCart || ((product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert('Đã thêm vào giỏ hàng!');
  });

  const defaultProducts = [
    { id: 1, name: 'Hộp đựng thức ăn (700ml) x1', price: 3500, image: '/img1.jpg' },
    { id: 2, name: 'Hộp đựng thức ăn (1000ml) x1', price: 4500, image: '/img2.jpg' },
    { id: 3, name: 'Hộp đựng thức ăn (700ml) x10', price: 35000, image: '/img1.jpg' },
    { id: 4, name: 'Hộp đựng thức ăn (1000ml) x10', price: 45000, image: '/img2.jpg' },
  ];

  const displayProducts = products.length > 0 ? products.slice(0, limit) : defaultProducts.slice(0, limit);

  return (
    <div className={styles.productGrid}>
      {displayProducts.map(product => (
        <div key={product.id} className={styles.productCard}>
          <img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }} // Fallback nếu ảnh lỗi
          />
          <h3>{product.name}</h3>
          <p>{product.price.toLocaleString()} VNĐ</p>
          <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  // Inline style cho banner với background từ public
  const bannerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/CoverHome.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f4f4f4', // Fallback nếu ảnh không load
  };

 

  return (
    <div className={styles.home}>
      <div className={styles.banner} style={bannerStyle}>
        {/* Watermark layer */}

        <div className={styles.bannerContent}>
          <h1>HỘP ĐỰNG THỨC ĂN MẦM VIỆT</h1>
          <p>Gieo xanh từ bã mía, lớn cùng thiên nhiên</p>
        </div>
      </div>
      <section className={styles.productsSection}>
        <h2>Sản phẩm nổi bật</h2>
        <ProductList limit={4} /> {/* Không truyền onAddToCart, dùng fallback */}
      </section>
    </div>
  );
};

export default Home;