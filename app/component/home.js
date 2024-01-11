"use client";
import React from "react";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <div id="Home">
      <div id="Home_1">
        <Slide left>
          <h2>Welcome to Travel</h2>
          <h1>Explore</h1>
          <h1>The World</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita harum est assumenda aperiam, soluta accusamus quod sapiente
            ut excepturi necessitatibus?
          </p>
          <button className="cssbuttons-io-button">
            Start Your Journey
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
        </Slide>
        <div id="imgs">
          <Slide bottom>
            <div id="img">
              <img src="./img/home-trees.jpg" alt="" />
            </div>
            <div id="img">
              <img src="./img/home-lake.jpg" alt="" />
            </div>
            <div id="img">
              <img src="./img/home-mountain (1).jpg" alt="" />
            </div>
            <div id="img">
              <img src="./img/home-beach.jpg" alt="" />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Home;
