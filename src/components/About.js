    import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Giới thiệu về ShopVN</h1>
      <p>Chúng tôi là cửa hàng bán hàng trực tuyến chuyên về điện tử, với hơn 10 năm kinh nghiệm. Cam kết chất lượng và dịch vụ tốt nhất.</p>
      <section>
        <h2>Sứ mệnh</h2>
        <p>Mang đến sản phẩm chất lượng cao với giá cả hợp lý.</p>
      </section>
      <section>
        <h2>Liên hệ</h2>
        <p>Email: mamviet01@gmail.com | ĐT: 0123456789</p>
      </section>
    </div>
  );
};

export default About;