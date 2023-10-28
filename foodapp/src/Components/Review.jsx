import React from "react";
import { review } from "../Data";
import quoteImage from "../assets/images/quote-img.png";

function Review() {
  return (
    <section className="review" id="review">
      <h3 className="heading">
        {" "}
        CUSTOMER'S <span>Review</span>
      </h3>

      <div className="box-container">
        {review.map((item, index) => (
          <div className="box">
            {" "}
            <img src={quoteImage} className="quote" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              repudiandae! Voluptas delectus reprehenderit quas ad? Quae,
              nostrum iure, dicta aliquam fuga architecto ab saepe sapiente,
              molestiae voluptates est? Alias veniam repellendus voluptatem
              velit vel harum assumenda magnam illo nemo iusto delectus labore
              repudiandae, quas ex! Excepturi ipsam praesentium, minima nulla.
            
            </p>
            <img src={item.img} alt="" className="user"/>
            <h3>Geo George</h3>
            <div className="stars">
            <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
