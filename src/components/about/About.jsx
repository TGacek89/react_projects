import React from "react";
import "./about.css";
import watch from "../../img/1.jpg";
import html from "../../img/html.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import php from "../../img/php.png";
import mongo from "../../img/mongo.png";
import mysql from "../../img/mysql.png";

function About() {
  return (
    <div className="a">
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-desc">
          New to industry and passionate about programing, after receving
          diploma from recently finished Full Stack Web Developer bootcamp by
          CodeSpace Academy here in Malaga. I'm looking to start my new carrer
          in world of programing.
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Programing languages</h4>
            <p className="a-award-desc">
              Languages and frameworks that we covered at<br></br> bootcamp
              among others.
            </p>
            <div className="a-award-icons">
              <img src={html} alt="" className="a-award-img" />
              <img src={react} alt="" className="a-award-img" />
              <img src={node} alt="" className="a-award-img" />
              <img src={php} alt="" className="a-award-img" />
              <img src={mongo} alt="" className="a-award-img" />
              <img src={mysql} alt="" className="a-award-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={watch} alt="" className="a-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
