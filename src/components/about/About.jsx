import React from "react";
import "./about.css";
import watch from "../../img/1.jpg";
import photo from "../../img/photo.jpg";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={watch} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">It is my pleasure</p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          animi quae id, dolore reprehenderit laborum nihil, quos nobis
          voluptates iure voluptas cum magnam rem asperiores mollitia enim ullam
          assumenda recusandae?
        </p>
        <div className="a-award">
          <img src={photo} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Design</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
