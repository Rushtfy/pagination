import React from 'react'
import styles from './Header.module.scss'
import logo from './assets/logo.png.webp'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigation = useNavigate();

  const goCart = () => {
    navigation("/basket");
  }
  const goWish = () => {
    navigation("/wishlist");
  }

  return (
    <div className={styles.headerMain}>
        <div className={styles.container}>
            <a href=""><img src={logo} alt="logo" /></a>
            <ul>
                <li><a href="">Home</a></li>
                <li onClick={goCart}><a href="">Shopping Cart</a></li>
                <li onClick={goWish}><a href="">Wishlist</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button className={styles.transparentButton}>Free Trail</button>
        </div>
    </div>
  )
}

export default Header