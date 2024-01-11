"use client";
import React from "react";
import Slide from "react-reveal/Slide";
const Popular = () => {
  return (
    <div id="Popular">
      <Slide bottom>
        <h1>Enjoy The Beauty</h1>
        <h1>of the world</h1>
      </Slide>
      <Slide bottom>
        <div id="Popular__1">
          <div id="Popular__imgs">
            <div id="Popular__img">
              <img src="./img/popular-mountain.jpg" alt="" />
            </div>
            <h1>Loogan Mountain</h1>
            <h4>
              <i className="fa-solid fa-location-dot"></i> Canada
            </h4>
          </div>
          <div id="Popular__imgs">
            <div id="Popular__img">
              <img src="./img/popular-forest.jpg" alt="" />
            </div>
            <h1>Spike Forest</h1>
            <h4>
              <i className="fa-solid fa-location-dot"></i> Irland
            </h4>
          </div>
          <div id="Popular__imgs">
            <div id="Popular__img">
              <img src="./img/popular-lake.jpg" alt="" />
            </div>
            <h1>Garda Lake</h1>
            <h4>
              <i className="fa-solid fa-location-dot"></i> Italy
            </h4>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Popular;
