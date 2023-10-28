import React from "react";
import AboutImg from "../assets/images/about-img";

function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>What make our food special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laboriosam fugit non totam voluptas odio quos unde
              tenetur perferendis sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              distinctio deserunt nesciunt rem provident qui. Quos, a.
              Asperiores, quos quia?
            </p>
            <a href="#" className="btn">Learn More..</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
