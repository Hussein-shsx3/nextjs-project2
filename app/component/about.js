"use client";
import React from "react";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div id="About">
      <Slide left>
        <div id="About__1">
          <h1>Learn More</h1>
          <h1>About Travel</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            itaque sapiente tenetur eius quis doloremque, ipsum dolore maiores
            eaque minus facere iure nemo ex sed aliquam fuga reiciendis cum
            saepe!
          </p>
          <button className="cssbuttons-io-button">
            Explore Travel
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </Slide>
      <Slide right>
        <div id="About__img">
          <img src="./img/about-beach.jpg" alt="" />
        </div>
      </Slide>
    </div>
  );
};

export default About;
