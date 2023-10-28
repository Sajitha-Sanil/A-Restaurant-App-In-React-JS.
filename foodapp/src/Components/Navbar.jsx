import React, { useRef, useState } from 'react';
import "../assets/css/style.css";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data"


function Navbar() {
    const searchRef = useRef(null);
    const cartRef = useRef(null);
    const navbarRef = useRef(null);
    const [searchVisible, setSearchVisible] = useState(false);
    const searchHandler = () => {
      setSearchVisible(!searchVisible);
      cartRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
    };
  
    const cartHandler = () => {
      cartRef.current.classList.toggle("active");
      navbarRef.current.classList.remove("active");
    };
  
    const navbarHandler = () => {
      navbarRef.current.classList.toggle("active");
      cartRef.current.classList.remove("active");
    };
  
    return (
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="img-logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Products</a>
          <a href="#review">Review</a>
          <a href="#contacts">Contacts</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <div className={`search-form ${searchVisible ? 'active' : ''}`}>
          <input type="search" placeholder="search here...." ref={searchRef} id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

       <div className="cart-items-container" ref={cartRef}> 
        { cart.map ((item, index)=>(
          <div className="cart-item" key={index}>
            <span className="fas fa-times"></span>
            <img src={item.img} alt="" />

            <div className='content'>
              <h3>Cart item 1</h3>
              <div className='price'>$15</div>
            </div>
          </div>
        ))}
        <a className='btn' href="#">checkout now</a>
        </div>
      </header>
    );
  }
  
  export default Navbar;