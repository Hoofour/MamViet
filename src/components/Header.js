import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { state } = useCart();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Thay text bằng img logo từ public */}
        <Link to="/" className={styles.logo}>
          <img src="/LOGO.png" alt="Mầm Việt - Logo" className={styles.logoImg} />
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Trang chủ</Link>
          <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>Giới thiệu</Link>
          <Link to="/products" className={location.pathname === '/products' ? styles.active : ''}>Sản phẩm</Link>
          <Link to="/cart" className={location.pathname === '/cart' ? styles.active : ''}>
            Giỏ hàng ({state.cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;