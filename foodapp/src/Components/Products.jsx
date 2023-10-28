import React from "react";
import { product } from "../Data";

function Products() {
  return (
    <section className="products" id="product">
      <h3 className="heading">
        Our <span>Products</span>
      </h3>

      <div className="box-container">
        {product.map((item, index) => (
          <div key={index}>
            <div className="box">
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
                <div className="image">
                  {" "}
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div className="content">
                {" "}
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
