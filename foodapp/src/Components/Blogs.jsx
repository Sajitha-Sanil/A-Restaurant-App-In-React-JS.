import React from "react";
import { blog } from "../Data";

function Blogs() {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          Our<span> Blogs</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div key={index} className="box">
              <div className="image">
                <img src={item.img} alt="" />{" "}
              
              </div>
              <div className="content">
                  <a href="#" className="title">
                    Tasty and refreshing species
                  </a>
           
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio eaque laudantium ipsa voluptatibus quasi ad deserunt consequuntur rerum molestiae!</p>
                <a href="#"className="btn">Read More..</a>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
