import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { state, dispatch } = useCart();
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Giỏ hàng trống</h2>
        <Link to="/products">Quay lại mua sắm</Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1>Giỏ hàng của bạn</h1>
      <div className={styles.cartItems}>
        {state.cart.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.itemImage} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()} VNĐ</p>
            </div>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>{(item.price * item.quantity).toLocaleString()} VNĐ</p>
            <button onClick={() => removeItem(item.id)}>Xóa</button>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h2>Tổng tiền: {total.toLocaleString()} VNĐ</h2>
        <button onClick={clearCart}>Xóa tất cả</button>
        <button>Thanh toán</button> {/* Có thể mở rộng form thanh toán */}
      </div>
    </div>
  );
};

export default Cart;